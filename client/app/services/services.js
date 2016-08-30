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
			}).then(function(data, err) {
				return data.data
			})
		}

		var getDebits = function(user) {
			return $http({
				method: 'POST',
				url: 'api/getdebits',
				data: user
			}).then(function(data, err) {
				return data.data
			})
		}

		var addCredit = function(user, ammount) {
			return $http({
				method: 'POST',
				url: 'api/addcredit',
				data: {username: user.username, ammount: ammount}
			}).then(function(data, err) {
			})
		}

		var addDebit = function(user, ammount) {
			return $http({
				method: 'POST',
				url: 'api/adddebit',
				data: {username: user.username, ammount: ammount}
			}).then(function(data, err) {
			})
		}

		var totalCredits = function(user) {
			return getCredits(user).then(function(data, err) {
				var toRet = 0;
				for (var i = 0; i < data.length; i++) {
					toRet += data[i].ammount;
				}
				return toRet;
			})
		}

		var totalDebits = function(user) {
			return getDebits(user).then(function(data, err) {
				var toRet = 0;
				for (var i = 0; i < data.length; i++) {
					toRet += data[i].ammount;
				}
				return toRet;
			})
		}

		return {
				// balance: balance,
				totalCredits: totalCredits,
				totalDebits: totalDebits,
				getCredits: getCredits,
				getDebits: getDebits,
				addCredit: addCredit,
				addDebit
			}
	})

  //taken from sprint as a quick fix for login feature