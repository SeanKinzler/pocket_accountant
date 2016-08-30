angular.module('pocketacct.summary', [])
	.controller('SummaryController', function($scope, $window, $location, Users, Summary) {
		$scope.hello = 'Hello Summary World!';
		var allCredits = Summary.getCredits(
			{username: $window.localStorage.getItem('pocketacct.username')}
			);
		// $scope.totalCredits = Summary.totalCredits
		// $scope.totalDebits = Summary.totalDebits
		// $scope.balance = Summary.balance
		$scope.addCredit = function() {
			Summary.addCredit(
				$window.localStorage.getItem('pocketacct.username'), 
				$scope.creditAmmount)
		}

		$scope.logout = function() {
			Users.logout()
			$location.path('/login');
		};
		$scope.isAuth = Users.isAuth();
	})