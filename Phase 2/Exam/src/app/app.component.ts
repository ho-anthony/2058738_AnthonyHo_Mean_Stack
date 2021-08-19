import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import * as qJson from '../assets/questions.json';

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
  tempJson = 
  [{"QNum":"1", "Question":"1+2?", "Opt1":"12", "Opt2":"1", "Opt3":"2", "Opt4":"3", "Ans":"3", "corr":""},
  {"QNum":"2", "Question":"3+4?", "Opt1":"1", "Opt2":"7", "Opt3":"42", "Opt4":"2", "Ans":"7", "corr":""},
  {"QNum":"3", "Question":"5+6?", "Opt1":"68", "Opt2":"45", "Opt3":"11", "Opt4":"3", "Ans":"11", "corr":""}]
  test1 = ""
  test2 = ""
  constructor(public form:FormBuilder) {
    this.questionList=form.group({});
  }

  ngOnInit():void {
    this.tempJson.forEach(q=> {
      this.questionList.addControl(q.Question,this.form.control(""));
    })
  }

  checkAnswer():void {
    let answerList = this.questionList.value;
    let counter:number = 0;
    //console.log(answerList["1+2?"]);
    this.tempJson.forEach(element => {
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
    if(counter >= 3) {
      this.passed = true;
    } else {
      this.passed = false;
    }
  }
}
