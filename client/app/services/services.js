angular.module('pocketacct.services', [])
	.factory('Users', function($http) {
		var addUser = function(user) {
			return $http({
				method: 'POST',
				url: '/api/addUser',
				data: user
			})
		}

		var signIn = function(user) {
			$http({
				method: 'POST',
				url: '/api/login',
				data: user
			}).then()
		}
		return {
			addUser: addUser,
			getUser: getUser
		};
	})
	// .factory('Session', function($http) {
		
	// })