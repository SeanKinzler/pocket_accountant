angular.module('pocketacct.credits', [])
	.controller('CreditController', function($scope, $window, 
		Summary) {
		var initVals = function() {
			Summary.totalCredits({
				username: $window.localStorage.getItem('pocketacct.username')
			})
			.then(function(data, err) {
				$scope.totalCreds = data;
			})
			Summary.getCredits({
				username: $window.localStorage.getItem('pocketacct.username')
			})
			.then(function(data, err) {
				$scope.allCredits = data;
			})
		}
		initVals();

	})