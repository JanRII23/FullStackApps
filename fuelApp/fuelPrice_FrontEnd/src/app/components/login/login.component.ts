import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';


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


  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router, private  toast: NgToastService,  private localSt: LocalStorageService) {
    this.localSt.clear('userInfo');
    this.localSt.clear('orderInfo');
    
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
            // alert(res.message);
            this.toast.info({detail:"SUCCESS", summary:res.message, duration:5000});

            LoginComponent.userDataLogin = res.user; //this receives the json object
  
            this.loginForm.reset();

            if (LoginComponent.userDataLogin.accessLevel === 10){
              this.router.navigate(['adminDash']);

            }else{
              this.router.navigate(['dashboard']);
            }
            
          },
          error:(err)=>{
            // alert(err?.error.message);
            this.toast.error({detail:"ERROR", summary:err?.error.message, duration:5000});
          }

        })
    }
    else {
    

    }
  }


}

// export const test: number = 42;
