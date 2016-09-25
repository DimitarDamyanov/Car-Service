var ContractManagerApp;
(function (ContractManagerApp) {
    var LEASING_URL = '/dist/data/leasing.json';
    var LeasingService = (function () {
        function LeasingService($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }
        LeasingService.prototype.getLeasingInformation = function () {
            var dfd = this.$q.defer();
            this.$http.get(LEASING_URL).then(function (response) {
                //check the response status
                dfd.resolve(response.data);
            }).catch(function (error) {
                console.log(error);
            });
            return dfd.promise;
        };
        LeasingService.$inject = ['$http', '$q'];
        return LeasingService;
    }());
    ContractManagerApp.LeasingService = LeasingService;
})(ContractManagerApp || (ContractManagerApp = {}));
//# sourceMappingURL=leasingService.js.map