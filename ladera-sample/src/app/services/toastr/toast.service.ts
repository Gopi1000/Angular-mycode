import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  timeout: number;
  position: string;

  constructor(private toastr: ToastrService) {
    this.timeout = 5000;
    this.position = 'toast-top-right';
  }

  success(message: string, title?: string, timeout?: number, position?: string) {
    if (timeout) {
      timeout = this.timeout;
    }
    if (!position) {
      position = this.position;
    }
    this.toastr.success(message, title, {
      timeOut: timeout,
      positionClass: this.position
    });

  }


  error(message: string, title?: string, timeout?: number, position?: string) {
    if (timeout) {
      timeout = this.timeout;
    }
    if (!position) {
      position = this.position;
    }
    this.toastr.error(message, title, {
      timeOut: timeout,
      positionClass: this.position
    });

  }
}
