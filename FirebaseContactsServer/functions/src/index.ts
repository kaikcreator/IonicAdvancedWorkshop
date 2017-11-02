import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const cors = require('cors')({origin: true});

import { Contact, IContact } from './models';


//initialize FB realtime database
admin.initializeApp(functions.config().firebase);


/**
 * API Rest POST method to add a contact to the FB database
 * 
 * 
 * @returns Return the contact created
 */
exports.contact = functions.https.onRequest((req, res) => { 

    console.log(req.body);
    let contact = new Contact(<IContact>req.body);
    admin.database().ref('/contacts').push(contact).then(snapshot=>{
        return res.status(201).send({object:contact});
    });
})

/**
 * API Rest GET method to retrieve contacts from the FB database
 * 
 * @returns Return the list of contacts
 */
exports.contacts = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        admin.database().ref('/contacts').once('value').then(snapshot=>{
            return res.status(201).send(snapshot.val());
        });
    });
})
