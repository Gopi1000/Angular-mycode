import { Injectable, Output, EventEmitter } from '@angular/core';
import { ToastService } from '../toastr/toast.service';
import { Router } from '@angular/router';
import { AjaxService } from './../../services/ajax-service/ajax.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  currentindex: any = {};

  constructor(private toastService: ToastService, private router: Router, private ajaxService: AjaxService,) {

  }

  login(userObj: any) {
    let params = {
      email: userObj.email,
      password: userObj.password
    }
    this.ajaxService.loginRequest("login", null, params).subscribe(data => {
      localStorage.setItem('userdata', JSON.stringify(data));
      this.getLoggedInName.emit(data);
      this.toastService.success('Login successfully', 'Success', 10000);
      this.router.navigate(['/dashboard']);
    }, error => {
      this.toastService.error('Login Failed! check your email or password', 'Error', 10000);
    });
  }

  register(adduser: any) {
    this.ajaxService.registerList("add", adduser).subscribe(data => {
      adduser = data;
      localStorage.setItem('userdata', JSON.stringify(data));
      this.getLoggedInName.emit(data);
      this.toastService.success('Register Successfully', 'Success', 10000);
      this.router.navigate(['/dashboard']);
    }, error => {
      console.log("something went wrong");
      this.toastService.error('Failed to Register', 'Error', 10000);
    });
  }

  changePassword(userObj: any) {
    let params = {
      email: userObj.email,
      oldpassword: userObj.oldpassword,
      password: userObj.password
    }
    this.ajaxService.updatePassword("changepassword", null, params).subscribe(data => {
      localStorage.setItem('userdata', JSON.stringify(data));
      this.router.navigate(['/dashboard']);
      this.getLoggedInName.emit(data);
      this.toastService.success('', 'Password Changed successfully', 10000);
    }, error => {
      this.toastService.error('Check Your Old Password', 'Error', 10000);
    });

  }

  update(adduser: any) {
    this.ajaxService.updateUserByid("update/" + adduser.id, adduser).subscribe(data => {
      adduser = data;
      localStorage.setItem('userdata', JSON.stringify(data));
      this.toastService.success('Profile Updated Successfully', 'Success', 3000);
      this.getLoggedInName.emit(data);
      this.router.navigate(['/dashboard/profile']);
    }, error => {
      console.log("something went wrong");
      this.toastService.error('Failed to Update', 'Error', 3000);
    });
  }


  Updateuser(adduser: any) {
    this.ajaxService.updateUserByid("update/" + adduser.id, adduser).subscribe(data => {
      adduser = data;
      this.router.navigate(['/dashboard/edit']);
    }, error => {
      console.log("something went wrong");
    });
  }

  // Updateuser(adduser: any){
  //   this.ajaxService.updateUserByid("update/"+adduser.id, adduser).subscribe(data => {
  //     adduser = data;
  //     localStorage.setItem('userdata', JSON.stringify(data));
  //     this.getLoggedInName.emit(data);
  //     this.toastService.success('User Updated Successfully', 'Success', 3000);
  //     this.router.navigate(['/dashboard/edit']);
  //   }, error => {
  //     console.log("something went wrong");
  //     this.toastService.error('Failed to Update', 'Error', 3000);
  //   });

  // }




  // login(userObj: any) {
  //   console.log(userObj)
  //   if(userObj.email =="gobikannan.s@saksoft.co.in" && userObj.password =='123456'){
  //        userObj.firstname="Gopikannan";
  //        userObj.lastname="S";
  //        userObj.mobilenumber="9442622499";
  //        userObj.city="Chennai";
  //        userObj.state="TamilNadu";
  //        userObj.role='Admin';
  //     //console.log('success')
  //     localStorage.setItem('userdata', JSON.stringify(userObj));
  //     this.getLoggedInName.emit(userObj);
  //     this.toasteservice.success('Login Success','Success',10000);
  //     this.router.navigate(['/dashboard']);
  //    }else if(userObj.email =="kishore.s@saksoft.co.in" && userObj.password =='123456'){
  //     userObj.firstname="Kishore";
  //     userObj.lastname="S";
  //     userObj.mobilenumber="9442622499";
  //     userObj.city="trichy";
  //     userObj.state="TamilNadu";
  //     userObj.role='User';
  //  localStorage.setItem('userdata', JSON.stringify(userObj));
  //  this.getLoggedInName.emit(userObj);
  //  this.toasteservice.success('Login Success','Success',10000);
  //  this.router.navigate(['/dashboard']);
  //    }
  //   else{
  //     this.toasteservice.error('Login Failed','Error',10000);
  //   }
  //   }

  logout() {
    localStorage.removeItem('userdata');
    this.router.navigate(['/login']);
  }
}