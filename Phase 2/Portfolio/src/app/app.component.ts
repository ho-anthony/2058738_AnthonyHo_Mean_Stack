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
  
  checkLogin(loginRef:NgForm) {
    let login = loginRef.value;
    console.log(login.username + " " + login.password);
    if(login.username == "username" && login.password == "password") {
      this.loginMsg = "login success";
    } else {
      this.loginMsg = "login failed"
    }
  }

  checkRegister(registerRef:NgForm) {
    let registerVal = registerRef.valid;
    if(registerVal) {
      this.registerMsg = "Successful Registration"
    } else {
      this.registerMsg = "Please fill in all fields"
    }
  }

}
