/**
 * Created by D on 2.7.2016 г..
 */
module ContractManagerApp {
    export class ShopLocationController {
        map = {center: {latitude: 41.933548, longitude: 25.554605 }, zoom: 17 };
        options = {scrollwheel: false};
        marker = {
            id: 0,
            coords: {
                latitude:  41.933548,
                longitude: 25.554605
            },
            options: {draggable: true}
        }
    }
}
