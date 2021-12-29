import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private adminServ: AdminserviceService) {}

  ngOnInit(): void {}
  onClickSubmit(data: any) {
    const user: any = {
      username: data.username,
      password: data.password,
    };
    console.log(user);
    alert('Hello: ' + ' ' + user.username);
  }
}
