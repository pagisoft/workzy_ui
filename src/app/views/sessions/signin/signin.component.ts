import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
    loading: boolean;
    loadingText: string;
    signinForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private toastr: ToastrService,
    ) { 

       if(this.auth.authenticated){
                             this.router.navigate(['/employer/home']);

       }
    }

    ngOnInit() {

        if(this.auth.authenticated){
                             this.router.navigate(['/employer/home']);

        }

        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                this.loadingText = 'Loading Dashboard Module...';

                this.loading = true;
            }
            if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                this.loading = false;
            }
        });

        this.signinForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    signin() {
        this.loading = true;
        this.loadingText = 'Sigining in...';
        this.auth.signin(this.signinForm.value)
            .subscribe(res => {
                 this.router.navigate(['/employer/home']);
                 this.toastr.success('success!', 'Login Successfully! ', { timeOut: 5000 });
            } ,error=>{
                   
                   this.toastr.error('Error! ', 'Login failed , Please try again with valid credentials!', {progressBar: true});            
                          })
    }

}
