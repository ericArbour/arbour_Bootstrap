var app = angular.module('seinMod');

app.controller('quizController', function($scope, $routeParams, quizFactory) {
  quizFactory.promise.then(function(res) {
    $scope.questions = res;
    if ($scope.questions.length - 1 > $routeParams.num) {
      $scope.num = parseInt($routeParams.num);
      $scope.path = 'q' + parseInt($scope.num + 1);
    } else {
      $scope.num = parseInt($routeParams.num);
      $scope.path = 'results';
    }
  });
  $scope.tested = function () {
    $scope.test = quizFactory.addGuess($scope.guess);
    console.log($scope.test);
  };
  // function () {
  //   if ($scope.questions.length - 1 > $routeParams.num) {
  //     console.log($scope.guess);
  //     $scope.results.push($scope.guess);
  //     console.log($scope.results);
  //   } else {
  //     console.log($scope.results);
  //   }
  // };
});
