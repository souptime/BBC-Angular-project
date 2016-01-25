beerApp.controller('ResultsBeerController', function($scope, $log, $location, beersFactory, dataShare, appSettings) {
	$scope.beers = [];
	$scope.words = [];
	$scope.appSettings = appSettings;
	var wordGroup = [];
	var chosenWords = [];
	var wordInArray = function (list, array) {
	    return array.some(function (v) {
	        return list.indexOf(v) >= 0;
	    });
	};
	function init() {
		// get chosen words from data store
		chosenWords = dataShare.getData();
		if (typeof chosenWords !== 'undefined' && chosenWords.length > 0) {		// if there is any data in the array
				beersFactory.getBeers().then(
			        function (result) {

			        	// return all beers
			            var beers = result.data;
			            var match;

			            // check each beer's list of words to find a match
			            // TO DO (ideally): add option to match just 1 or exact match of all
	                    for (var i=0,len=beers.length;i<len;i++) {
	                    	match = wordInArray(chosenWords,beers[i].words)
	        				if (match) {
	        					$scope.beers.push(beers[i])
	        				}
	        				//console.log(beers[i].name + " " + match)

	                    }
			        },
			        function (data) {
			        	$log.log("error" + " " + data.status)
			        }
			    );
		} else {
			// if someone arrives at this route directly send them back to start page
			$location.path('/')
			$log.log("no words")
		}
		
		console.log("results page: " + chosenWords)


	}

	init();
});

