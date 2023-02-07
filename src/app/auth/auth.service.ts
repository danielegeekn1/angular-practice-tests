import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = true;
  isAdmin = true;
  url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDokrALhHaV0zjuGYPjMjjmYELpOHsGfbI';
  constructor(private http: HttpClient) {}
  isAuthenticated() {
    return this.isLoggedIn;
  }
  isRoleAdmin() {
    return this.isAdmin;
  }
  signUp(body: {}) {
    this.http.post(this.url, body);
  }
}
