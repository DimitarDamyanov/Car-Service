/**
 * Created by D on 24.7.2016 г..
 */
var ContractManagerApp;
(function (ContractManagerApp) {
    var ServiceService = (function () {
        function ServiceService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.serviceInformation = {};
        }
        ServiceService.prototype.loadServiceInformation = function () {
            var dfd = this.$q.defer();
            this.$http.get('/dist/data/service.json')
                .then(function (response) {
                this.serviceInformation = response.data;
                dfd.resolve(response.data);
            });
            return dfd.promise;
        };
        ServiceService.prototype.getServiceInformation = function () {
            return this.serviceInformation;
        };
        ServiceService.$inject = ['$http', '$q'];
        return ServiceService;
    }());
    ContractManagerApp.ServiceService = ServiceService;
})(ContractManagerApp || (ContractManagerApp = {}));
//# sourceMappingURL=serviceService.js.map