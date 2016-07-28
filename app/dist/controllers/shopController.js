/**
 * Created by D on 3.7.2016 г..
 */
var ContractManagerApp;
(function (ContractManagerApp) {
    var ShopController = (function () {
        function ShopController(service) {
            this.service = service;
            var self = this;
            service.loadShopInformation().then(function (data) {
                console.log(data);
                self.shopInformation = data;
            });
        }
        ShopController.$inject = ["ShopService"];
        return ShopController;
    }());
    ContractManagerApp.ShopController = ShopController;
})(ContractManagerApp || (ContractManagerApp = {}));
//# sourceMappingURL=shopController.js.map