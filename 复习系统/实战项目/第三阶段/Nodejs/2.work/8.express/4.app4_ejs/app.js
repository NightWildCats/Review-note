//引入包
var express = require('express');
var path = require('path');     //核心模块  node 亲儿子    http url fs
//文件路径的解析和拼串
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//引入自定义包  登录
var user = require('./routes/user.js');
//注册
var insert = require('./routes/insert.js');
//首页加载包
var indexOver = require('./routes/index.js');
//文件写入模块
// var log = require('./routes/logFile.js');

//生成实例
var app = express();

// 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // 设置模板

//使用下载的包
app.use(logger('dev'));         //使用 一个函数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//路由自定义User (去指定的路由模块下查找资源) --{用户登录验证模块}
app.use('/user', user);
//注册
app.use('/rinsert', insert);
//首页
app.use('/',indexOver);


//设置首页
// app.get('/',function (req,res,next) {
//   res.redirect('./index.html');
// });

// 404 兜底
//所有方法都匹配   *所有路径都匹配
// app.all('*', function (req, res, next) {
//   //通过 res。redirect 进行重定向  指定到 静态资源目录下的404 页面
//   res.redirect('over/index.html');
// });


//向外暴露
module.exports = app;
