angular.module('rehjeks', [
  'rehjeks.utils',
  'rehjeks.login',
  'rehjeks.signup',
  //'rehjeks.challenges',
  //'rehjeks.solve',
  'ui.router',
  'ngRoute'
])
.config(function($routeProvider /*, $httpProvider */){
  $routeProvider
    .when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginController'
    })
    .when('/signup', {
      templateUrl: 'signup/signup.html',
      controller: 'SignupController'
    })
    .when('/', {
      templateUrl: 'signup/signup.html',
      controller: 'SignupController'
    });
});
