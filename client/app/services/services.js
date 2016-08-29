angular.module('pocketacct.services', [])
	.factory('Users', function($http, $cookieStore) {
		var addUser = function(user) {
			return $http({
				method: 'POST',
				url: '/api/addUser',
				data: user
			})
			$cookeStore.push('username', user.username);
		}

		var signIn = function(user) {
			$http({
				method: 'POST',
				url: '/api/login',
				data: user
			}).then(function(err, data) {
				$cookieStore.put('username', user.username)
			})
		}
		return {
			addUser: addUser,
			signIn: signIn
		};
	})
	.factory('currentUser', function($cookieStore) {
		var login
	})