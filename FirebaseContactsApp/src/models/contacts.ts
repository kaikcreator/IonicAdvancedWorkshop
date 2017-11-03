export interface IContact{
    name:string;
    last_name:string;
    birth_date:string;
    address:string;
    postal_code:number;
    phone_number:string;
}

export class Contact implements IContact{
    public name:string = "";
    public last_name:string = "";
    public birth_date:string = "";
    public address:string = "";
    public postal_code:number = 0;
    public phone_number:string = "";
    
    constructor(contact?:IContact){
        if(contact){
            this.name = contact.name;
            this.last_name = contact.last_name;
            this.birth_date = contact.birth_date;
            this.address = contact.address;
            this.postal_code = contact.postal_code;
            this.phone_number = contact.phone_number;
        }
    }
}