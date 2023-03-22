import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl:string = "https://localhost:7158/api/User/";
  private loggedIn:boolean;

  constructor(private http : HttpClient) {
    this.loggedIn = false;
   }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  login(loginObj:any){
    this.loggedIn = true;
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
  }

  updateInformation(userObj:any){
    return this.http.put<any>(`${this.baseUrl}updateAccount`, userObj);
  }

  // currentUser(userObj:any){
  //   return this.http.post<any>(`${this.baseUrl}currentUser`, userObj);
  // }

  isLoggedIn(): boolean{
    return this.loggedIn; //return true
  }

  logoutUser(): void{
    this.loggedIn = false;
  }
}
