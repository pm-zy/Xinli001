
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
//var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
//app.use(bodyParser.json());
var article = require('./routes/article');
var express  = require('express');
var morgan = require('morgan'); //logger模块的这个新名字真是神奇
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());

var app = express();
//app.use(bodyParser.urlencoded());

// all environments
app.set('port', process.env.PORT || 3002);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/article',article);

var uniResult = {
  Result: false,
  Detail: null
};

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
  uniResult.Detail = 'NOT_FOUND';
  res.end(JSON.stringify(uniResult));
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  uniResult.Detail = err.message;
  res.end(JSON.stringify(uniResult));
});



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
