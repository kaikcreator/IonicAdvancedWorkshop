import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { IContact } from '../../models/index';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public contacts:IContact[] = null;

  constructor(public navCtrl: NavController, public api: Api) {
  }

  ionViewDidLoad(){
    this.api.get('contacts',null)
    .map(data => Object.keys(data).map(k => data[k]))
    .subscribe(items => {
      this.contacts = <IContact[]>items;
    });
  }

}
