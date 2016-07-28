/**
 * Created by D on 4.7.2016 г..
 */
var ContractManagerApp;
(function (ContractManagerApp) {
    var ContactController = (function () {
        function ContactController(service) {
            this.service = service;
            var self = this;
            service.loadContactsInformation().then(function (data) {
                console.log(data);
                self.contactsInformation = data;
            });
        }
        ContactController.$inject = ["ContactsService"];
        return ContactController;
    }());
    ContractManagerApp.ContactController = ContactController;
})(ContractManagerApp || (ContractManagerApp = {}));
//# sourceMappingURL=contactController.js.map