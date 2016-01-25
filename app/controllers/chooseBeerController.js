beerApp.controller('ChooseBeerController', function($scope, beersFactory, $log, dataShare,appSettings) {
	$scope.beers = [];
	$scope.words = [];
	$scope.appSettings = appSettings;
	var wordGroup = [];
	var chosenWords = [];
	$scope.chosen = true;
	$scope.chosenIndex = null;
	$scope.chooseWord = function(word){
		// add/remove (toggle) user choices to array as appropriate
		if (chosenWords.indexOf(word) !== -1) {
  			chosenWords.splice(chosenWords.indexOf(word), 1)
		} else {
			chosenWords.push(word);
		}			
	}

	$scope.saveChoices = function(){
		// send chosen words to be read by results view
		dataShare.sendData(chosenWords);
	}


	function init() {
		beersFactory.getBeers().then(
	        function (result) {

	        	// return all beers
	            $scope.beers = result.data;

	            // get all beer words
	            var beers = result.data;
	            for (var i=0,len=beers.length;i<len;i++) {
					wordGroup = wordGroup.concat(beers[i].words)
	            }
	            // filter out duplicate words
	            wordGroup = wordGroup.filter(function(item, pos, self) {
	                return self.indexOf(item) == pos;
	            })
	            // get list of unqiue beer words into the scope
	            $scope.words = wordGroup;
	            console.log(wordGroup)
	        },
	        function (data) {
	        	$log.log("error" + " " + data.status)
	        }
	    );


	}


	init();
});

