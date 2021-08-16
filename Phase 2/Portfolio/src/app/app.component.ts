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
  showLogin:boolean = true;
  showRegister:boolean = false;
  showPortfolio:boolean = false;
  currUser:any = "";
  
  checkLogin(loginRef:NgForm):void {
    let login = loginRef.value;
    console.log(login.username + " " + login.password);
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
  }

  navLogin():void {
    this.showLogin = true;
    this.showRegister = false;
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

}
