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
  showLogin = true;
  showRegister = false;
  showPortfolio = false;
  
  checkLogin(loginRef:NgForm):void {
    let login = loginRef.value;
    console.log(login.username + " " + login.password);
    if(login.username == "username" && login.password == "password") {
      this.loginMsg = "login success";
      this.showLogin = false;
      this.showPortfolio = true;
    } else {
      this.loginMsg = "login failed"
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
    if(registerVal) {
      this.registerMsg = "Successful Registration"
    } else {
      this.registerMsg = "Please fill in all fields"
    }
  }

}
