import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient ,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {environment} from '../../../../environments/environment';
import { LocalStoreService } from '../../../shared/services/local-store.service';


@Injectable({
  providedIn: 'root'
})
export class DashserviceService {

  
  constructor(
    public http: HttpClient, private router: Router , private store : LocalStoreService) {
    
  }



  getUserProfile() {


   
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers=headers.append('Authorization', "Bearer "+ this.store.getItem("ut"));

     return this.http.get<any>(environment.apiUrl + 'secure/userProfile',{headers: headers})
         .map(response => {

           
            return response;
          })



  }
}
