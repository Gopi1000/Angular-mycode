import { Component, OnInit } from '@angular/core';
import { MathsService } from '../services/services/maths.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  bookid: number =10;
  bookname: String = "english";
  bookauthor: String = "gopikannan";
  bookstatus: String = "Available";

  btntoggle: boolean=true;

  disabledinput: boolean=false

  title ='welcome to angular program gopikannan'


  firstname : String ="gopikannan";

  address: String="chennai";

  angularlogo ="https://angular.io/assets/images/logos/angular/logo-nav@2x.png";

  constructor(public _maths: MathsService) { } 

  

  ngOnInit(): void {
    setTimeout(() =>{
      this.btntoggle =false;
      }, 3000);

  }

  onbutton(){              
    if(this.bookstatus=="Available"){
      this.bookstatus="Not available";

    }
    else{this.bookstatus="Coming Soon"}

    
  }

  clickbutton(){
    if(this.firstname=="gopikannan"){
      this.firstname="welcome gopi";
    }
  }

   details =[
    {id:1,  name:'gopi', location:'trichy'},
    {id:2,  name:'rajkumar',   location:'chennai'},
    {id:3,  name:'gokul',      location:'trichy'},
    {id:4,  name:'ram',      location:'bangalore'},
    {id:5,  name:'gokulnath',      location:'trichy'},
    {id:6,  name:'raja',      location:'trichy'},
  ]
  
  
    
  

  MyWeb  : any[] =[
    {
      'type':'frontend',
      'courses':[
        {'name':'angular'},
        {'name':'reactjs'},
        {'name':'iconic framework'}
      ]
    },
    {
      'type':'backend',
      'courses':[
        {'name':'java'},
        {'name':'python'},
        {'name':'springboot'}
      ]
    }
  ]


  isLoggedIn:boolean= false;
  isNewUser =false;
  login(){
    this.isLoggedIn=true;
  }
  logout1(){
    this.isLoggedIn=false;
  }

  Increase(){
    this._maths.addOne();
  }

}
