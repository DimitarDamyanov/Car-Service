/**
 * Created by D on 3.7.2016 г..
 */
var ContractManagerApp;
(function (ContractManagerApp) {
    var NavigationController = (function () {
        function NavigationController() {
            this.currentNavItem = 'Сервиз';
            this.items = [{
                    route: "service",
                    name: "Сервиз"
                }, {
                    route: "shop",
                    name: "Магазин"
                }, {
                    route: "leasing",
                    name: "Лизинг"
                }, {
                    route: "contacts",
                    name: "Контакти"
                }];
        }
        NavigationController.$inject = ['$location'];
        return NavigationController;
    }());
    ContractManagerApp.NavigationController = NavigationController;
})(ContractManagerApp || (ContractManagerApp = {}));
//# sourceMappingURL=navigationController.js.map