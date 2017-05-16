var app = angular.module('seinMod');

app.controller('quizController', function($scope, $routeParams, quizFactory) {
  quizFactory.promise.then(function(res) {
    $scope.questions = res;
    if ($scope.questions.length - 1 > $routeParams.num) {
      $scope.num = parseInt($routeParams.num);
      $scope.path = 'q' + parseInt($scope.num + 1);
      $scope.button = "Submit Answer";
    } else {
      $scope.num = parseInt($routeParams.num);
      $scope.path = 'results';
      $scope.button = "Complete Quiz";
    }
  });
  $scope.results = quizFactory.getGuess();
  $scope.submit = function () {
    quizFactory.addGuess($scope.guess, $routeParams.num);
  };
  $scope.clear = function () {
    quizFactory.clear();
  }
});
