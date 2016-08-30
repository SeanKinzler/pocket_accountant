angular.module('pocketacct.auth' , [])
	.controller('AuthController', function($scope, $location, $window, Users) {

		$scope.addUser = function() {
			Users.addUser({
				username: $scope.user.username,
				password: $scope.user.password
			}).then(function(data, err){
				//check err/data order
			});
			$scope.username = '';
			$scope.password = '';
			$location.path('/summary');
		}

		$scope.login = function() {
			Users.login({
				username: $scope.user.username,
				password: $scope.user.password
			}).then(function(data, err){
				//check err/data order
				$location.path('/summary');
			});
			$scope.username = '';
			$scope.password = '';
		}
	})