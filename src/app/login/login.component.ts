import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { UsersService } from '../components/users.service';
import { Login } from '../login';
import { ReturnedFromLogin } from '../returnedFromLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  ReturnLogin: ReturnedFromLogin = {
    Id: 0,
    Token: ""
  }
  UserLogin: Login = {
    Email: "",
    Password: ""
  }

  constructor(
    private service: UsersService,
    private router: Router
  ) { }

  Login() {
    this.service.Login(this.UserLogin).subscribe((returnedData) => {
      this.ReturnLogin = returnedData;
      localStorage.setItem('ReturnLogin', JSON.stringify(this.ReturnLogin))

      this.router.navigate(["/dashboard"])
    });
  }

}
