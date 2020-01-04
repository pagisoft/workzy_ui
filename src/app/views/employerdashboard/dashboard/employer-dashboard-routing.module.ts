import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerhomeComponent } from '../employerhome/employerhome.component';

const routes: Routes = [
  {
    path: 'home',
    component: EmployerhomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerDashboardRoutingModule { }