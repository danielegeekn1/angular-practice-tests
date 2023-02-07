import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor() {}
  onSubmitS(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);
    form.reset();
  }
}
