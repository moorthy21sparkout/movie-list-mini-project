import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMsg: string = '';

  ngOnInit(): void {

  }
  constructor(private auth:AuthService,private routor:Router){}
  onLogin() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "the name field is required"
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "the password field is required"
    } else {
      this.errorMsg = '';
      let responce = this.auth.onLogin(this.username,this.password);
      if(responce == 200){
        this.routor.navigate(['home'])
      }if(responce == 403){
        this.errorMsg = "invalid canditate"
      }
    }
  }
}
