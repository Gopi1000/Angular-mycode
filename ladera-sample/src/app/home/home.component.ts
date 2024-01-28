import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { AjaxServiceService } from '../services/ajax-service.service';
import { ToastService } from '../services/toastr/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerWithEvent = { customer: {}, event: {} };

  userObj: any;
  addcustomer: any;
  addevent: any;

  constructor(private ajaxService: AjaxServiceService, private toastService: ToastService, private loginservice: LoginService,) {
    this.addcustomer = {};
    this.addevent = {};
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addcustomer.event = this.addevent;
    this.loginservice.register(this.addcustomer);

  }
  register() {
    this.addcustomer.event = this.addevent;
    this.loginservice.register(this.addcustomer);

  }

}
