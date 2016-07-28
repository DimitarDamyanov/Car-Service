/// <reference path="_all.ts" />
var MainController = ContractManagerApp.MainController;
var NavigationController = ContractManagerApp.NavigationController;
var ShopController = ContractManagerApp.ShopController;
var ServiceController = ContractManagerApp.ServiceController;
var ContactController = ContractManagerApp.ContactController;
var LeasingController = ContractManagerApp.LeasingController;
var ServiceService = ContractManagerApp.ServiceService;
var ShopService = ContractManagerApp.ShopService;
var ContactsService = ContractManagerApp.ContactsService;
var LeasingService = ContractManagerApp.LeasingService;
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module('contactManagerApp', ['ngMaterial', 'ngRoute', 'ngMdIcons', 'uiGmapgoogle-maps'])
        .controller('mainController', MainController)
        .controller('navController', NavigationController)
        .controller('shopController', ShopController)
        .controller('serviceController', ServiceController)
        .controller('contactsController', ContactController)
        .controller('leasingController', LeasingController)
        .service('ServiceService', ServiceService)
        .service('ShopService', ShopService)
        .service('ContactsService', ContactsService)
        .service('LeasingService', LeasingService)
        .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('red')
            .accentPalette('red');
    })
        .config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
            GoogleMapApi.configure({
                key: 'AIzaSyBtUA_CngKsEHUX1vytCXaoFJ7H3gINtrM',
                // v: '3.20',
                libraries: 'weather,geometry,visualization'
            });
        }])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when("/service", {
                templateUrl: '../dist/view/service.html',
                controller: 'serviceController'
            }).when('/shop', {
                templateUrl: '../dist/view/shop.html',
                controller: 'shopController'
            }).when('/leasing', {
                templateUrl: '../dist/view/leasing.html',
                controller: 'leasingController'
            }).
                when('/contacts', {
                templateUrl: '../dist/view/contacts.html',
                controller: 'contactsController'
            }).otherwise({ redirectTo: '/service' });
        }]);
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map