import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient ,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //Only for demo purpose
  authenticated = true;

  constructor(private store: LocalStoreService,
    public http: HttpClient, private router: Router) {
    this.checkAuth();
  }

  checkAuth() {
    // this.authenticated = this.store.getItem("demo_login_status");
  }

  getuser() {
    return of({});
  }

  signupTalent(creds) {


    let body = JSON.stringify(creds);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

     return this.http.post<any>(environment.apiUrl + 'signup', body,{headers: headers})
         .map(response => {

            of({}).pipe(delay(1500));
            return response;
          })



  }

  signin(credentials) {

     var creds={

            "email":credentials.email,
            "password":credentials.password

    }

    let body = JSON.stringify(creds);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

     return this.http.post<any>(environment.apiUrl + 'auth/signin', body,{headers: headers})
         .map(response => {

            this.authenticated = true;
            this.store.setItem('ut', response.token);

            this.store.setItem('iamvt', true);

            of({}).pipe(delay(1500));
            return response;
          })



  }
  signout() {
    this.authenticated = false;
    this.store.setItem("demo_login_status", false);
    this.router.navigateByUrl("/sessions/signin");
  }
}
