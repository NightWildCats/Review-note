// 引入 mongoose 模块
var mongoose = require('mongoose');

//发起连接
mongoose.connect('mongodb://127.0.0.1:27017/emp');

//获得连接
var connection = mongoose.connection;

//添加事件处理
//当出错的时候 on error
connection.on('error', function (err) {
    console.error(err);
});
//当打开的时候 on open
connection.on('open', function () {
    console.log('连接成功');
});

//



















