import { Injectable } from '@angular/core';
import { ToastService } from './toastr/toast.service';
import { Router } from '@angular/router';
import { AjaxServiceService } from './ajax-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private toastService: ToastService, private router: Router, private ajaxService: AjaxServiceService,) { }

  register(addcustomer: any,) {
    this.ajaxService.registerList("register", addcustomer).subscribe(data => {
      addcustomer = data;
      localStorage.setItem('userdata', JSON.stringify(data));
      this.toastService.success('Register Successfully', 'Success', 10000);
      this.router.navigate(['/table']);
    }, error => {
      console.log("something went wrong");
      this.toastService.error('Failed to Register', 'Error', 10000);
    });
  }
}
