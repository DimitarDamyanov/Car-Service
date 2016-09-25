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