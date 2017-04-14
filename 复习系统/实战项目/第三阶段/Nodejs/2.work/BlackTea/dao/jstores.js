

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
  "id": String,
  "name": String,
  "time": String,
  "address": String,
  "phone": String

});
var NewsModel=mongoose.model('jstores',NewsSchema);
//增加到数据库里

var news=new NewsModel({
  "id": 1,
  "name": "燕南店",
  "time": "08:00-00:00",
  "address": "广东省深圳市福田区燕南路88号A-9号铺",
  "phone": "0755-88391665"
});
var newsEntity = new NewsModel(news);

newsEntity.save(function (err,doc) {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});
