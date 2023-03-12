import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl:string = "https://localhost:7158/api/User/";
  constructor(private http : HttpClient) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
  }

  updateInformation(userObj:any){
    return this.http.post<any>(`${this.baseUrl}updateAccount`, userObj);
  }

  currentUser(userObj:any){
    return this.http.post<any>(`${this.baseUrl}currentUser`, userObj);
  }
}
