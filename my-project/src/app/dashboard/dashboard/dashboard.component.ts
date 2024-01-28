import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
