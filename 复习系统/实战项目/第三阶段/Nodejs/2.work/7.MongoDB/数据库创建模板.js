
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

//设置 存储的数据的数据类型 （Schema）

var parseSchema = new  mongoose.Schema({
  name: String,
  age: Number,
  gender: Number,
  address: String,
  uniqueSkill: String
});

//将创建的数据类型关联到表结构上（实体集合上）
/**
 * @xiyouInfo 表示需要创建的集合名（collection-表结构）
 * @parseSchema 表示将创建的数据类型绑定到具体的集合结构上
 */
var table = mongoose.model('xiyouInfo',parseSchema);

//通过创建的 ‘数据模型’ 中添加数据（model）

//创建一个对象
var xiaoIfon = {
  name: "肖雄雄",
  age: 24,
  gender: 1,
  address: "中国-湖北省-荆门",
  uniqueSkill: "神一般的存在，无所不能；还能上天"
};
/**
 * @xiaoIfon 表示要创建增加的对象
 * @ function 表示对添加的信息的回调（是否成功）
 */
// table.create(xiaoIfon,function (err,doc) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(doc);
//   }
// });

//通过实体的方式进行数据增加 （Entity）

var parseEntity = new table(xiaoIfon);

//数据保存
/**
 * @save() 该方法是保存添加的数据
 */
parseEntity.save(function (err,doc) {
  if (err) {
    console.error(err);
  } else {
    console.log(doc);
  }
});