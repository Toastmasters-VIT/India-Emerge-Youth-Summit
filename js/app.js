/**
 * Created by Shivam Mathur on 11-06-2015.
 */
angular.module('ieys', ['ngMaterial'])
    .controller('ctrl', function($scope) {
    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('black')
            .accentPalette('red')});

