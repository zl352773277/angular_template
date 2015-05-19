'use strict';

var product_app = angular.module('product',['ngRoute','product_service']);

product_app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/product', {
                templateUrl:'view/productList.html',
                controller:'product'
            }).
            otherwise({
                redirectTo: '/product'
            });
    }
]);
