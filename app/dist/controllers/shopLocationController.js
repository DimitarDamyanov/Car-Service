/**
 * Created by D on 2.7.2016 г..
 */
var ContractManagerApp;
(function (ContractManagerApp) {
    var ShopLocationController = (function () {
        function ShopLocationController() {
            this.map = { center: { latitude: 41.933500, longitude: 25.554622 }, zoom: 17 };
            this.options = { scrollwheel: false };
            this.marker = {
                id: 0,
                coords: {
                    latitude: 41.933500,
                    longitude: 25.554622
                },
                options: { draggable: true }
            };
        }
        return ShopLocationController;
    }());
    ContractManagerApp.ShopLocationController = ShopLocationController;
})(ContractManagerApp || (ContractManagerApp = {}));
//# sourceMappingURL=shopLocationController.js.map