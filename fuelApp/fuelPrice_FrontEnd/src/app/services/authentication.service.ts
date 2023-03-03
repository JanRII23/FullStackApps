import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
