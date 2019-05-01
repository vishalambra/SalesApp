import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  constructor(private myRoute: Router) { }
  
  // used to set token into localstorage
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }

  // get the token
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  
}