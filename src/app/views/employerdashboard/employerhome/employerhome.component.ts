import { Component, OnInit } from '@angular/core';
import { DashserviceService } from '../service/dashservice.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employerhome',
  templateUrl: './employerhome.component.html',
  styleUrls: ['./employerhome.component.scss']
})
export class EmployerhomeComponent implements OnInit {

  constructor( private auth: AuthService,
        private router: Router,
        private toastr: ToastrService,public service : DashserviceService) { }

  user:any;
  
  ngOnInit() {


       this.service.getUserProfile()
              .subscribe(res =>{
      
                  this.user= res;

                 
              },error=>{
                   
                   this.toastr.error(error.error.message, 'Error!', {progressBar: true});            
                          })

  }



  signout(){
        this.auth.signout();

  }

}
