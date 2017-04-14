var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = require('./routes/router.js');
var expressSession = require('express-session');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //ejs

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());  //函数，三个参数，req， res， next
app.use(expressSession({
    secret: 'guigu',
    resave: true,
    saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, 'public')));

//创建路由
app.use('/', router);




module.exports = app;
