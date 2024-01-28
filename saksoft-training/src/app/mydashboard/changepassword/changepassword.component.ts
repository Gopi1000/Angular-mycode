import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  userObj: any;
  constructor(private LoginService: LoginService) {
    this.userObj = {};
  }

  ngOnInit(): void {
    let str = localStorage.getItem('userdata');
    if (str) {
      this.userObj = JSON.parse(str);
    }

    this.LoginService.getLoggedInName.subscribe(obj => {
      if (obj.email) {
        this.userObj = obj;
      }
      else (
        this.userObj = null
      )

    });
  }

  changePassword() {

    this.LoginService.changePassword(this.userObj);

  }

}
