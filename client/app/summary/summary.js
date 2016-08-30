angular.module('pocketacct.summary', [])
	.controller('SummaryController', function($scope, $window, 
		$location, Users, Summary) {

		var initVals = function() {
			$scope.debitAmmount = '';
			$scope.creditAmmount = '';

			Summary.totalCredits({
				username: $window.localStorage.getItem('pocketacct.username')
			})
			.then(function(data, err) {
				$scope.totalCredits = data;
				Summary.totalDebits({
					username: $window.localStorage.getItem('pocketacct.username')
				})
				.then(function(data, err) {
					$scope.totalDebits = data;
				})
				.then(function(data, err) {
					$scope.balance = $scope.totalCredits - $scope.totalDebits;
				})
			})
		};

		$scope.getCredits = function () {
			Summary.getCredits({
				username: $window.localStorage.getItem('pocketacct.username')
			}).then(function(data, err) {
				$scope.credits = data;
			})
		}

		$scope.getDebits = function () {
			Summary.getDebits({
				username: $window.localStorage.getItem('pocketacct.username')
			}).then(function(data, err) {
				$scope.credits = data;
			})
		}

		$scope.addCredit = function() {
			Summary.addCredit(
				{username: $window.localStorage.getItem('pocketacct.username')}, 
				$scope.creditAmmount).then(initVals())
		}

		$scope.addDebit = function() {
			Summary.addDebit(
				{username: $window.localStorage.getItem('pocketacct.username')}, 
				$scope.debitAmmount).then(initVals)
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

		initVals();
		$scope.isAuth = Users.isAuth();
	})