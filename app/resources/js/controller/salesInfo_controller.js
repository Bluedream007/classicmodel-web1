'use strict';

// angular.module('ClassicMdApp.salesInfo', ['ngRoute'])
var CM_SalesInfoController = angular.module('ClassicMdApp.salesInfo', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/SalesInfo/Customers', {
        templateUrl: 'salesInfo/CustomersForm_1.html',
        controller: 'CustListCtrl'
      }).
      when('/SalesInfo/Orders', {
        templateUrl: 'salesInfo/OrderForm_1.html',
        controller: 'OrderListCtrl'
      }).
      when('/SalesInfo/OrderDetails', {
          templateUrl: 'salesInfo/OrderDetailForm_1.html',
          controller: 'OrderDetailListCtrl'
      });
}])

.controller('SalesInfoCtrl', [function() {



}]);