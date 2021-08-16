import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {}
  loginMsg:String = "";
  registerMsg:String="";
  infoMsg:String="";
  showLogin:boolean = true;
  showRegister:boolean = false;
  showPortfolio:boolean = false;
  showTable:boolean = false;
  currUser:any = "";
  infoArr = new Array;
  
  checkLogin(loginRef:NgForm):void {
    let login = loginRef.value;
    if(login.username == sessionStorage.getItem("username") && sessionStorage.getItem("password")) {
      this.loginMsg = "login success";
      this.currUser = sessionStorage.getItem("username");
      this.showLogin = false;
      this.showPortfolio = true;
    } else {
      this.loginMsg = "Login Failed"
    }
  }

  navRegister():void {
    this.showLogin = false;
    this.showRegister = true;
    this.registerMsg = "";
  }

  navLogin():void {
    this.showLogin = true;
    this.showRegister = false;
    this.loginMsg = "";
  }

  checkRegister(registerRef:NgForm):void {
    let registerVal = registerRef.valid;
    let registerInfo = registerRef.value;
    if(registerVal) {
      sessionStorage.setItem("username",registerInfo.uname);
      sessionStorage.setItem("password",registerInfo.pass);
      this.navLogin();
    } else {
      this.registerMsg = "Please fill in all fields"
    }
  }

  saveInfo(portfolioEntry:NgForm):void{
    let info = portfolioEntry.value;
    let infoVal = portfolioEntry.valid;
    let jsonObj = {conName:info.coName, conNum:info.phoneNum};
    if(infoVal) {
      this.infoMsg="";
      this.infoArr.push(jsonObj);
    } else {
      this.infoMsg="Please fill in all fields"
    }
  }

  showPort():void {
    this.showTable=!this.showTable;
  }

}
