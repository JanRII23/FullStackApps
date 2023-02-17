import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  type: string = "password";
  isText: boolean = false;
  lockIcon: string = "lock";
  signupForm! : FormGroup;

  constructor(private fb: FormBuilder){
  
  }

  ngOnInit(): void{
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password:['', Validators.required],
      verifyPassword: ['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.lockIcon = "visibility_off": this.lockIcon = "visibility";
    this.isText ? this.type = "password" : this.type = "text";
  }



}
