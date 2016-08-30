angular.module('pocketacct.services', [])
	.factory('Users', function($http, $window) {
		var addUser = function(user) {
			return $http({
				method: 'POST',
				url: '/api/addUser',
				data: user
			}).then(function() {
				$window.localStorage.setItem('pocketacct.username', user.username);
			})
		}

		var login = function(user) {
			return $http({
				method: 'POST',
				url: '/api/login',
				data: user
			}).then(function(data, err) {
				console.log('data saved to session: ', data.data);
				$window.localStorage.setItem('pocketacct.username', data.data);
			})
		}

		var logout = function(user) {
			$window.localStorage.removeItem('pocketacct.username');
		}

		var isAuth = function() {
			return 	!!$window.localStorage.getItem('pocketacct.username');
		}

		return {
			addUser: addUser,
			login: login,
			isAuth: isAuth,
			logout: logout
		};
	})
	.factory('Summary', function($http, $window){
		var getCredits = function(user) {
			return $http({
				method: 'POST',
				url: 'api/getcredits',
				data: user
			})
		}

		var getDebits = function() {
			return $http({
				method: 'GET',
				url: 'api/debits'
			})
		}

		var addCredit = function(user, ammount) {
			return $http({
				method: 'POST',
				url: 'api/addcredit',
				data: {username: user.username, ammount: ammount}
			}).then(function(data, err) {
				console.log(data)
			})
		}

		return {
				// balance: balance,
				// totalCredits: totalCredits,
				// totalDebits: totalDebits,
				getCredits: getCredits,
				getDebits: getDebits,
				addCredit: addCredit
			}

		// return getCredits().then(getDebits).then(function(err, data) {

			// return {
			// 	balance: balance,
			// 	totalCredits: totalCredits,
			// 	totalDebits: totalDebits,
			// 	getCredits: getCredits,
			// 	getDebits: getDebits
			// }
		// })
	})

  //taken from sprint as a quick fix for login feature