/**
 * Created by D on 4.7.2016 г..
 */

module ContractManagerApp{
    export class ContactController {
        public static $inject = ["ContactsService"];
        constructor(private service : ContactsService){
            var self = this;
            service.loadContactsInformation().then(function (data) {
                console.log(data);
                self.contactsInformation = data;
            })
        }
    }
}