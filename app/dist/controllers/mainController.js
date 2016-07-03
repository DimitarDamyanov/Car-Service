/**
 * Created by D on 2.7.2016 г..
 */
var ContractManagerApp;
(function (ContractManagerApp) {
    var MainController = (function () {
        function MainController($mdSidenav) {
            this.$mdSidenav = $mdSidenav;
            this.message = 'Hello from our controller!';
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.$inject = ['$mdSidenav'];
        return MainController;
    }());
    ContractManagerApp.MainController = MainController;
})(ContractManagerApp || (ContractManagerApp = {}));
//# sourceMappingURL=mainController.js.map