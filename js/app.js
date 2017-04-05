var app = angular.module('NearMeApp',['leaflet-directive','ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'MainController',
    	templateUrl:'js/views/main.html'
  	})
  	.when('/about', {
    	controller: 'AboutController',
    	templateUrl: 'js/views/about.html'
  	})
  	.otherwise({
    	redirectTo: '/'
  	});
});