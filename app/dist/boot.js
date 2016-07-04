/// <reference path="_all.ts" />
var MainController = ContractManagerApp.MainController;
var NavigationController = ContractManagerApp.NavigationController;
var MagazineController = ContractManagerApp.MagazineController;
var ServiceController = ContractManagerApp.ServiceController;
var ContactController = ContractManagerApp.ContactController;
var ServiceLocationController = ContractManagerApp.ServiceLocationController;
var ShopLocationController = ContractManagerApp.ShopLocationController;
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module('contactManagerApp', ['ngMaterial', 'ngRoute', 'ngMdIcons', 'uiGmapgoogle-maps'])
        .controller('mainController', MainController)
        .controller('serviceLocationController', ServiceLocationController)
        .controller('shopLocationController', ShopLocationController)
        .controller('navController', NavigationController)
        .controller('magazineController', MagazineController)
        .controller('serviceController', ServiceController)
        .controller('contactsController', ContactController)
        .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
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
            }).when('/magazine', {
                templateUrl: '../dist/view/magazine.html',
                controller: 'magazineController'
            }).when('/contacts', {
                templateUrl: '../dist/view/contacts.html',
                controller: 'contactsController'
            });
        }])
        .directive('regularCard', function () {
        return {
            restrict: 'E',
            templateUrl: '../dist/view/tmpls/regularCard.tmpl.html',
            scope: {
                name: '@',
                description: '@',
                avatar: '@',
                theme: '@'
            },
            controller: function ($scope) {
                $scope.theme = $scope.theme || 'default';
            }
        };
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map