var app = angular.module('seinMod');

app.factory('quizFactory', function($http) {
  var obj = {};
  var guessHolder = [];
  var dataHolder;
  obj.addGuess = function (guess) {
    guessHolder.push(guess);
    console.log(dataHolder);
    console.log(guessHolder);
    return guessHolder;
  };
  obj.promise = $http({
    method: 'GET',
    url: '/api/questions'
  }).then(function (res) {
    dataHolder = res.data;
    return res.data;
  }, function (err) {
    throw err;
  });
  return obj;
});
