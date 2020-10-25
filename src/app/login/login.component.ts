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
  ngOnInit(): void {
    this.signed = true;
  }

  onSubmit(form): void {
    console.log(form.value);
  }
  onGoToSignUp(): void {
    this.signed = !this.signed;
  }

}
