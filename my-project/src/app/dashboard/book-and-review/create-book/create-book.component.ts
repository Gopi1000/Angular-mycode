import { Component, OnInit } from '@angular/core';
import { AjaxService } from './../../../services/ajax-service/ajax.service';
import { ToastService } from './../../../services/toastr/toast.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  addbook: any = {};


  constructor(private ajaxService: AjaxService, private toastService: ToastService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.ajaxService.addBookList("api/book/add", this.addbook).subscribe(data => {
      this.addbook = data;
      this.toastService.success('Book Created Successfully', 'Success', 3000);
      this.router.navigate(['/booklist']);
    }, error => {
      console.log("something went wrong");
      this.toastService.error('Failed to Create', 'Error', 3000);
    });
  }


  onSubmit(myForm: NgForm) {

    this.save();
  }

}
