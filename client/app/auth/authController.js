angular.module('pocketacct.auth' , [])
	.controller('AuthController', function($scope, $window, Users) {

		$scope.addUser = function() {
			Users.addUser({
				username: $scope.user.username,
				password: $scope.user.password
			}).then(function(err, data){
				//check err/data order
				console.log('data');
			});
			$scope.username = '';
			$scope.password = '';
		}

		$scope.login = function() {
			Users.login({
				username: $scope.user.username,
				password: $scope.user.password
			}).then(function(err, data){
				//check err/data order
				console.log('data');
			});
			$scope.username = '';
			$scope.password = '';
		}
	})