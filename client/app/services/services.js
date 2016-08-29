angular.module('pocketacct.services', [])
	.factory('Users', function($http) {
		var addUser = function(user) {
			$http({
				method: POST,
				url: '/api/users',
				data: user
			})
		}

		var getUser = function(username) {
			$http({
				method: GET,
				url: '/api/users'
			}).then()
		}
		return {
			addUser: addUser,
			getUser: getUser
		};
	})