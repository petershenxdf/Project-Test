import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

export class SignUp {
  public userName: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
}

export class Login {
  public userName: string;
  public password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor() {}
  modelLogin = new Login();
  modelSignUp = new SignUp();
  public signed: boolean;
  public isIn: boolean;
  public userName: string;
  ngOnInit(): void {
    this.signed = true;
    this.isIn = false;
  }

  onSubmit(form): void {
    this.userName = form.value.name;
    this.isIn = true;
  }
  onGoToSignUp(): void {
    this.signed = !this.signed;
  }
  logOut(): void {
    this.isIn = false;
    this.signed = true;
  }

}
