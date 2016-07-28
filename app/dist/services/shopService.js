/**
 * Created by D on 25.7.2016 г..
 */
var ContractManagerApp;
(function (ContractManagerApp) {
    var SHOP_URL = '/dist/data/shop.json';
    var ShopService = (function () {
        function ShopService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.shopInformation = {};
        }
        ShopService.prototype.loadShopInformation = function () {
            var dfd = this.$q.defer();
            this.$http.get(SHOP_URL)
                .then(function (response) {
                this.shopInformation = response.data;
                dfd.resolve(response.data);
            });
            return dfd.promise;
        };
        ShopService.prototype.getServiceInformation = function () {
            return this.shopInformation;
        };
        ShopService.$inject = ['$http', '$q'];
        return ShopService;
    }());
    ContractManagerApp.ShopService = ShopService;
})(ContractManagerApp || (ContractManagerApp = {}));
//# sourceMappingURL=shopService.js.map