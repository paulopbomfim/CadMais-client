import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  ProfileModeEdit: boolean = false;

  User = {
    Id: 1,
    Name: "Paulo",
    Cpf: "04540925121",
    Email: "paulopbomfim@gmail.com",
    Phone: "61999526521",
    Address: [{
      Location: "SQS 410 BLOCO P C201"
    }]
  }

  ChangeProfileMode():boolean {
    return this.ProfileModeEdit = !this.ProfileModeEdit;
  }

  AppendNewAddressField():void {
    this.User.Address.push({Location: ""})
  }

  RemoveAddressField(i: number):void {
    this.User.Address.splice(i, 1);
  }
}
