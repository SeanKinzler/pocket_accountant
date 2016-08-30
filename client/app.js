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
    .when('/login', {
    	templateUrl: 'app/auth/login.html',
      controller: 'AuthController'
    })
    .when('/viewBalance', {
    	templateUrl: 'app/auth/login.html',
      controller: 'AuthController'
    })
  })
