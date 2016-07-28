/**
 * Created by D on 25.7.2016 г..
 */
var ContractManagerApp;
(function (ContractManagerApp) {
    var CONTACTS_URL = '/dist/data/contacts.json';
    var ContactsService = (function () {
        function ContactsService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.contactsInformation = {};
        }
        ContactsService.prototype.loadContactsInformation = function () {
            var dfd = this.$q.defer();
            this.$http.get(CONTACTS_URL)
                .then(function (response) {
                this.contactsInformation = response.data;
                dfd.resolve(response.data);
            });
            return dfd.promise;
        };
        ContactsService.prototype.getContactsInformation = function () {
            return this.contactsInformation;
        };
        ContactsService.$inject = ['$http', '$q'];
        return ContactsService;
    }());
    ContractManagerApp.ContactsService = ContactsService;
})(ContractManagerApp || (ContractManagerApp = {}));
//# sourceMappingURL=contactsService.js.map