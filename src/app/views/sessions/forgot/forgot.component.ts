import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, ActivatedRoute,RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStoreService } from '../../../shared/services/local-store.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  animations: [SharedAnimations]
})
export class ForgotComponent implements OnInit {

    loading: boolean;
    loadingText: string;
    email: string;
    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private toastr: ToastrService,
        private router : Router,
              private route :ActivatedRoute    ) { 

      
        

    }

    ngOnInit() {
       
    }

    forgotPassword() {
       var data={
          "email":this.email
         
       }

         this.auth.forgotPassword(data)
              .subscribe(res =>{
      
                   this.toastr.success('success!', 'Reset Password Link Send Successfully! ', { timeOut: 5000 });
                   this.ngOnInit();

                   this.router.navigate(['/panel/sign-in']);
              },error=>{
                   
                   this.toastr.error(error.error.message, 'Error!', {progressBar: true});            
                          })
    }

}
