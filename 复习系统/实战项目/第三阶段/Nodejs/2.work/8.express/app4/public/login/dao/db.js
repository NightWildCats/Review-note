
//引入包
var mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/user');

//检查连接
var connection = mongoose.connection;
//失败
connection.on('error',function (err) {
  console.error(err);
});
//成功
connection.on('open',function () {
  console.log('数据库连接成功');
});

//建立数据结构
var tableSchema = new mongoose.Schema({
  userName :String,
  password: Number
});

//创建表
var tableModel = mongoose.model('user',tableSchema);

//进行数据查询
function selectUser(userName,call) {
  tableModel.findOne({userName: userName},function (err,doc) {
    if (err) {
      call(err);
    }else {
      call(null,doc);
    }
  });
}

//进行数据增加
function insertUser(userName,password,call) {
  // var HR = {
  //   userName:userName,
  //   password:password
  // };
  // tableModel.create(HR,function (err) {
  //   call(err);
  // });
  var user = new tableModel({
    name: userName,
    password: password
  });
  user.save(function (err) {  //错误处理
    call(err);
  });
}

//向外进行暴露
exports.selectUser = selectUser;
exports.insertUser = insertUser;
