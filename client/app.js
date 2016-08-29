angular.module('pocketacct', [
	'pocketacct.auth', 
	'pocketacct.services',
	'ngRoute'
	])
	.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
  })
