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
				$window.localStorage.setItem('pocketacct.username', data.data)
			})
		}
		return {
			addUser: addUser,
			login: login
		};

		var isAuth = function() {
			return !!$window.localStorage.getItem('pocketacct.username');
		}
	})
	.run(function ($rootScope, $location, Users) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/login');
    }
  })
});

  //taken from sprint as a quick fix for login feature