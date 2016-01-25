beerApp.controller('SingleBeerController', function($scope, $routeParams, beersFactory) {
	var beerId = $routeParams.beerId;
	$scope.beer = null;
	function init() {
			beersFactory.getBeers().then(
	        function (result) {
	            var beers = result.data;
	            // find matched beer from beerId
	            for (var i=0,len=beers.length;i<len;i++) {
	                	if (beers[i].id === beerId) {
	                	    console.log("matched to " + beerId)
	                	    data = beers[i];
	                	   	break;
	                	}
	            	}
	            	$scope.beer = data;
	        },
	        function () {
	        }
	    );
	}
	init();
});

