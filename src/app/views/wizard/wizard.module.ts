import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SinginComponent } from './auth/signin/singin.component';
import { TechnologyComponent } from './postjob/technology/technology.component';
import { WizardRoutingModule } from './wizard-routing.module'
 @NgModule({
  declarations: [SinginComponent, TechnologyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule,
    NgbModule,
    SharedModule,
    WizardRoutingModule
  ]
})
export class WizardModule { }
