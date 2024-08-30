import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private routor:Router) { }
  onLogin(username :string,password:string){
    if(username == "ram" && password == "123"){
      return 200;
    }else{
      return 403;
    }
  }
  logout(){
    this.routor.navigate(['login'])
  }
}
