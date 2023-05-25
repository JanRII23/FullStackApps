import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : AuthenticationService, private router: Router,private  toast: NgToastService){
    
  }

  canActivate(): boolean {
    if(this.auth.isLoggedIn()){
      return true
    }else{
      //alert("Need to login!!!");
      this.toast.error({detail:"WARNING",summary:'LOG IN REQUIRED!!!!', duration: 5000});
      this.router.navigate(['login'])
      return false;
    }
  }
  
}
