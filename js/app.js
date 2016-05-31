var microcravate = angular.module('microcravate', ['ngRoute', 'ngAudio', 'ngSanitize', 'ngMaterial'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    
    //routes 
    
	.when('/', {
		templateUrl: wpAngUrl.vues + 'accueil.html',
		controller: 'AccueilCtrl'
	})
    
    .when('/association', {
		templateUrl: wpAngUrl.vues + 'association.html',
		controller: 'AccueilCtrl'
	})
    
    .when('/reportages', {
		templateUrl: wpAngUrl.vues + 'reportages.html',
		controller: 'ReportagesCtrl'
	})
    
    .when('/creations', {
		templateUrl: wpAngUrl.vues + 'creations.html',
		controller: 'CreationsCtrl'
	})
        
    .when('/emissions', {
		templateUrl: wpAngUrl.vues + 'emissions.html',
		controller: 'EmissionsCtrl'
	})
    
    .otherwise({
        redirectTo: '/'
    });
}]);

