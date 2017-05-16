var app = angular.module('seinMod');

app.factory('quizFactory', function($http) {
  var obj = {};
  var numCorrect = 0;
  var dataHolder;
  var answered = [];
  var answers = [];
  obj.clear = function () {
    numCorrect = 0;
    answered = [];
    answers = [];
  };
  obj.addGuess = function (guess, num) {
    var prevWrong = false;
    if ( (answered.indexOf(num) < 0) && (answers.indexOf(guess) < 0) ) {
      answered.push(num);
      answers.push(guess);
      if (guess === dataHolder[num].answers[dataHolder[num].correctAnswer]) {
        numCorrect++;
      }
    } else if (answers.indexOf(guess) < 0) {
      dataHolder[num].answers.forEach(function(item) {
        if (answers.indexOf(item) >= 0 && item !== dataHolder[num].answers[dataHolder[num].correctAnswer]) {
          prevWrong = true;
          answers.splice(answers.indexOf(item), 1);
        } else if (answers.indexOf(item) >= 0) {
          answers.splice(answers.indexOf(item), 1);
        }
      });
      answers.push(guess);
      if (guess === dataHolder[num].answers[dataHolder[num].correctAnswer]) {
        numCorrect++;
      } else if (guess !== dataHolder[num].answers[dataHolder[num].correctAnswer] && !prevWrong) {
        numCorrect--;
      }
    }
  };
  obj.getGuess = function () {
    return numCorrect;
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
