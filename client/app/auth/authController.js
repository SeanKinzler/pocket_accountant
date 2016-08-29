angular.module('pocketacct.auth' , [])
	.controller('AuthController', function($scope, Users) {

		var submit = function() {
			Users.addUser({
				username: $scope.username,
				password: $scope.password
			});
		}
	})