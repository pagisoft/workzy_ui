import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStoreService } from '../../../shared/services/local-store.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [SharedAnimations]
})
export class SignupComponent implements OnInit {
 
   signupForm: FormGroup;
  constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private toastr: ToastrService,
        private router: Router,
         private store: LocalStoreService

    ) {  }

  ngOnInit() {

      this.signupForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            username: ['', Validators.required]

        });
  }

  signup(){
      
   
    
       var data={
          "email": this.signupForm.controls['email'].value,
          "username":this.signupForm.controls['username'].value,
          "password":this.signupForm.controls['password'].value
         
       }

         this.auth.signupEmployer(data)
              .subscribe(res =>{
      
                   this.toastr.success('success!', 'Employer Registered Successfully! ', { timeOut: 5000 });
                   this.ngOnInit();

                   this.router.navigate(['/panel/sign-in']);
              },error=>{
                   
                   this.toastr.error(error.error.message, 'Error!', {progressBar: true});            
                          })


  
  
  }





}
