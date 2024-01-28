import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toastr/toast.service';
import { AjaxService } from './../../services/ajax-service/ajax.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //a=5;

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private ajaxService: AjaxService, private toastService: ToastService, private router: Router) {
  }



  login(userObj: any) {
    let params = {
      email: userObj.email,
      password: userObj.password
    }
    this.ajaxService.sendPostRequest("login", null, params).subscribe(data => {
      localStorage.setItem('userdata', JSON.stringify(data));
      this.getLoggedInName.emit(data);
      this.toastService.success('Login successfully', 'Success', 10000);
      this.router.navigate(['/dashboard']);
    }, error => {
      this.toastService.error('Login Failed! check your email or password', 'Error', 10000);
    });


    //  if(userObj.email =="gopi@gmail.com" && userObj.password =='123456'){
    //    userObj.firstname="Gopikannan";
    //    userObj.lastname="S";
    //    userObj.city="Trichy";
    //    userObj.state="TamilNadu";
    //    userObj.role='admin';
    //    localStorage.setItem('userdata', JSON.stringify(userObj));
    //    this.getLoggedInName.emit(userObj);

    //  this.toastService.success('Login successfully','Success',10000);
    //  this.router.navigate(['/dashboard']);
    // }

    //  else if(userObj.email =="ebe@gmail.com" && userObj.password =='ebe123'){
    //   userObj.firstname="C";
    //   userObj.lastname="Ebe";
    //   userObj.city="Bangalore";
    //   userObj.state="karnataka";
    //   userObj.role='user';
    //   localStorage.setItem('userdata', JSON.stringify(userObj));
    //   this.getLoggedInName.emit(userObj);

    // this.toastService.success('Login successfully','Success',10000);
    // this.router.navigate(['/dashboard']);
    //  }

    //  else{
    //   this.toastService.error('Login Failed','Error',10000);
    //   }

  }


  changePassword(userObj: any){
    let params = {
      email: userObj.email,
      oldpassword: userObj.oldpassword,
      password: userObj.password
    }
    this.ajaxService.updatePassword("changepassword", null, params).subscribe(data => {
      localStorage.setItem('userdata', JSON.stringify(data));
      localStorage.removeItem('userdata');
      this.router.navigate(['/login']);
      this.getLoggedInName.emit(data);
      this.toastService.success('Login Again', 'Success! Password Changed successfully', 10000);
      //this.router.navigate(['/dashboard']);
    }, error => {
      this.toastService.error('Failed To Change', 'Error', 10000);
    });

  }

  logout() {
    localStorage.removeItem('userdata');
    this.router.navigate(['/login']);
  }





  //getmyData(){
  // return this.a;
  // }
  //setData(n:number){
  // this.a =n;
  //}
}
