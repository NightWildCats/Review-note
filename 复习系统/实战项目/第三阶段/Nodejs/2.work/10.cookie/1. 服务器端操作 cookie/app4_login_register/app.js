//引入包
var express = require('express');
var path = require('path');     //核心模块  node 亲儿子    http url fs
//文件路径的解析和拼串
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//引入路由模块
var user = require('./routes/user.js');

//生成实例
var app = express();

// 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //几十种   jade    ejs

//使用下载的包
app.use(logger('dev'));         //使用 一个函数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//设置静态资源服务
app.use(express.static(path.join(__dirname, 'public')));


//app 防止过于庞大
app.use('/user', user);

//cookie的练习
app.use('/cookie',function (req,res,next) {
    //使用 res.cookie() 设置历史记录  以键值对的方式存在 同时还可以设置设置 cookie存在的时间
    //在默认情况下 cookie的时间时 session 时间
    //通过在第三个参数后面加入 一个对象的expires属性之后，设置其在什么时间之后失效（绝对时间）
    var myTime = new Date();
    //通过 setTime 设置在多久之后小时
    myTime.setTime(myTime.getTime()+ 1000*60);
    res.cookie('userName','xiongdada',{expires:myTime});

    //清除 cookie
    //在清除 cookie中 需要给 clearCookie方法提供查询的 key，然后定位删除相关的 cookie
    // res.clearCookie('userName');

    res.send('存储cookie成功！');
});


// 404 兜底
//所有方法都匹配   *所有路径都匹配
app.all('*', function (req, res) {
    res.end('404, not found');
});


//向外暴露
module.exports = app;
