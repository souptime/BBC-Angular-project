beerApp.factory('beersFactory', function($http){
	var factory  = {};
	var beers = [];
	var beer = [];

	factory.getBeers = function(){
		beers = $http.get('/app/services/beers.json?' + new Date().getTime()); // browser kept caching the json file
		return beers;
	}

	return factory;
})

// cross-crontroller data share factory taken from http://excellencenodejsblog.com/angularjs-sharing-data-between-controller/
beerApp.factory('dataShare',function($rootScope,$timeout){
  var service = {};
  service.data = false;
  service.sendData = function(data){
      this.data = data;
      $timeout(function(){
         $rootScope.$broadcast('data_shared');
      },100);
  };
  service.getData = function(){
    return this.data;
  };
  return service;
});



	

