import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  userObj: any;
  constructor(private router: Router) {
    
    this.userObj = null;
  }

  ngOnInit(): void {
    let str = localStorage.getItem('element');
    if (str) {
      this.userObj = JSON.parse(str);
    }
  }

  goBackBooklist(){
    this.router.navigate(['/booklist'])
  }

}
