import { Component, Input, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/sharedApi/apis.service';
import { UserModel } from './admin-dash.model'

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss']
})
export class AdminDashComponent implements OnInit{

  //this just technically needs to retrieve from database

  userData !: any;
  userObj : UserModel = new UserModel();

  constructor(private api: ApisService){

  }

  ngOnInit(): void {
    this.getUserInformation();
  }

  // userAccountsData = [
  //   {userId: 1, first: "John", last: "Doe", address: "123 Wallstreet", city: "Houston", state: "Texas (TX)", zipcode: "123456"}
  // ];

  orderHistoryData = [
    {userId: 1, orderNum: 54321, gallonsReq: 6.0, deliAddress: "123 Wallstreet, Houston, Texas (TX)", deliDate: "02/20/2023", priceGal: "$40.00"},
    {userId: 2, orderNum: 24680, gallonsReq: 4.0, deliAddress: "987 Apple St, Dallas, Texas (TX)", deliDate: "02/21/2023", priceGal: "$40.00"},
   
  ];

  searchUser ='';
  searchOrder = '';

  orderTable:boolean = true;
  orderSearch:boolean = true;

  userTable:boolean = true;
  userSearch:boolean = true;

  hideTable(x: number){
  
    if (x == 1){
      this.orderSearch = !this.orderSearch;
      this.orderTable = !this.orderTable;
    }else{
      this.userTable = !this.userTable;
      this.userSearch = !this.userSearch;
    }
   
  }

  getUserInformation(){
    this.api.GetUsers()
    .subscribe(res=>{
      this.userData = res.userDetails;
    })
  }



}
