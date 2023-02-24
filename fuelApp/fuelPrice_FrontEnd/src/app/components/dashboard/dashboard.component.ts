import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  searchOrder = '';

  userOrderTable:boolean = true;
  userOrderSearch:boolean = true;

  userAccount:boolean = true;
  userRequest:boolean = true;

  dashboardForm! : FormGroup 

  orderHistoryData = [
    {userId: 1, orderNum: 54321, gallonsReq: 6.0, deliAddress: "123 Wallstreet, Houston, Texas (TX)", deliDate: "02/20/2023", priceGal: "$40.00"},
    {userId: 2, orderNum: 24680, gallonsReq: 4.0, deliAddress: "987 Apple St, Dallas, Texas (TX)", deliDate: "02/21/2023", priceGal: "$40.00"}
  ];

  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void{
    this.dashboardForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      addressOne: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      gallons: ['', Validators.required],
      deliverDayte: ['', Validators.required]
    })
  
  }

  hideTable(x: number){
  
    if (x == 2){
      this.userOrderTable = !this.userOrderTable;
      this.userOrderSearch = !this.userOrderSearch;
    } else if (x == 1){
      this.userRequest = !this.userRequest;
    }
    else{
      this.userAccount = !this.userAccount;
    }
   
  }
}


