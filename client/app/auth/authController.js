angular.module('pocketacct.auth' , [])
	.controller('AuthController', function($scope, Users) {

		$scope.submit = function() {
			console.log('clicked')
			Users.addUser({
				username: $scope.username,
				password: $scope.password
			}).then(function(err, data){
				//check err/data order
				console.log('data');
			});
			$scope.username = '';
			$scope.password = '';
		}
	})