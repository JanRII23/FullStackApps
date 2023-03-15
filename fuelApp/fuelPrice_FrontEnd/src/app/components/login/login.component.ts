import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


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

  static userDataLogin: any;

  test: number = 33;


  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) {
    
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

  onLogin(){
    if (this.loginForm.valid) {

        this.auth.login(this.loginForm.value)
        .subscribe({
          next:(res)=>{
            alert(res.message);
            LoginComponent.userDataLogin = res.user; //this receives the json object
  
            this.loginForm.reset();

            if (LoginComponent.userDataLogin.accessLevel === 10){
              this.router.navigate(['adminDash']);

            }else{
              this.router.navigate(['dashboard']);
            }
            
          },
          error:(err)=>{
            alert(err?.error.message);
          }

        })
    }
    else {
    

    }
  }


}

// export const test: number = 42;
