var express = require('express');
var app = express();
var questions = require('./questions'); 

app.use(express.static(__dirname + '/public'));

app.get('/api/questions', function(req, res) {
 console.log('get requested');
 res.send(questions);
});

var server = app.listen(8080, function () {
 var port = server.address().port;
 console.log("Server listening on port " + port);
});
