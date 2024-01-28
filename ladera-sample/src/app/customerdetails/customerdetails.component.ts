import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  userObj: any;

  constructor() {
    this.userObj = null;
  }

  ngOnInit(): void {
    let str = localStorage.getItem('element');
    if (str) {
      this.userObj = JSON.parse(str);
    }
  }

}
