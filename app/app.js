var beerApp = angular.module('beerApp', ['ngRoute','angular.filter']);
beerApp.config(function($routeProvider){
	$routeProvider
	.when('/', 
		{
			controller: 'ChooseBeerController',
			templateUrl: '/app/views/choose-beer.html'
		})
	.when('/beers-choice/:beerId', 
	{
		controller: 'SingleBeerController',
		templateUrl: '/app/views/beers-choice.html'
	})
	.when('/beer-result', 
	{
		controller: 'ResultsBeerController',
		templateUrl: '/app/views/beers-result.html'
	})
	.otherwise({redirectTo: '/'});
})