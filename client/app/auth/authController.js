angular.module('pocketacct.auth' , [])
	.controller('AuthController', function($scope, $window, Users) {

		$scope.addUser = function() {
			Users.addUser({
				username: $scope.user.username,
				password: $scope.user.password
			}).then(function(data, err){
				//check err/data order
			});
			$scope.username = '';
			$scope.password = '';
		}

		$scope.login = function() {
			Users.login({
				username: $scope.user.username,
				password: $scope.user.password
			}).then(function(data, err){
				//check err/data order
			});
			$scope.username = '';
			$scope.password = '';
		}
	})