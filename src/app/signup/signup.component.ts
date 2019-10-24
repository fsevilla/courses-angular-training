import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmation: new FormControl('', [Validators.required, Validators.minLength(8)])
    }, {
      validators: this.matchPassword.bind(this)
    });
  }

  register() {
    console.log('will register', this.signupForm);
  }

  matchPassword(): ValidationErrors | null {
    console.log('This: ', this);
    if(!this.signupForm) return;
    let data = this.signupForm.getRawValue();
    console.log('Form data: ', data);
    let password = data.password;
    let confirmation = data.confirmation;

    if(password == confirmation) {
      return null;
    } else {
      return {
        match: true
      }
    }
  }

}
