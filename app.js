const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');
const errorHandlers = require('./handlers/errorHandlers');
//Added these requirements to handle CORS request
const _ = require('lodash');
const cors = require('cors');

const index = require('./routes/index');

const app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
//This was put here to handle our Cross-Origin Request
app.use(cors());

app.use('/', index);

app.use(errorHandlers.notFound);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  const err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

//if(app.get('env') === 'development'){
//  app.use(errorHandlers.developmentErrors);
//}

//app.use(errorHandlers.productionErrors);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
