/**
 * Created by D on 24.7.2016 г..
 */
module ContractManagerApp{
    export class ServiceService {
        static $inject = ['$http', '$q'];
        public serviceInformation : Object = {};

        constructor(private $http : ng.IHttpService, private $q : ng.IQService){}

        public loadServiceInformation() {
            var dfd = this.$q.defer();

            this.$http.get('/dist/data/service.json')
                .then(function (response) {
                    this.serviceInformation = response.data;
                    dfd.resolve(response.data);
                });

            return dfd.promise;
        }

        public getServiceInformation() : Object {
            return this.serviceInformation;
        }
    }

}
