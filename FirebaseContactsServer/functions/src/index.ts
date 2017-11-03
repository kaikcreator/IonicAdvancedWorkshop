import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const cors = require('cors')({origin: true});

import { Contact, IContact } from './models';
import { ContactApi } from './api/contactApi';


//initialize FB realtime database
admin.initializeApp(functions.config().firebase);


/**
 * API REST contact endpoint 
 * - GET: get list of contacts from FB database
 * - POST: method to add a contact to the FB database 
 * 
 */
exports.contact = functions.https.onRequest((req, res) => { 
    return cors(req, res, ()=>{

        switch(req.method){
            case 'POST':
                return ContactApi.post(req, res);
            
            case 'GET':
                return ContactApi.get(req, res);

            default:
                return res.status(403).send('Method not allowed');
        }
        
    });
    
})
