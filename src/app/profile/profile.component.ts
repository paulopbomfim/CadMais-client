import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../components/users.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  ProfileModeEdit: boolean = false;
  Token: string = "";
  User: User = {
    id: 0,
    name: "",
    cpf: "",
    email: "",
    phone: "",
    address: [{
      location: ""
    }]
  }

  constructor(
    private service: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let local = JSON.parse(localStorage.getItem('ReturnLogin') || "")
    if (local === "") {
      this.router.navigate(['/login'])
    }
    this.service.ListUser(local.id, local.token).subscribe((user) => {
      this.User = user;
      this.Token = local.token;
    })
  }

  ChangeProfileMode():boolean {
    return this.ProfileModeEdit = !this.ProfileModeEdit;
  }

  AppendNewAddressField():void {
    this.User.address.push({location: ""})
  }

  RemoveAddressField(i: number):void {
    this.User.address.splice(i, 1);
  }

  UpdateProfileData() {
    this.service.UpdateUser(this.User.id!, this.Token, this.User).subscribe();
  }
}
