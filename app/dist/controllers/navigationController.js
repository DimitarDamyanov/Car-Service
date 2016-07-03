/**
 * Created by D on 3.7.2016 г..
 */
var ContractManagerApp;
(function (ContractManagerApp) {
    var NavigationController = (function () {
        function NavigationController() {
            this.currentNavItem = 'page1';
        }
        NavigationController.$inject = ['$location'];
        return NavigationController;
    }());
    ContractManagerApp.NavigationController = NavigationController;
})(ContractManagerApp || (ContractManagerApp = {}));
//# sourceMappingURL=navigationController.js.map