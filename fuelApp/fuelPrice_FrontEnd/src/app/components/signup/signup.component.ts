import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { verifyPassword } from 'src/app/helpers/passwordMatch';
import { AuthenticationService } from 'src/app/services/authentication.service';

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

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router, private  toast: NgToastService){
  
  }

  ngOnInit(): void{
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password:['', [Validators.required]],
      passwordVerification: ['', [Validators.required, verifyPassword('password')]]
    })
  }


  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.lockIcon = "visibility_off": this.lockIcon = "visibility";
    this.isText ? this.type = "password" : this.type = "text";
  }

  onSignup(){
    if (this.signupForm.valid){
      this.auth.signUp(this.signupForm.value)
        .subscribe({
          next:(res)=>{
            // alert(res.message);
            this.toast.info({detail:"SUCCESS", summary:res.message, duration:5000});
            this.signupForm.reset();
            this.router.navigate(['login']);
          },
          error:(err)=>{
            //alert(err?.error.message);
            this.toast.error({detail:"ERROR", summary:err?.error.message, duration:5000});
          }

        })
    }
    else {

    }
  }

}
