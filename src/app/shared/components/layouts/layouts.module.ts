import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutSidebarLargeComponent } from './admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import { WelcomeLayoutComponent } from './welcome-layout/welcome-layout-sidebar-large.component';
import { HeaderSidebarLargeComponent } from './welcome-layout/header-sidebar-large/header-sidebar-large.component';
import { SecureHeaderSidebarLargeComponent } from './admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


import { FooterComponent } from '../footer/footer.component';
import { CustomizerComponent } from '../customizer/customizer.component';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material';

const components = [
    HeaderSidebarLargeComponent,
    FooterComponent,
    CustomizerComponent,
    AdminLayoutSidebarLargeComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    WelcomeLayoutComponent,
    SecureHeaderSidebarLargeComponent
];

@NgModule({
    imports: [
        NgbModule,
        RouterModule,
        FormsModule,
        SharedPipesModule,
        SharedDirectivesModule,
        PerfectScrollbarModule,
        CommonModule,
        MatIconModule
    ],
  declarations: components,
  exports: components
})
export class LayoutsModule { }
