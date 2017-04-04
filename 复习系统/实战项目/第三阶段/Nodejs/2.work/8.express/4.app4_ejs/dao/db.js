// 引入 mongoose 模块
var mongoose = require('mongoose');
var fs = require('fs');
var file = require('../routes/logFile.js');
//发起连接 （设置数据库协议 服务器地址，端口和数据库）
mongoose.connect('mongodb://127.0.0.1:27017/xiaoxiong');
//事件处理（连接成功和失败）
var connection = mongoose.connection;
connection.on('error', function (err) {
  var Prompt = '数据库连接失败-错误日志：' + err ;
  file.wirtFile('../datalog/dbOver.txt',Prompt);
  res.redirect('over/index.html');
});
connection.on('open', function () {
  // 数据库连接成功
  // console.log('数据库连接成功！');
  var Prompt = '数据库连接-成功';
  file.wirtFile('../datalog/dbOK.txt',Prompt);
});

//表头
var MonsterSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String
});


//module 模型
var UserModel = mongoose.model('xiao', MonsterSchema);

function findUser(userName, handler) {
  UserModel.findOne({name: userName}, function (err, doc) {   //回调函数  一定时间之后发生
    if (err) {
      handler(err);
      // res.end('网络错误');
    } else {
      // docObj = doc;
      handler && handler(null, doc);
    }
  });
}


function addUser(userName, password, email, cb) {
  var user = new UserModel({
    name: userName,
    password: password,
    email: email
  });
  user.save(function (err) {  //错误处理
    cb && cb(err);  //先检查 cb 是否存在
  });
}

//向外暴露
//数据库查询方法
exports.findUser = findUser;
//数据库添加方法
exports.addUser = addUser;

// if (!findUser('wukong')){
//   console.log('已经存在悟空了');
// }

// addUser('wukong', '123456','123@qq.com');