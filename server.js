
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var slides = require('./routes/slides');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/lib', express.static(__dirname + '/bower_components'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/edit/:id', routes.index);
app.get('/slide/:id', routes.index);

app.get('/templates/slide.html', routes.slide);
app.get('/templates/edit.html', routes.edit);

app.get('/api/slides', slides.all);
app.get('/api/slides/:id', slides.get);
app.post('/api/slides/:id', slides.save);

var dbURI = process.env.MONGOHQ_URL || 'mongodb://localhost/angular-talk'
mongoose.connect(dbURI);
mongoose.connection.once('open', function() {
  console.log('Connected to database');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
