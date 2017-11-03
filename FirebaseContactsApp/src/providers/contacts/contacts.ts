import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { IContact } from '../../models/index';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {

  constructor(public api: Api) {
  }

  getContacts():Observable<IContact[]>{
    const observable = this.api.get('contact',null)
    .map(data => Object.keys(data).map(k => data[k]))
    .share();

    observable.subscribe(items => {
      return <IContact[]>items;
    });

    return observable;
  }

  addContact(contact:IContact){
    return this.api.post('contact', {...contact}, new HttpParams().set('Content-Type', 'application/json'));
  }

}
