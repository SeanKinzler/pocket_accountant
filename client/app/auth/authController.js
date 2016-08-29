angular.module('pocketacct.auth' , [])
	.controller('AuthController', function($scope, Users) {
		var submit = function() {
			Users.addUser($scope.username, $scope.password);
		}
	})