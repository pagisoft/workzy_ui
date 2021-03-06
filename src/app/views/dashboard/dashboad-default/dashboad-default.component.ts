import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider,
    LinkedinLoginProvider
} from 'angular-6-social-login';

@Component({
	selector: 'app-dashboad-default',
	templateUrl: './dashboad-default.component.html',
	styleUrls: ['./dashboad-default.component.css']
})
export class DashboadDefaultComponent implements OnInit {
	

	
    constructor(
      private modalService: NgbModal,
      private socialAuthService: AuthService
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
             alert("Login successfully!") ;
        }
      );
    }
}
