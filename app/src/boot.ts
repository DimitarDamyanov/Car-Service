/// <reference path="_all.ts" />
import MainController = ContractManagerApp.MainController;
import MapController = ContractManagerApp.MapController;
import NavigationController = ContractManagerApp.NavigationController;
import MagazineController = ContractManagerApp.MagazineController;
import ServiceController = ContractManagerApp.ServiceController;

var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module('contactManagerApp', ['ngMaterial', 'ngRoute', 'ngMdIcons', 'uiGmapgoogle-maps'])
        .controller('mainController', MainController)
        .controller('mapController', MapController)
        .controller('navController', NavigationController)
        .controller('magazineController', MagazineController)
        .controller('serviceController', ServiceController)
        .config(($mdThemingProvider:angular.material.IThemingProvider) => {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
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
