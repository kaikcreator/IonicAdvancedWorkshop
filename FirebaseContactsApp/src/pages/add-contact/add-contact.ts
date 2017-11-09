import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

import { Contact } from '../../models';

/**
 * AddContactPage component.
 * 
 * This view allows to create a new contact and upload it to the server
 */
@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContactPage {

  public contact:Contact = new Contact();

  constructor(
    public viewCtrl: ViewController ) {
  }

  ionViewDidLoad() {
  }

  addContact(){
    //TODO: update contacts on the server
    this.viewCtrl.dismiss(true);
  }

}
