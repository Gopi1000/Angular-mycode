import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let str =localStorage.getItem("userdata");
      if(str){
        let obj = JSON.parse(str);
        if(obj.userType =='Admin'){
          return true
        }else{
          this.router.navigate(['/unauthorized']);
          return false;
        }
      }else{
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
