angular.module('pocketacct', ['ngRoute'])
	.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/index', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })