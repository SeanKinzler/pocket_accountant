angular.module('pocketacct.auth' , [])
	.controller('AuthController', function($scope, Users) {

		$scope.submit = function() {
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
	})