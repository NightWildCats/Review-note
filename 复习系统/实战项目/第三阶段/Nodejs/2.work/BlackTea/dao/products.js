

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
  id: String,
  name: String,
  desc: String,
  image: String

});
var NewsModel=mongoose.model('products',NewsSchema);
//增加到数据库里

var news=new NewsModel({
  id: 1,
  name: "夏日水果茶",
  desc: "这杯果香四溢的水果茶，苹果、菠萝、西瓜、青桔、柠檬。来上一杯，让自己的精神能够在茶香中放松。",
  image: "Assets/upload/pic2.jpg"
});
var newsEntity = new NewsModel(news);

newsEntity.save(function (err,doc) {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});
