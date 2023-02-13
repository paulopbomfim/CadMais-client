import { Router } from '@angular/router';
import { UsersService } from './../components/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  User: User = {
    id: 0,
    name: "",
    cpf: "",
    email: "",
    phone: "",
    address: [],
  };

  FirstName: string = ""
  LastName: string = ""

  constructor(
    private service: UsersService,
    private router: Router
  ) {}

  ngOnInit():void {
    let local = JSON.parse(localStorage.getItem('ReturnLogin') || "")
    if (local === "") {
      this.router.navigate(['/login'])
    }
    this.service.ListUser(local.id, local.token).subscribe((user) => {
      this.User = user;
      const nameArray = this.User.name.split(" ");
      this.FirstName = nameArray[0];
      this.LastName = nameArray[nameArray.length - 1];
    })

  }
}
