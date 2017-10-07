'use strict';

// Declare app level module which depends on views, and components
var ClassicModelsApp = angular.module('ClassicMdApp', [
  'ngRoute',
  'ClassicMdApp.mainRoute',
  'AngularSpringApp.filters'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


ClassicModelsApp.constant('ClassicMdConfig', {
    appName: 'ClassicModelsApp',
    appVersion: 1.0,
    apiUrl: 'http://www.google.com?api',
    // dataApiUrl: 'http://jbossews-bluedream.rhcloud.com/' // For OpenShift v2
    dataApiUrl: 'http://classicmodel-augjs1-mytestprj1.193b.starter-ca-central-1.openshiftapps.com/classicmodel-ap1/'    // For OpenShift v3
      });
