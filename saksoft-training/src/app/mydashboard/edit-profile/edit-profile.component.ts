import { Component, OnInit } from '@angular/core';
import { AjaxService } from './../../services/ajax-service/ajax.service';
import { ToastService } from './../../services/toastr/toast.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  UserList: any;
  userObj: any;
  add: any;
  currentindex: any = {};
  adduser: any = {};
  p: number = 1;
  searchText: string;

  constructor(private ajaxService: AjaxService, private toastService: ToastService, private router: Router, private loginservice: LoginService) {

    this.add = {};
    this.searchText = "";

    this.loginservice.getLoggedInName.subscribe(obj => {
      if (obj.email) {
        this.UserList = obj;
      }
      else (
        this.UserList = null
      )
    });
  }

  ngOnInit(): void {
    this.ajaxService.getuserList("getall").subscribe(data => {
      this.UserList = data;
    }, error => {
      console.log("something went wrong");
    });

    let str = localStorage.getItem('element');
    if (str) {
      this.userObj = JSON.parse(str);
    }
  }

  updateUser(details: any) {
    this.currentindex = details;
    console.log(details);
    console.log(this.currentindex.id);
    localStorage.setItem('element', JSON.stringify(this.currentindex));
    let element = JSON.parse(localStorage.getItem("element") || '{}');
    details.id = element.id;
    this.ajaxService.getUserByid(element.id).subscribe(data => {
      console.log('get the value')
      this.adduser = data;
      this.router.navigate(['/dashboard/edit']);
    }, error => {
      console.log("something went wrong");
    });

  }

  onSubmit() {
    this.loginservice.Updateuser(this.adduser);
    this.update();
  }

  update() {
    this.ajaxService.updateUserByid("update/" + this.adduser.id, this.adduser).subscribe(data => {
      this.adduser = data;
      //localStorage.setItem('userdata', JSON.stringify(data));
      this.toastService.success('Updated Successfully', 'Success', 3000);
      this.ajaxService.getuserList("getall").subscribe(data => {
        this.UserList = data;
      }, error => {
        console.log("something went wrong");
      });
      this.router.navigate(['/dashboard/edit']);
    }, error => {
      console.log("something went wrong");
      this.toastService.error('Failed to Update', 'Error', 3000);
    });
  }


  deleteUser(details: any) {
    this.ajaxService.deleteUser('delete/' + details.id).subscribe(data => {
      console.log('deleted')
      this.toastService.success('Deleted Successfully', 'Success', 3000);
      this.ajaxService.getuserList("getall").subscribe(data => {
        this.UserList = data;
      }, error => {
        console.log("something went wrong");
      });

    }, error => {
      console.log("something went wrong");
      this.toastService.error('Failed to Delete', 'Error', 3000);
    });

  }

  onSubmits(myForm: NgForm) {
    console.log(myForm)
    this.userSave();
  }

  userSave() {
    this.ajaxService.registerList("add", this.add).subscribe(data => {
      this.add = data;
      this.add.id
      console.log(data)
      this.toastService.success('Added Successfully', 'Success', 3000);
      this.ajaxService.getuserList("getall").subscribe(data => {
        this.UserList = data;
      }, error => {
        console.log("something went wrong");
      });
      this.router.navigate(['/dashboard/edit']);
    }, error => {
      console.log("something went wrong");
      this.toastService.error('Failed to Add', 'Error', 3000);
    });
  }

  View(id: number) {
    this.router.navigate(['/dashboard/profile', id]);

  }



  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }


  displayStyle1 = "none";
  openPop() {
    this.displayStyle1 = "block";
  }
  closePop() {
    this.displayStyle1 = "none";
  }


  displayStyle2 = "none";
  openPop2() {
    this.displayStyle2 = "block";
  }
  closePop2() {
    this.displayStyle2 = "none";
  }


}
