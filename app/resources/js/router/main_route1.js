'use strict';

// This is a page router to control under pages
angular.module('ClassicMdApp.mainRoute', ['ngRoute',
                               'ClassicMdApp.companyInfo',
                               'ClassicMdApp.salesInfo']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);