import { Contact, IContact } from '../models';
import * as admin from 'firebase-admin';

export class ContactApi{
    
    static post(req:any, res:any){ 
        console.log(req.body);
        let contact = new Contact(<IContact>req.body);
        return admin.database().ref('/contacts').push(contact).then(snapshot=>{
            return res.status(201).send({object:contact});
        })
    }

    static get(req:any, res:any){
        return admin.database().ref('/contacts').once('value').then(snapshot=>{
            return res.status(201).send(snapshot.val());
        });
    }


}