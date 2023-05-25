import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApisService } from 'src/app/services/sharedApi/apis.service';
import { UserModel } from './admin-dash.model'
import { OrderModel } from './admin-dash.model';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss']
})
export class AdminDashComponent implements OnInit{

  //this just technically needs to retrieve from database

  userData !: any;
  orderData !: any;
  userObj : UserModel = new UserModel();
  orderObj: OrderModel = new OrderModel();

  constructor(private api: ApisService, private auth:AuthenticationService, private router: Router, private  toast: NgToastService){

  }

  ngOnInit(): void {
    this.getUserInformation();
    this.getOrderInformation();
  }

  // userAccountsData = [
  //   {userId: 1, first: "John", last: "Doe", address: "123 Wallstreet", city: "Houston", state: "Texas (TX)", zipcode: "123456"}
  // ];

  // orderHistoryData = [
  //   { userId: 1, orderNum: 54321, gallonsReq: 6.0, deliAddress: "123 Wallstreet, Houston, Texas (TX)", deliDate: "02/20/2023", priceGal: "$40.00", totalPrice: "$120" },
  //   { userId: 2, orderNum: 24680, gallonsReq: 4.0, deliAddress: "987 Apple St, Dallas, Texas (TX)", deliDate: "02/21/2023", priceGal: "$40.00", totalPrice: "$80.00" }
  // ];

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

  logout(){
    this.auth.logoutUser();
    this.router.navigate(['login']);
    this.toast.info({detail:"SUCCESS",summary:'Logged Out', duration: 5000});
  }

  getUserInformation(){
    this.api.GetUsers()
    .subscribe(res=>{
      this.userData = res.userDetails;
    })
  }

  getOrderInformation(){
    this.api.GetOrders()
    .subscribe(res=>{
      this.orderData = res.orderDetails;
    })
  }



}
