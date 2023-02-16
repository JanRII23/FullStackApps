import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  type: string = "password";
  isText: boolean = false;
  lockIcon: string = "lock";
  loginForm! : FormGroup;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password:['', Validators.required],
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.lockIcon = "visibility_off": this.lockIcon = "visibility";
    this.isText ? this.type = "password" : this.type = "text";
  }

}
