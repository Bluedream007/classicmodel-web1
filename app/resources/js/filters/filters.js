'use strict';

/* Filters */

var AppFilters = angular.module('AngularSpringApp.filters', []);

/*
AppFilters.filter('interpolate', ['version', function (version) {
    return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    }
}]);
*/

// Filter - convert the date format
AppFilters.filter('dateFormat', function($filter)
{
    return function(input)
    {
        if(input == null){ return ""; }

        var _date = $filter('date')(new Date(input), 'dd/MM/yyyy');

        console.log('Filter data: ' + _date);
        return _date.toUpperCase();

    };
});