/**
 * Created by D on 27.7.2016 г..
 */
module ContractManagerApp {
    const LEASING_URL = '/dist/data/leasing.json';

    export class LeasingService {
        static $inject = ['$http', '$q'];

        constructor(private $http : ng.IHttpService, private $q : ng.IQService){}

        public getLeasingInformation(){
            var dfd = this.$q.defer();
            this.$http.get(LEASING_URL).then(function (response) {
                //check the response status
                dfd.resolve(response.data);
            }).catch(function (error) {
                console.log(error);
            });
            return dfd.promise;
        }

    }
}