import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  private baseUrl:string = "https://localhost:7158/api/Admin/";

  constructor(private http : HttpClient) { }

  GetUsers(){
    return this.http.get<any>(`${this.baseUrl}getAllUsers`)
  }
}
