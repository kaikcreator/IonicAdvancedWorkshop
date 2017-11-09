import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { IContact } from '../../models/index';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';


/**
*  ContactsProvider
*
*  This Service uses the {@link Api} service to get contacts
*  from the server and add new contacts there.
*/
@Injectable()
export class ContactsProvider {


  constructor(public api: Api) {
  }


  /**
   * Get contacts from the server
   * @example
   * getContacts().subscribe((items:IContact[]) =\>{
   *              console.log(items);
   * })
   *
   * @returns A flow with the array of contacts
   */  
  getContacts():Observable<IContact[]>{
    const observable = this.api.get('contact',null)
    .map(data => Object.keys(data).map(k => data[k]))

    //TODO: subscribe to the data and transform it to an IContact array 

    //TODO: return an object you can subscribe to
    return null;
  }


  /**
   * Add a new contact to the server
   * 
   * @param {IContact} contact  The contact that must be added
   * 
   * @example
   * const contact = new Contact();
   * addContact(contact).subscribe(() =\>{}, error =\> alert(error));
   *
   */   
  addContact(contact:IContact):void{
    //TODO: post a new contact
    return null;
  }

}
