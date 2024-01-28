import { Component, OnInit } from '@angular/core';
import { AjaxServiceService } from '../services/ajax-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customertable',
  templateUrl: './customertable.component.html',
  styleUrls: ['./customertable.component.css']
})
export class CustomertableComponent implements OnInit {


  bookList: any;
  currentindex: any = {};
  addcustomer: any = {};

  customerList: any;
  searchText: string;

  constructor(private ajaxService: AjaxServiceService, private router: Router) {
    this.searchText = "";
  }

  ngOnInit(): void {
    this.ajaxService.sendGetRequest("getall").subscribe(data => {
      this.customerList = data;
    }, error => {
      console.log("something went wrong");
    });

  }

  viewcustomer(cus: any) {
    this.currentindex = cus;
    console.log(cus);
    console.log(this.currentindex.bookId);
    localStorage.setItem('element', JSON.stringify(this.currentindex));
    let element = JSON.parse(localStorage.getItem("element") || '{}');
    cus.id = element.id;
    this.ajaxService.getcustomerListByid('' + element.id).subscribe(data => {
      console.log('get the value')
      this.addcustomer = data;
      this.router.navigate(['/details']);
    }, error => {
      console.log("something went wrong");
    });

  }

}
