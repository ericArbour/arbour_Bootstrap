var app = angular.module('seinMod');

app.factory('quizFactory', function($http) {
  var obj = {};
  obj.promise = $http({
    method: 'GET',
    url: '/api/questions'
  }).then(function (res) {
    return res.data;
  }, function (err) {
    throw err;
  });
  return obj;
});
