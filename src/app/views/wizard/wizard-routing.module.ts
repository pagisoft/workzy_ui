import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinginComponent } from './auth/signin/singin.component';

const routes: Routes = [
  
  {
    path: 'auth',
    component: SinginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
