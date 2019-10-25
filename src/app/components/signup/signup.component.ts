import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmation: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }, {
      validators: this.matchPasswords.bind(this)
    });
  }

  signup() {
    if(this.form.valid) {
      console.log('enviar datos');
    } else {
      console.log('algo falta');
    }
  }

  matchPasswords():ValidationErrors | null {
    if(!this.form) return;
    let data = this.form.getRawValue();
    if(data.password == data.confirmation) {
      return null;
    } else {
      return {
        match: true
      }
    }

  }

}
