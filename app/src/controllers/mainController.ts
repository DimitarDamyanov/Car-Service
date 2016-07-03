/**
 * Created by D on 2.7.2016 г..
 */
module ContractManagerApp {
    export class MainController {
        static $inject = ['$mdSidenav'];

        constructor(private $mdSidenav: angular.material.ISidenavService){

        }
        message: string = 'Hello from our controller!';
        toggleSideNav() : void {
            this.$mdSidenav('left').toggle();
        }

    }
}