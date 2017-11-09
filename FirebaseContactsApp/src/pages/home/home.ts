import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { IContact } from '../../models';
import { AddContactPage } from '../add-contact/add-contact';

/**
 * HomePage component.
 * 
 * This is the root page, that displays a list with the contacts
 * and provides a button to launch the {@link AddContactPage} modal
 * in order to create new contacts
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public contacts:IContact[] = null;

  constructor(
    public modalCtrl: ModalController
  ) { }

  ionViewDidLoad(){
    //TODO: get contacts from provider and update property
  }

  presentAddContactPage(){
    let modal = this.modalCtrl.create(AddContactPage);
    modal.present();
    modal.onDidDismiss((contactsHaveChanged)=>{
      //TODO: update contacts if needed
    })
  }

}
