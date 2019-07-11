// Build request/response pipline by assembling middleware

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var lessMiddleware = require('less-middleware');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var helmet = require('helmet');

// const { check, validationResult } = require('express-validator');

// Route modules
var indexRouter = require('./routes/index');
var infoRouter = require('./routes/info');

// Build pipeline
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// security middleware
app.use(helmet());

// request/response logging
app.use(morgan('dev'));

// Form input
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// LESS to CSS
app.use(lessMiddleware(path.join(__dirname, 'public')));

// Static Content
app.use(express.static(path.join(__dirname, 'public')));

// Application Routes
app.use('/', indexRouter);
app.use('/info', infoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler (500)
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;