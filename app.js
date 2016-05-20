
var express = require('express');
var path = require('path');
//var favicon = require('static-favicon');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');

var article=require('./routes/article');

var app = express();

//app.use(bodyParser.json());
//app.use(bodyParser);
//app.use(cookieParser());
app.use('/v1/article', article);

var uniResult = {
  status: false,
  info: "",
  data:{}
};
/// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log(req.url);
  uniResult.info = 'NOT_FOUND';
  uniResult.status = 404;
  uniResult.data = {};
  res.end(JSON.stringify(uniResult));
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    uniResult.info = 'err';
    uniResult.status =err.statusCode;
    uniResult.data = {};
    res.end(JSON.stringify(uniResult));
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  uniResult.info = err.message;
  uniResult.status = err.statusCode;
  uniResult.data = {};
  res.end(JSON.stringify(uniResult));
});

module.exports = app;
