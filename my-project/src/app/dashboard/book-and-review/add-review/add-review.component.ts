import { Component, OnInit,} from '@angular/core';
import { AjaxService } from './../../../services/ajax-service/ajax.service';
import { ToastService } from './../../../services/toastr/toast.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  addreview: any={};

  userObj: any={};

  //bookList: any;

  constructor(private ajaxService: AjaxService, private toastService: ToastService, private router: Router,) { 
    this.userObj = null;
  }

  ngOnInit(): void {
    let str = localStorage.getItem('element');
     if (str) {
      this.userObj = JSON.parse(str);
     }
  }


 onSubmit(myForm: NgForm){
  console.log(myForm);
  this.reviewSave();
 }

 reviewSave(){
    this.ajaxService.addReviewList("api/review/add",this.userObj).subscribe(data => {
     this.userObj= data;
     this.userObj.bookId
     console.log(data)
    this.toastService.success('Review Added Successfully', 'Success', 3000);
   this.router.navigate(['/booklist']);
    }, error => {
     console.log("something went wrong");
     this.toastService.error('Failed to Add', 'Error', 3000);
    });
   
 }

 



}
