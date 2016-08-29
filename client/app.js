angular.module('pocketacct', ['ngRoute'])
	.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signup', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
  })
