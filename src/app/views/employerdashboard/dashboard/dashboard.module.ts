import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerhomeComponent } from '../employerhome/employerhome.component';
import {  EmployerDashboardRoutingModule } from './employer-dashboard-routing.module';

import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [EmployerhomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    EmployerDashboardRoutingModule
  ]
})
export class DashboardModule { }
