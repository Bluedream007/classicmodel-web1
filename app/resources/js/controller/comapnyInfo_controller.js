'use strict';

angular.module('ClassicMdApp.companyInfo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/CompanyInfo/Employee', {
        templateUrl: 'companyInfo/Pview1.html',
        controller: 'Pview1Ctrl'
      }).
      when('/CompanyInfo/Office', {
        templateUrl: 'companyInfo/Pview12.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/view1'
      });
}])

.controller('Pview1Ctrl', [function() {

}]);