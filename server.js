var express = require('express');
var edge = require('edge');
var app = express();

app.use(express.static('public'));
app.use('/bower_components', express.static('bower_components'));
app.use('/templates', express.static('templates'));

app.set('view','/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

var server = app.listen(3000);