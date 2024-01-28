import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userObj: any;
  constructor(private LoginService: LoginService, private toastr: ToastrService) {
    this.userObj = {};
  }

  ngOnInit(): void {
  }

  loginMe() {
    this.LoginService.login(this.userObj);
  }

}
