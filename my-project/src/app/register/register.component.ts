import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AjaxService } from './../services/ajax-service/ajax.service';
import { ToastService } from './../services/toastr/toast.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/sevice/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ViewChild('userForm') uf: NgForm;

  // setDefaultValue(): void{
  //   this.uf.setValue({
  //     firstname:'gopi',
  //     lastname:'kannan',
  //     username:'gopikannan',
  //     email:'gopi@gmail.com',
  //     password:'123456',
  //     address:'trichy',
  //     country:'India',
  //     state:'TamilNadu',
  //     zip:'621010'

  //   });
  // }
   
  addbook: any = {};

  userObj: any;
  constructor(private ajaxService: AjaxService, 
              private toastService: ToastService, 
              private router: Router,
              private LoginService: LoginService ) { 
                
                this.userObj = {};
              }

  ngOnInit(): void {
  }

  countryList = [
    { "countryname": "India" },
    { "countryname": "USA" },
    { "countryname": "England" }
  ];

  stateList = [
    { "statename": "TamilNadu" },
    { "statename": "Kerala" },
    { "statename": "karanataka" }
  ];

  onSubmit(myForm: NgForm) {
    console.log(myForm)
    this.register();
  }

  // onSubmit(myForm: NgForm){
  //   console.log(this.uf);

  // }

  register(){
    this.ajaxService.addBookList("register", this.addbook).subscribe(data => {
      this.addbook = data;
      this.toastService.success('Register Successfully', 'Success', 10000);
      // this.LoginService.login(this.userObj);
       this.router.navigate(['/login']);
    }, error => {
      console.log("something went wrong");
      this.toastService.error('Failed to Register', 'Error', 10000);
    });
  }

  

}
