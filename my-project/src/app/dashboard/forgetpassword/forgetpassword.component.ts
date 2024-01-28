import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/sevice/login.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  userObj: any;
  constructor(private LoginService: LoginService) { 

  this.userObj = {};
  }

  ngOnInit(): void {
    let str = localStorage.getItem('userdata');
    if (str) {
      this.userObj = JSON.parse(str);
    }
  }

  changePassword(){

    this.LoginService.changePassword(this.userObj);

  }

}
