import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider,
    LinkedinLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-secure-header-sidebar-large',
  templateUrl: './header-sidebar-large.component.html',
  styleUrls: ['./header-sidebar-large.component.scss']
})
export class SecureHeaderSidebarLargeComponent implements OnInit {

    notifications: any[];

    constructor(
      private modalService: NgbModal,
      private navService: NavigationService,
      private socialAuthService: AuthService,
              private toastr: ToastrService
    ) {
      
    }
  
    ngOnInit() {
    }
  
    
  
    
    open(content) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        console.log(result);
      }, (reason) => {
        console.log('Err!', reason);
      });
    }


    public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }
    
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(socialPlatform+" sign in data : " , userData);
          // Now sign-in with userData
          // ...
             this.toastr.success('success!', 'Login Successfully! ', { timeOut: 5000 });
        }
      );
    }



}
