import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import qJson from '../assets/questions.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  questionList:FormGroup;
  numCorrect:String = "";
  passed:boolean = true;
  showResult:boolean = false;
  qList? = qJson;
  
  constructor(public form:FormBuilder) {
    this.questionList=form.group({});
  }

  ngOnInit():void {
    this.qList.forEach((q: { Question: string; })=> {
      this.questionList.addControl(q.Question,this.form.control(""));
    })
  }

  checkAnswer():void {
    let answerList = this.questionList.value;
    let counter:number = 0;
    this.qList.forEach((element: { Question: any; Ans: string; corr: string; }) => {
      let currQ = element.Question;
      if(answerList[currQ] == element.Ans) {
        element.corr = "Correct!"
        counter++;
      } else {
        element.corr="Wrong answer! Correct answer was " + element.Ans;
      }
    });
    this.numCorrect = ""+counter;
    this.showResult = true;
    if(counter >= 7) {
      this.passed = true;
    } else {
      this.passed = false;
    }
  }
}
