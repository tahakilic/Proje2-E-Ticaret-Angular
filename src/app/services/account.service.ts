import { Injectable } from '@angular/core';
import {User} from "../login/user";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  loggedIn=false;

  login(user:User):boolean{
    if(user.userName=="engin"&&user.password=="12345"){
      this.loggedIn=true;
      localStorage.setItem("isLogged",User.name)
      return true;
    }
    return false;
  }
  isLoggedIn(){
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}
