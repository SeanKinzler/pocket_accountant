angular.module('pocketacct.debits', [])
	.controller('DebitController', function($scope, $window, 
		$location, Summary) {
		var initVals = function() {
			Summary.totalDebits({
				username: $window.localStorage.getItem('pocketacct.username')
			})
			.then(function(data, err) {
				$scope.totalDebits = data;
			})
			Summary.getDebits({
				username: $window.localStorage.getItem('pocketacct.username')
			})
			.then(function(data, err) {
				$scope.allDebits = data;
			})
		}
		initVals();
		$scope.addDebit = function() {
			console.log($scope);
			Summary.addDebit({username: $window.localStorage.getItem('pocketacct.username')}, 
				$scope.debitAmmount, $scope.debitTitle).then(initVals)
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