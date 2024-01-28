import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // bookid: number =10;
  // bookname: String = "english";
  // bookauthor: String = "gopikannan";
  // bookstatus: String = "Available";

  // btntoggle: boolean=true;

  constructor() { }

  ngOnInit(): void {
    //   setTimeout(() =>{
    //   this.btntoggle =false;
    //   }, 3000);

  }

  // onbutton(){              
  //   if(this.bookstatus=="Available"){
  //     this.bookstatus="Not available";

  //   }
  //   else{this.bookstatus="Coming Soon"}


  // }

}
