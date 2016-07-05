/**
 * Created by D on 2.7.2016 г..
 */
module ContractManagerApp {
    export class ShopLocationController {
        map = {center: {latitude:  41.933500, longitude: 25.554622 }, zoom: 17 };
        options = {scrollwheel: false};
        marker = {
            id: 0,
            coords: {
                latitude:  41.933500,
                longitude: 25.554622
            },
            options: {draggable: true}
        }
    }
}
