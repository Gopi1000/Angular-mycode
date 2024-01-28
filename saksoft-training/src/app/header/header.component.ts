import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userObj: any;

  languages:any;
  selectedLanguage:any;
  constructor(private router: Router,private loginservice: LoginService, private translate:TranslateService) { 

    this.loginservice.getLoggedInName.subscribe(obj => {
      if (obj.email) {
        this.userObj = obj;
      }
      else (
        this.userObj = null
      )

    });

  this.languages = [
      {short:'en', language:'English', flag:'./../../assets/image/flags/uk.png'},
      {short:'jp', language:'日本語', flag:'./../../assets/image/flags/jp.png'},
      {short:'fr', language:'Française', flag:'./../../assets/image/flags/fr.png'},
      {short:'ta', language:'Tamil', flag:'./../../assets/image/flags/in.png'},
      {short:'hn', language:'hindi', flag:'./../../assets/image/flags/in.png'}
  ];
  this.selectedLanguage=this.languages[0];
  }

  ngOnInit(): void {
    let str = localStorage.getItem('userdata');
    if(str) {
      this.userObj =JSON.parse(str);
      console.log(this.userObj)
    }
  }

  switchLanguage(obj:any){
    this.selectedLanguage =obj;
    this.translate.use(obj.short);

  }

  logout(){
    this.userObj = null;
    this.loginservice.logout();
    
  }

  goLoginMe() {
    this.router.navigate(['/login'])

  }

  goRegisterMe() {
    this.router.navigate(['/register'])

  }

}
