import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

import { Contact } from '../../models';
import { ContactsProvider } from '../../providers/index';

/**
 * AddContactPage. This view allows to create a new contact
 * and upload it to the server
 *
 */

@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContactPage {

  public contact:Contact = new Contact();

  constructor(
    public contactsProvider: ContactsProvider,
    public viewCtrl: ViewController ) {
  }

  ionViewDidLoad() {
  }

  addContact(){
    this.contactsProvider.addContact(this.contact)
    .subscribe(item=>{}, error => alert(error), ()=>{
      this.viewCtrl.dismiss();
    })
  }

}
