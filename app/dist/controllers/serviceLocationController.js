/**
 * Created by D on 2.7.2016 г..
 */
var ContractManagerApp;
(function (ContractManagerApp) {
    var ServiceLocationController = (function () {
        function ServiceLocationController() {
            this.map = { center: { latitude: 41.953487, longitude: 25.557492 }, zoom: 17 };
            this.options = { scrollwheel: false };
            this.marker = {
                id: 0,
                coords: {
                    latitude: 41.953487,
                    longitude: 25.557492
                },
                options: { draggable: true }
            };
        }
        return ServiceLocationController;
    }());
    ContractManagerApp.ServiceLocationController = ServiceLocationController;
})(ContractManagerApp || (ContractManagerApp = {}));
//# sourceMappingURL=serviceLocationController.js.map