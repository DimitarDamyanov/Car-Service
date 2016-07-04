/**
 * Created by D on 2.7.2016 г..
 */
module ContractManagerApp {
    export class ShopLocationController {
        map = {center: {latitude: 41.933698, longitude: 25.554554 }, zoom: 17 };
        options = {scrollwheel: false};
        marker = {
            id: 0,
            coords: {
                latitude:  41.933698,
                longitude: 25.554554
            },
            options: {draggable: true}
        }
    }
}
