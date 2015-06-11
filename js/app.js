var app = angular.module('IEYS', ['ngMaterial','ngRoute']);

var controllers ={};
controllers.header = function($scope){$scope.name = 'India Emerge Youth Summit';};
controllers.content = function($scope){$scope.content = 'Controller Change';};
app.controller(controllers);

app.config(function($mdThemingProvider,$routeProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('grey',{
            'default':'700'
        })
        .accentPalette('red',{
            'default': 'A700'
        });
    $routeProvider
        .when('/',{
            templateUrl: 'views/main.html'
        })
        .when('/route1',{
            templateUrl: 'views/route1.html',
            controller:'content'
        })
        .otherwise({
            redirectTo : '/'
        });
});


