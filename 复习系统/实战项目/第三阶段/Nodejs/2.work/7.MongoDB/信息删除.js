
//引入mongoose包

var mongoose = require('mongoose');

//发起连接
/**
 * 通过使用 获得的mongoose对象的 connect 来发起一个连接
 * @mongodb 表示使用mongoDB的协议
 * @//  在 ‘//’前面是 登录名（user）和密码（pwd）
 * @127.0.0.1：20017 服务器地址和开放的端口
 * @emp 指需要连接的数据库
 */
mongoose.connect('mongodb://127.0.0.1:27017/Info');

//获取连接
var connection = mongoose.connection;

//添加事件处理
//失败处理
connection.on('error',function (err) {
  console.error(err);
});
//成功处理
connection.on('open',function (doc) {
  console.log(doc); // 没有返回值
  console.log('连接成功！');
});
//数据类型
var parseSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: {type:Number, default:1},  //设置默认值
  address: String,
  uniqueSkill: String
});
//数据类型绑定指定的集合
var tableModel = mongoose.model('EmpInfo',parseSchema);


//查询字段
var select = {
  name:"SB-H"
};

tableModel.remove(select,function (err,doc) {
  if(err){
    console.error(err);
  }else {
    console.log('updated');
    console.log(doc);
  }
});