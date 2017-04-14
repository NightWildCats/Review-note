

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
  "title": String,
  "desc": String,
  "address": String,
  "time": String

});
var NewsModel=mongoose.model('news',NewsSchema);
//增加到数据库里

var news=new NewsModel({
  "id": 2,
  "title": "惠活黑茶7周年加盟优动1",
  "desc": "黑茶7周年加盟代理优惠活动从7月20日正式启动，针对部分区域和城市，我们现推出零加盟费的方式和您一起成长，共同发展，详情请致电13609623453",
  "address": "广东省深圳市福田区燕南路88号A-9号铺",
  "time": "2016-07-14"
});
var newsEntity = new NewsModel(news);

newsEntity.save(function (err,doc) {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});

