var app = angular.module('seinMod');

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/start.html'
    }).when('/q:num', {
      templateUrl: 'views/q.html',
      controller: 'quizController'
    }).when('/results', {
      templateUrl: 'views/results.html',
      controller: 'quizController'
    });
})
