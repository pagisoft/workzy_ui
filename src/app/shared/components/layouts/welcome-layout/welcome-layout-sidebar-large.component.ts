import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-welcome-layout-sidebar-large',
  templateUrl: './welcome-layout-sidebar-large.component.html',
  styleUrls: ['./welcome-layout-sidebar-large.component.scss']
})
export class WelcomeLayoutComponent implements OnInit {

    moduleLoading: boolean;
    @ViewChild(PerfectScrollbarDirective, { static: true }) perfectScrollbar: PerfectScrollbarDirective;
  
    constructor(
      public navService: NavigationService,
      private router: Router
    ) { }
  
    ngOnInit() {
      this.router.events.subscribe(event => {
        if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
          this.moduleLoading = true;
        }
        if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
          this.moduleLoading = false;
        }
      });
    }

}
