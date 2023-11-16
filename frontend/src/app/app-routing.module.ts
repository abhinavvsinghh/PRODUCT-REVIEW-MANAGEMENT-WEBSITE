import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'user/signup', component: SignupComponent },
  { path: 'user/login', component: SigninComponent },
  { path: 'admin/login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
