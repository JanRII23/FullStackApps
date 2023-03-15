import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SandBoxComponent } from './components/sand-box/sand-box.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent/*, canActivate:[AuthGuard]*/},
  {path: 'adminDash', component: AdminDashComponent/*, canActivate:[AuthGuard]*/},
  {path: 'sandBox', component: SandBoxComponent/*, canActivate:[AuthGuard]*/},

  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
