import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { IContact } from '../../models';
import { ContactsProvider } from '../../providers';
import { AddContactPage } from '../add-contact/add-contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public contacts:IContact[] = null;

  constructor(
    public navCtrl: NavController, 
    public contactsProvider: ContactsProvider,
    public modalCtrl: ModalController
  ) { }

  ionViewDidLoad(){
    this.contactsProvider.getContacts().subscribe(items => {
      this.contacts = items;
    });
  }

  presentAddContactPage(){
    let modal = this.modalCtrl.create(AddContactPage);
    modal.present();
    modal.onDidDismiss(()=>{
      this.contactsProvider.getContacts().subscribe(items => {
        this.contacts = items;
      });
    })
  }

}
