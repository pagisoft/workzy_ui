import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ChangeComponent } from './change/change.component';

const routes: Routes = [
  {
    path: 'sign-up',
    component: SignupComponent
  },
  {
    path: 'sign-in',
    component: SigninComponent
  },
  {
    path: 'reset-password',
    component: ForgotComponent
  },
  {
    path: 'change-password/:link',
    component: ChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
