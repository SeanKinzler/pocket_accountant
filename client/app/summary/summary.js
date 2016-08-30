angular.module('pocketacct.summary', [])
	.controller('SummaryController', function($scope, $window, $location, Users, Summary) {
		$scope.hello = 'Hello Summary World!';

		$scope.totalDebits = '$0';
		$scope.totalCredits = '$0';
		$scope.balance = '$0';
		
		// var allCredits = Summary.getCredits(
		// 	{username: $window.localStorage.getItem('pocketacct.username')}
		// 	);
		// $scope.totalCredits = Summary.totalCredits
		// $scope.totalDebits = Summary.totalDebits
		// $scope.balance = Summary.balance
		$scope.addCredit = function() {
			Summary.addCredit(
				{username: $window.localStorage.getItem('pocketacct.username')}, 
				$scope.creditAmmount)
		}

		$scope.logout = function() {
			Users.logout()
			$location.path('/login');
		};
		$scope.isAuth = Users.isAuth();
	})