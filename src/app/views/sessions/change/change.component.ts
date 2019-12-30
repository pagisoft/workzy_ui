import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, ActivatedRoute,RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStoreService } from '../../../shared/services/local-store.service';
@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss'],
  animations: [SharedAnimations]
})
export class ChangeComponent implements OnInit {

    loading: boolean;
    loadingText: string;
    password: string;
    link:string
    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router : Router,
        private toastr: ToastrService,
              private route :ActivatedRoute    ) { 

      
         this.route.params.subscribe((params) => {
            console.log(params);

            this.link = params["link"];
           
            
            })

    }

    ngOnInit() {
       
    }

    changePassword() {
       var data={
          "link": this.link,
          "password":this.password
         
       }

         this.auth.changePassword(data)
              .subscribe(res =>{
      
                   this.toastr.success('success!', 'Password Changed Successfully! ', { timeOut: 5000 });
                   this.ngOnInit();

                   this.router.navigate(['/panel/sign-in']);
              },error=>{
                   
                   this.toastr.error(error.error.message, 'Error!', {progressBar: true});            
                          })
    }

}
