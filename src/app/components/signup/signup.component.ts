import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private authService: AuthService) {}
  onSubmitS(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);
    this.authService.signUp({
      email: email,
      password: password,
      returnSecureToken: true,
    });
    form.reset();
  }
}
