/**
 * Created by D on 2.7.2016 г..
 */
module ContractManagerApp {
    export class ServiceLocationController {
        map = {center: {latitude: 41.953487, longitude: 25.557492 }, zoom: 17 };
        options = {scrollwheel: false};
        marker = {
            id: 0,
            coords: {
                latitude:  41.953487,
                longitude: 25.557492
            },
            options: {draggable: true}
        }
    }
}