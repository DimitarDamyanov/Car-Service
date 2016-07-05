/// <reference path="_all.ts" />
import MainController = ContractManagerApp.MainController;
import NavigationController = ContractManagerApp.NavigationController;
import MagazineController = ContractManagerApp.MagazineController;
import ServiceController = ContractManagerApp.ServiceController;
import ContactController = ContractManagerApp.ContactController;
import ServiceLocationController = ContractManagerApp.ServiceLocationController;
import ShopLocationController = ContractManagerApp.ShopLocationController;

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
        .config(($mdThemingProvider:angular.material.IThemingProvider) => {
            $mdThemingProvider.theme('default')
                .primaryPalette('red')
                .accentPalette('red');
        })
        .config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
            GoogleMapApi.configure({
                key: 'AIzaSyBtUA_CngKsEHUX1vytCXaoFJ7H3gINtrM',
                // v: '3.20',
                libraries: 'weather,geometry,visualization'
            })
        }])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when("/service", {
                templateUrl: '../dist/view/service.html',
                controller: 'serviceController'
            }). when('/magazine', {
                templateUrl: '../dist/view/magazine.html',
                controller: 'magazineController'
            }).when('/contacts', {
                templateUrl: '../dist/view/contacts.html',
                controller: 'contactsController'
            })
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
            }
        })
})(ContactManagerApp || (ContactManagerApp = {}));
