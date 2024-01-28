import { Component, OnInit } from '@angular/core';
import { AjaxService } from './../../../services/ajax-service/ajax.service';
import { ToastService } from './../../../services/toastr/toast.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  addbook: any = {};

  userObj: any;
  constructor(private ajaxService: AjaxService, private toastService: ToastService, private router: Router) {
    this.userObj = null;
  }

  ngOnInit(): void {
    let str = localStorage.getItem('element');
    if (str) {
      this.userObj = JSON.parse(str);
    }
  }

  onSubmit() {

    this.update();
  }

  update() {
    this.ajaxService.updateBookList("api/book/update/"+this.userObj.bookId, this.userObj).subscribe(data => {
      this.userObj = data;
      this.toastService.success('Book Updated Successfully', 'Success', 3000);
      this.router.navigate(['/booklist']);
    }, error => {
      console.log("something went wrong");
      this.toastService.error('Failed to Update', 'Error', 3000);
    });
  }

}
