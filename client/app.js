angular.module('pocketacct', [
	'pocketacct.auth', 
	'pocketacct.services',
	'pocketacct.summary',
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
    .when('/summary', {
    	templateUrl: 'app/summary/summary.html',
      controller: 'SummaryController',
      authenticate: true
    })
    .otherwise({
      redirectTo: '/summary'
    });
  })
  .run(function ($rootScope, $location, Users) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Users.isAuth()) {
      $location.path('/login');
    }
  })
});
