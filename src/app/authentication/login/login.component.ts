import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { LoginService } from './login.service';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials:any = {};

  constructor(
    private router: Router,
    private sessionService:SessionService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.credentials).then(response => {
      
      this.sessionService.saveSession(response);
      const tokenStr = this.sessionService.getSession();

      this.loginService.getUserData(tokenStr).then(response => {
        this.sessionService.saveUserData(response);
        this.router.navigate(['/dashboard']);
      }).catch(() => {
        console.error('Si se logueo pero no me pude traer tus datos');
      });
    }).catch(err => {
      console.error('credenciales incorrectas');
    });
  }

  loginAsObservable() {
    this.loginService.loginAsObservable(this.credentials).subscribe(response => {
      console.log('Response', response);
    }, err => {
      console.error('Error: ', err);
    });
  }

  validateKey(e) {
    console.log('Keypressed: ', e);
    if(e.key == 'Enter') {
      this.login();
    }
  }

}
