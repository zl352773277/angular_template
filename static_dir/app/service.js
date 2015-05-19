var product_service = angular.module('product_service',[]);
/**
 * 用于进行服务端ajax请求的服务
 */
product_service.service('productApi', ['$http', function($http) {
    var service = {
        /**
         * @param callback
         * @returns {boolean}
         */
        'get_login_user' : function(callback) {
            var config = {
                'url' :'/',
                'method' : 'get'
            };
            $http(config).success(function(data) {
                callback(data);
            });
            return true;
        }
    }
}]);

