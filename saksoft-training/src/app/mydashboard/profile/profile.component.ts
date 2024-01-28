import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/services/ajax-service/ajax.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toastr/toast.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userObj: any;
  currentindex: any = {};

  adduser: any = {};
  constructor(private ajaxService: AjaxService, private toastService: ToastService, private router: Router, private loginservice: LoginService, private activatedRoute: ActivatedRoute) {
    this.userObj = {};

    this.loginservice.getLoggedInName.subscribe(obj => {
      if (obj.email) {
        this.userObj = obj;
      }
      else (
        this.userObj = null
      )

    });
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    let email;

    if (id) {

      email = id;

    }

    else {

      let obj: any;

      obj = JSON.parse(localStorage.getItem('userdata') || '{}')

      email = obj.id;

    }

    {

      this.ajaxService.getUserByid(email).subscribe(obj => {

        this.userObj = obj

      });

    }


  }

  updateUser(rev: any) {
    this.currentindex = rev;
    console.log(rev);
    console.log(this.currentindex.id);
    localStorage.setItem('element', JSON.stringify(this.currentindex));
    let element = JSON.parse(localStorage.getItem("element") || '{}');
    rev.id = element.id;
    this.ajaxService.getUserByid(element.id).subscribe(data => {
      console.log('get the value')
      this.adduser = data;
    }, error => {
      console.log("something went wrong");
    });
  }

  onSubmit() {
    this.loginservice.update(this.adduser);
  }



  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
