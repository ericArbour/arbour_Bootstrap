var express = require('express');
var app = express();
var path = require('path');
var questions = require('./questions'); 

app.use(express.static(path.join(__dirname, '/public')));

app.get('/api/questions', function(req, res) {
 console.log('get requested');
 res.send(questions);
});

var server = app.listen(8080, function () {
 var port = server.address().port;
 console.log("Server listening on port " + port);
});
