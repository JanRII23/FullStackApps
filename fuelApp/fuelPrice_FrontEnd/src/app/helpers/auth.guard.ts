import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : AuthenticationService, private router: Router){
    
  }

  canActivate(): boolean {
    if(this.auth.isLoggedIn()){
      return true
    }else{
      alert("Need to login!!!");
      this.router.navigate(['login'])
      return false;
    }
  }
  
}
