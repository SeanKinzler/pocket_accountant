angular.module('pocketacct.credits', [])
	.controller('CreditController', function($scope, $window, 
		$location, Summary) {
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
		$scope.addCredit = function() {
			Summary.addCredit({username: $window.localStorage.getItem('pocketacct.username')}, 
				$scope.creditAmmount, $scope.creditTitle).then(initVals)
		}

		$scope.logout = function() {
			Users.logout()
			$location.path('/login');
		};

		$scope.viewCreds = function() {
			$location.path('/allCredits');
		}

		$scope.viewDebs = function() {
			$location.path('/allDebits');
		}

		$scope.viewSummary = function() {
			$location.path('/summary');
		}
	})