/**
 * Created by D on 3.7.2016 г..
 */
module ContractManagerApp {
    export class ServiceController {
        public static $inject = ["ServiceService", "$window"];

        constructor(private service: ServiceService, private $window: ng.IWindowService){
            var self = this;
            service.loadServiceInformation().then(function (data) {
                self.serviceInformation = data;
                console.log(self.serviceInformation);
            });
        }

        public goToPage(url){
            this.$window.open(url, '_blank');
        }
    }
}
