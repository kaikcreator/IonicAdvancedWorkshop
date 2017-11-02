import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'https://us-central1-fir-contactsserver.cloudfunctions.net';

  constructor(public http: HttpClient) { }

  get<T>(endpoint: string, queryParams: any, reqOpts?: any) {
    console.log(queryParams);
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (queryParams) {
      //HttpParams is inmutable
      reqOpts.params = new HttpParams();
      for (let k in queryParams) {
        reqOpts.params = reqOpts.params.set(k, queryParams[k]);
      }
    }

    return this.http.get<T>(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }
}
