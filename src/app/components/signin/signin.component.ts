import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  constructor(private authService: AuthService) {}
  onSubmitS(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signIn(email, password).subscribe((data) => {
      console.log(data);
    });
    form.reset();
  }
}
