import { Component, OnInit } from '@angular/core';
import { AjaxService } from './../../../services/ajax-service/ajax.service';
import { ToastService } from './../../../services/toastr/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.css']
})
export class UpdateReviewComponent implements OnInit {

  userObj: any;
  constructor(private ajaxService: AjaxService, private toastService: ToastService, private router: Router) { }

  ngOnInit(): void {
    let str = localStorage.getItem('element');
    if (str) {
      this.userObj = JSON.parse(str);
    }
  }

  onSubmit() {

    this.update();
  }

  update(){
    this.ajaxService.updateReviewList("api/review/update/"+this.userObj.reviewId, this.userObj).subscribe(data => {
      this.userObj = data;
      this.toastService.success('Review Updated Successfully', 'Success', 3000);
      this.router.navigate(['/booklist']);
    }, error => {
      console.log("something went wrong");
      this.toastService.error('Failed to Update', 'Error', 3000);
    });
    
  }

}
