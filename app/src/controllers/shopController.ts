/**
 * Created by D on 3.7.2016 г..
 */
module ContractManagerApp{
    export class ShopController {
        public static $inject = ["ShopService"];
        constructor(private service : ShopService){
            var self = this;
            service.loadShopInformation().then(function (data) {
                console.log(data);
                self.shopInformation = data;
            });

        }
    }
}
