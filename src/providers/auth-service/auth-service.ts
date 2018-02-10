import { Injectable } from '@angular/core';
import { Http, Headers,  Response, ResponseOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
	path : string = 'https://ionic-ror.herokuapp.com/api/';
	pathlocal : string = 'http://localhost:3000/api/';

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }


	  //   login(credentials) {
		 //    return new Promise((resolve, reject) => {
		 //        let headers = new Headers();
		 //        headers.append('Content-Type', 'application/json');

		 //        this.http.post(apiUrl+'login', JSON.stringify(credentials), {headers: headers})
		 //          .subscribe(res => {
		 //            resolve(res.json());
		 //          }, (err) => {
		 //            reject(err);
		 //          });
		 //    });
		 //  }

	  // register(data) {
		 //    return new Promise((resolve, reject) => {
		 //        let headers = new Headers();
		 //        headers.append('Content-Type', 'application/json');

		 //        this.http.post(apiUrl+'guest/signup', JSON.stringify(data), {headers: headers})
		 //          .subscribe(res => {
		 //            resolve(res.json());
		 //          }, (err) => {
		 //            reject(err);
		 //          });
		 //    });
		 //  }

		 register(data){
		 	let headers = new Headers({ 'Content-Type' : 'application/json' });
            return this.http.post(`${this.pathlocal}auth/register`, JSON.stringify(data), {
                  headers:headers,
                  method:"POST"
             }).map(
                  (res:Response) => {return res.json(); }
            );
		 }

		 login(data){
		 	let headers = new Headers({ 'Content-Type' : 'application/json' });
            return this.http.post(`${this.pathlocal}auth/login`, JSON.stringify(data), {
                  headers:headers,
                  method:"POST"
             }).map(
                  (res:Response) => {return res.json(); }
            );
		 }


}
