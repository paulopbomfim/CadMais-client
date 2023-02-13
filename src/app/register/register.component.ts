import { UsersService } from './../components/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  User = {
    cpf: "",
    name:"",
    email: "",
    phone: "",
    password: "",
    address: [{location:""}]
  }

  constructor(
    private service: UsersService
  ) { }

  create(): void {
    this.service.RegisterUser(this.User).subscribe();
  }

  AppendNewAddressField() {
    this.User.address.push({location: ""});
  }

  RemoveAddressField(i: number) {
    this.User.address.splice(i, 1);
  }
}
