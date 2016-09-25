/**
 * Created by D on 3.7.2016 г..
 */
var ContractManagerApp;
(function (ContractManagerApp) {
    var ServiceController = (function () {
        function ServiceController(service, $window) {
            this.service = service;
            this.$window = $window;
            var self = this;
            service.loadServiceInformation().then(function (data) {
                self.serviceInformation = data;
            });
        }
        ServiceController.prototype.goToPage = function (url) {
            this.$window.open(url, '_blank');
        };
        ServiceController.$inject = ["ServiceService", "$window"];
        return ServiceController;
    }());
    ContractManagerApp.ServiceController = ServiceController;
})(ContractManagerApp || (ContractManagerApp = {}));
//# sourceMappingURL=serviceController.js.map