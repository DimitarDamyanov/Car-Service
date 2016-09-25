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
            route: "contacts",
            name: "Контакти"
        }]
    }
}
