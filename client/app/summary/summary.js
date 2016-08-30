angular.module('pocketacct.summary', [])
	.controller('SummaryController', function($scope, $window, $location, Users, Summary) {
		$scope.hello = 'Hello Summary World!';

		Summary.totalDebits({
				username: $window.localStorage.getItem('pocketacct.username')
			}).then(function(data, err) {
				$scope.totalDebits = '$' + data;
			});

		Summary.totalCredits({
				username: $window.localStorage.getItem('pocketacct.username')
			}).then(function(data, err) {
				$scope.totalCredits = '$' + data;
			});

		$scope.balance = '$0';
		
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
				console.log('summary.js:', data);
				$scope.credits = data;
			})
		}

		$scope.addCredit = function() {
			Summary.addCredit(
				{username: $window.localStorage.getItem('pocketacct.username')}, 
				$scope.creditAmmount)
		}

		$scope.addDebit = function() {
			Summary.addDebit(
				{username: $window.localStorage.getItem('pocketacct.username')}, 
				$scope.debitAmmount)
		}

		$scope.logout = function() {
			Users.logout()
			$location.path('/login');
		};
		$scope.isAuth = Users.isAuth();
	})