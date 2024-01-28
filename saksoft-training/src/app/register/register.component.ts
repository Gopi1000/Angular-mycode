import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AjaxService } from './../services/ajax-service/ajax.service';
import { ToastService } from './../services/toastr/toast.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userObj: any;
  adduser: any;


  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private ajaxService: AjaxService, private toastService: ToastService, private router: Router, private loginservice: LoginService) {
    //this.userObj={};
    this.adduser = {};
  }

  ngOnInit(): void {
  }

  registerme() {
    console.log(this.userObj);
  }

  onSubmit(myForm: NgForm) {
    console.log(myForm)
    this.register();
  }


  register() {
    this.loginservice.register(this.adduser);
  }

}
