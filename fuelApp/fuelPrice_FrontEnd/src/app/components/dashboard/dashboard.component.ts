import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoginComponent } from '../login/login.component';
import { UserModel } from './user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userObj : UserModel = new UserModel();

  orderHistoryData = [
    { userId: 1, orderNum: 54321, gallonsReq: 6.0, deliAddress: "123 Wallstreet, Houston, Texas (TX)", deliDate: "02/20/2023", priceGal: "$40.00" },
    { userId: 2, orderNum: 24680, gallonsReq: 4.0, deliAddress: "987 Apple St, Dallas, Texas (TX)", deliDate: "02/21/2023", priceGal: "$40.00" }
  ];

  searchOrder = '';

  userOrderTable: boolean = true;
  userOrderSearch: boolean = true;

  userAccount: boolean = true;
  userRequest: boolean = true;

  dashboardForm!: FormGroup

  public name: string = "Name";

  states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];


  constructor(private fb: FormBuilder, private auth:AuthenticationService) {

  }
  
  //What I can do is on initialization check to see if 
  //the user with specific Id updated account if so
  //then assign the form values like test string above
  //otherwise just simply set to empty string

  ngOnInit(): void {
    this.dashboardForm = this.fb.group({
      firstName: [this.userObj.firstName, Validators.required],
      lastName: [this.userObj.lastName, Validators.required],
      addressOne: [this.userObj.addressOne, Validators.required],
      addressTwo:[this.userObj.addressTwo],
      city: [this.userObj.city, Validators.required],
      state: [this.userObj.state, Validators.required],
      zip: [this.userObj.zipcode, Validators.required],

      gallons: ['', Validators.required],
      deliveryDate: ['', Validators.required]
    })

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

  setProfile(){
    if(LoginComponent.userDataLogin.firstName == null){
      alert("Fill Out Account Information");
    }else{
      alert(LoginComponent.userDataLogin.firstName);
    }
    
  }


  updateProfile(){

    //update null values in the database
    //then once updated it should automatically populate on second login
    //can also erase and make changes too

    //clientId
    //userName
    //passwordVerify
    //passwordVerify
    //accessLevel all needs to be populated as soon as login
    
    // this.userObj.firstName = this.dashboardForm.value.firstName;
    // this.userObj.lastName = this.dashboardForm.value.lastName;
    // this.userObj.addressOne = this.dashboardForm.value.addressOne;
    // this.userObj.addressTwo = this.dashboardForm.value.addressTwo;
    // this.userObj.city = this.dashboardForm.value.city;
    // this.userObj.state = this.dashboardForm.value.state;
    // this.userObj.zipcode = this.dashboardForm.value.zipcode;


    // this.auth.updateInformation(this.userObj)
    // .subscribe(res=>{
    //   alert("Updated Successfully")
    //   // let ref = document.getElementById('close');
    //   // ref?.click();
    //   // this.getEmployeeDetails();

    // })

 }

  submitRequest(){
    //resets the form and then adds to the quote history
    
  }
}


