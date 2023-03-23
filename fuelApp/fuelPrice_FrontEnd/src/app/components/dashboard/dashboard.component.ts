import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoginComponent } from '../login/login.component';
import { UserModel } from './user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userObj: UserModel = new UserModel();

  orderHistoryData = [
    { userId: 1, orderNum: 54321, gallonsReq: 6.0, deliAddress: "123 Wallstreet, Houston, Texas (TX)", deliDate: "02/20/2023", priceGal: "$40.00", totalPrice: "$120" },
    { userId: 2, orderNum: 24680, gallonsReq: 4.0, deliAddress: "987 Apple St, Dallas, Texas (TX)", deliDate: "02/21/2023", priceGal: "$40.00", totalPrice: "$80.00" }
  ];

  searchOrder = '';

  userOrderTable: boolean = true;
  userOrderSearch: boolean = true;

  userAccount: boolean = true;
  userRequest: boolean = true;

  dashboardForm!: FormGroup

  name: string = "Unknown";
  profileCheck: string = "Update";

  states = {
    "Alabama": "AL",
    "Alaska": "AK",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "Florida": "FL",
    "Georgia": "GA",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "pA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virginia": "VA",
    "Washington": "WA",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY"
  };



  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) {

  }

  //What I can do is on initialization check to see if 
  //the user with specific Id updated account if so
  //then assign the form values like test string above
  //otherwise just simply set to empty string

  ngOnInit(): void {
    this.populateProfile();

  }

  hideTable(x: number) {

    if (x == 2) {
      this.userOrderTable = !this.userOrderTable;
      this.userOrderSearch = !this.userOrderSearch;
    } else if (x == 1) {
      this.userRequest = !this.userRequest;
    }
    else {
      this.userAccount = !this.userAccount;
    }

  }

  logout() {
    this.auth.logoutUser();
    this.router.navigate(['login']);
  }

  populateProfile() {
    if (LoginComponent.userDataLogin.firstName == "" || LoginComponent.userDataLogin.lastName == "" || LoginComponent.userDataLogin.addressOne == "" || LoginComponent.userDataLogin.city == "" || LoginComponent.userDataLogin.state == "" || LoginComponent.userDataLogin.zipcode == 0) {
      alert("Fill Out Account Information");
      this.dashboardForm = this.fb.group({
        firstName: [LoginComponent.userDataLogin.firstName ? LoginComponent.userDataLogin.firstName : '', Validators.required],
        lastName: [LoginComponent.userDataLogin.lastName ? LoginComponent.userDataLogin.lastName : '', Validators.required],
        addressOne: [LoginComponent.userDataLogin.addressOne ? LoginComponent.userDataLogin.addressOne : '', Validators.required],
        addressTwo: [LoginComponent.userDataLogin.addressTwo ? LoginComponent.userDataLogin.addressTwo : ''],
        city: [LoginComponent.userDataLogin.city ? LoginComponent.userDataLogin.city : '', Validators.required],
        state: [LoginComponent.userDataLogin.state ? LoginComponent.userDataLogin.state : '', Validators.required],
        zip: [LoginComponent.userDataLogin.zipcode ? LoginComponent.userDataLogin.zipcode : '', Validators.required],

        gallons: ['', Validators.required],
        deliveryDate: ['', Validators.required]
      })
    }
    else {
      alert("works");
      this.dashboardForm = this.fb.group({
        firstName: [LoginComponent.userDataLogin.firstName, Validators.required],
        lastName: [LoginComponent.userDataLogin.lastName, Validators.required],
        addressOne: [LoginComponent.userDataLogin.addressOne, Validators.required],
        addressTwo: [LoginComponent.userDataLogin.addressTwo],
        city: [LoginComponent.userDataLogin.city, Validators.required],
        state: [LoginComponent.userDataLogin.state, Validators.required],
        zip: [LoginComponent.userDataLogin.zipcode, Validators.required],

        gallons: ['', Validators.required],
        deliveryDate: ['', Validators.required]
      })
      this.name = LoginComponent.userDataLogin.firstName;
    }

  }




  refreshProfileUpdate() {

    this.userObj.clientID = LoginComponent.userDataLogin.clientID;
    this.userObj.userName = LoginComponent.userDataLogin.userName;
    this.userObj.password = LoginComponent.userDataLogin.password;
    this.userObj.passwordVerification = LoginComponent.userDataLogin.passwordVerification;
    this.userObj.firstName = this.dashboardForm.controls['firstName'].value
    this.userObj.lastName = this.dashboardForm.controls['lastName'].value
    this.userObj.addressOne = this.dashboardForm.controls['addressOne'].value
    this.userObj.addressTwo = this.dashboardForm.controls['addressTwo'].value
    this.userObj.city = this.dashboardForm.controls['city'].value
    this.userObj.state = this.dashboardForm.controls['state'].value
    this.userObj.zipcode = this.dashboardForm.controls['zip'].value


    //unlike the form this is passing in the model
    this.auth.updateInformation(this.userObj)
      .subscribe(res => {
        alert("Updated Successfully");
      })



  }

  submitRequest() {

    //once user inputs gallons and delivery date then submit request then it would automatically populate it with delivery address, suggested price, and total amount due --> then there would be a popup that comes up that says confirm or cancel to be added to order history

    //resets the form and then adds to the quote history

  }
}


