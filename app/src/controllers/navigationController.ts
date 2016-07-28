/**
 * Created by D on 3.7.2016 г..
 */
module ContractManagerApp {
    export class NavigationController {
        static $inject = ['$location'];
        currentNavItem: string = 'Сервиз';
        items = [{
            route: "service",
            name: "Сервиз"
        },{
            route: "shop",
            name: "Магазин"
        },{
            route: "leasing",
            name: "Лизинг"
        },{
            route: "contacts",
            name: "Контакти"
        }]
    }
}
