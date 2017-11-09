import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


/**
 * Api is a Generic API REST handler
 */
@Injectable()
export class Api {
  url: string = 'https://us-central1-fir-contactsserver.cloudfunctions.net';

  constructor(public http: HttpClient) { }


  /**
   * Post method
   *
   * @param {string} endpoint  The resource you want to post to
   * @param {any} body  Object with the content you want to post
   * @param {any} reqOpts  Optional object with the options of the http post method
   * 
   * @returns An observable prepared to execute the post
   */ 
  post(endpoint: string, body: any, reqOpts?: any) {
    //TODO
  }


  /**
   * Put method
   *
   * @param {string} endpoint  The resource you want to put st to
   * @param {any} body  The content you want to put st
   * @param {any} reqOpts  Options of the http put method
   *  
   * @returns An observable prepared to execute the put
   */
  put(endpoint: string, body: any, reqOpts?: any) {
    //TODO
  }


  /**
   * Delete method
   *
   * @param {string} endpoint  The resource you want to delete
   * @param {any} reqOpts  Options of the http delete method
   * 
   * @returns An observable prepared to execute the delete
   */  
  delete(endpoint: string, reqOpts?: any) {
    //TODO
  }


  /**
   * Patch method
   * 
   * @param {string} endpoint  The resource you want to patch to
   * @param {any} body  The content you want to patch
   * @param {any} reqOpts  Options of the http patch method
   *
   * @returns An observable prepared to execute the patch
   */  
  patch(endpoint: string, body: any, reqOpts?: any) {
    //TODO
  }


  /**
   * Get method
   * 
   * @param {string} endpoint  The resource you want to get
   * @param {any} queryParams  The query params
   * @param {any} reqOpts  Options of the http get method
   *
   * @returns An observable prepared to execute the get
   */    
  get(endpoint: string, queryParams: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    //TODO: set queryParams as reqOpts.params
    if (queryParams) {
      for (let k in queryParams) {
        //k is the key
        //queryParams[k] is the content
      }
    }

    //TODO: return a GENERIC get
    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }  
}
