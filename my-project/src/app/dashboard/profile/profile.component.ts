import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userObj: any;
  constructor() {
    this.userObj = null;
  }

  ngOnInit(): void {
    let str = localStorage.getItem('userdata');
    if (str) {
      this.userObj = JSON.parse(str);


    }
  }

}
