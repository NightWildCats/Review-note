//引入包
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//引入自定义包
var user = require('./routes/user.js');


var app = express();

// view engine setup 视图引擎设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//设置路由路径
app.use(express.static(path.join(__dirname, 'public')));



//定义 user 模块的路由
app.use('/user',user);




//自定义路由
app.all('*',function (req,res) {
  res.writeHead(200,'OK',{
    'Content-Type': "text/html;charset=utf-8"
  });
  res.end('看我“404” 我知道你看着404 就不爽了，但是我很开心！！！');
  // console.log(1);
});



//暴露
module.exports = app;
