import { Component, OnInit } from '@angular/core';
import { AjaxService } from './../../../services/ajax-service/ajax.service';
import { ToastService } from './../../../services/toastr/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: any;
  currentindex: any = {};

  addbook: any = {};

  constructor(private ajaxService: AjaxService, private toastService: ToastService, private router: Router) { }

  ngOnInit(): void {
    this.ajaxService.getBookList("api/book/all").subscribe(data => {
      this.bookList = data;
    }, error => {
      console.log("something went wrong");
    });

  }

  deleteBookList(book: any) {
    this.currentindex = book;
    console.log(book);
    console.log(this.currentindex.bookId);
    localStorage.setItem('element', JSON.stringify(this.currentindex));
    let element = JSON.parse(localStorage.getItem("element") || '{}');
    book.bookId = element.bookId;
    this.ajaxService.deleteBookList('api/book/delete/' + element.bookId).subscribe(data => {
      console.log('deleted')
      this.toastService.success('Book Deleted Successfully', 'Success', 3000);
      this.ajaxService.getBookList("api/book/all").subscribe(data => {
        this.bookList = data;
      }, error => {
        console.log("something went wrong");
      });

    }, error => {
      console.log("something went wrong");
      this.toastService.error('Failed to Delete', 'Error', 3000);
    });

  }

  updateReviewList(rev: any){
    this.currentindex = rev;
    console.log(rev);
    console.log(this.currentindex.reviewId);
    localStorage.setItem('element', JSON.stringify(this.currentindex));
    let element = JSON.parse(localStorage.getItem("element") || '{}');
    rev.reviewId = element.reviewId;
    this.ajaxService.getReviewListByid('api/review/' + element.reviewId).subscribe(data => {
      console.log('get the value')
      this.addbook = data;
      this.router.navigate(['/updatereview']);
    }, error => {
      console.log("something went wrong");
    });

  }

  deleteReview(rev: any){
    this.currentindex = rev;
    console.log(rev);
    console.log(this.currentindex.reviewId);
    localStorage.setItem('element', JSON.stringify(this.currentindex));
    let element = JSON.parse(localStorage.getItem("element") || '{}');
    rev.reviewId = element.reviewId;
    this.ajaxService.deleteReview('api/review/delete/' + element.reviewId).subscribe(data => {
      console.log('deleted')
      this.toastService.success('Book Deleted Successfully', 'Success', 3000);
      this.ajaxService.getBookList("api/book/all").subscribe(data => {
        this.bookList = data;
      }, error => {
        console.log("something went wrong");
      });

    }, error => {
      console.log("something went wrong");
      this.toastService.error('Failed to Delete', 'Error', 3000);
    });

  }


  updateBookList(book: any) {
    this.currentindex = book;
    console.log(book);
    console.log(this.currentindex.bookId);
    localStorage.setItem('element', JSON.stringify(this.currentindex));
    let element = JSON.parse(localStorage.getItem("element") || '{}');
    book.bookId = element.bookId;
    this.ajaxService.getBookListByid('api/book/' + element.bookId).subscribe(data => {
      console.log('get the value')
      this.addbook = data;
      this.router.navigate(['/updatebook']);
    }, error => {
      console.log("something went wrong");
    });

  }


  reviewBook(book: any){
    this.currentindex = book;
    console.log(book);
    console.log(this.currentindex.bookId);
    localStorage.setItem('element', JSON.stringify(this.currentindex));
    let element = JSON.parse(localStorage.getItem("element") || '{}');
    book.bookId = element.bookId;
    this.ajaxService.getBookListByid('api/book/' + element.bookId).subscribe(data => {
      console.log(data)
      this.addbook = data;
      this.router.navigate(['/addreview']);
    }, error => {
      console.log("something went wrong");
    });

  }

  goDetailMe(book: any) {
    this.currentindex = book;
    console.log(book);
    console.log(this.currentindex.bookId);
    localStorage.setItem('element', JSON.stringify(this.currentindex));
    let element = JSON.parse(localStorage.getItem("element") || '{}');
    book.bookId = element.bookId;
    this.ajaxService.getBookListByid('api/book/' + element.bookId).subscribe(data => {
      console.log('get the value')
      this.addbook = data;
      this.router.navigate(['/bookdetails']);
    }, error => {
      console.log("something went wrong");

    });
  }

}