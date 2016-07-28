/**
 * Created by D on 25.7.2016 г..
 */
module ContractManagerApp{
    const CONTACTS_URL = '/dist/data/contacts.json';

    export class ContactsService {
        static $inject = ['$http', '$q'];
        public contactsInformation : Object = {};

        constructor(private $http : ng.IHttpService, private $q : ng.IQService){}

        public loadContactsInformation() {
            var dfd = this.$q.defer();

            this.$http.get(CONTACTS_URL)
                .then(function (response) {
                    this.contactsInformation = response.data;
                    dfd.resolve(response.data);
                });

            return dfd.promise;
        }

        public getContactsInformation() : Object {
            return this.contactsInformation;
        }
    }

}
