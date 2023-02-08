import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = true;
  isAdmin = true;
  ApiKey = 'AIzaSyDokrALhHaV0zjuGYPjMjjmYELpOHsGfbI';
  signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.ApiKey}`;
  signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.ApiKey}`;
  constructor(private http: HttpClient) {}
  isAuthenticated() {
    return this.isLoggedIn;
  }
  isRoleAdmin() {
    return this.isAdmin;
  }
  signUp(email: string, password: string) {
    return this.http.post(this.signUpUrl, {
      email: email,
      password: password,
      returnFreshToken: true,
    });
  }
  signIn(email: string, password: string) {
    return this.http.post(this.signInUrl, {
      email: email,
      password: password,
      returnFreshToken: true,
    });
  }
}
