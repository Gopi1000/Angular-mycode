import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/sevice/login.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userObj: any;

  languages:any;
  selectedLanguage:any;

  constructor(private router: Router, private loginService: LoginService) {

    this.loginService.getLoggedInName.subscribe(obj => {
      if (obj.email) {
        this.userObj = obj;
      }
      else (
        this.userObj = null
      )

    });

    this.languages = [
        {short:'en', language:'English', flag:'./../../assets/images/flags/uk.png'},
        {short:'jp', language:'日本語', flag:'./../../assets/images/flags/jp.png'},
        {short:'fr', language:'française', flag:'./../../assets/images/flags/fr.png'}
    ];
    this.selectedLanguage=this.languages[0];
  }

  ngOnInit(): void {

    let str = localStorage.getItem('userdata');
    if (str) {
      this.userObj = JSON.parse(str);


    }
  }
  switchLanguage(obj:any){
    this.selectedLanguage =obj;
    // this.translate.use(obj.short);

  }

  goLoginMe() {
    this.router.navigate(['/login'])

  }

  goRegisterMe() {
    this.router.navigate(['/register'])

  }

  logout() {
    this.userObj = null;
    this.loginService.logout();

  }

}
