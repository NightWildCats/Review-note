


//引入mongoose模块
var mongoose=require('mongoose');
//发起连接
mongoose.connect('mongodb://localhost:27017/blackTea');
//获取连接
var connection=mongoose.connection;
//处理
connection.on('error',function (err) {
  console.error(err);
}).on('open',function(){
  console.log('we are connectting');
});
var  NewsSchema=new  mongoose.Schema({
  "contact": String,
  "phone": String,
  "email": String,
  "content": String,
  "id": String

});
var NewsModel=mongoose.model('messages',NewsSchema);
//增加到数据库里

var news=new NewsModel({
  "contact": "aaa",
  "phone": "12341234",
  "email": "aa@qq.com",
  "content": "dsfjsdlf",
  "id": 1
});
var newsEntity = new NewsModel(news);

newsEntity.save(function (err,doc) {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});