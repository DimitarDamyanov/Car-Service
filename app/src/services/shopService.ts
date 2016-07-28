/**
 * Created by D on 25.7.2016 г..
 */
module ContractManagerApp{
    const SHOP_URL = '/dist/data/shop.json';

    export class ShopService {
        static $inject = ['$http', '$q'];
        public shopInformation : Object = {};

        constructor(private $http : ng.IHttpService, private $q : ng.IQService){}

        public loadShopInformation() {
            var dfd = this.$q.defer();

            this.$http.get(SHOP_URL)
                .then(function (response) {
                    this.shopInformation = response.data;
                    dfd.resolve(response.data);
                });

            return dfd.promise;
        }

        public getServiceInformation() : Object {
            return this.shopInformation;
        }
    }

}
