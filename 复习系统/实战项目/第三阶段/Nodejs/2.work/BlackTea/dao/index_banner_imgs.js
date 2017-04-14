
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
  path: String

});
var NewsModel=mongoose.model('index_banner_img',NewsSchema);
//增加到数据库里

    var news=new NewsModel({
      id: 1,
      path: "Assets/upload/banner.jpg"
    });
var newsEntity = new NewsModel(news);

    newsEntity.save(function (err,doc) {
        if (err) {
            console.log(err);
        } else {
            console.log(doc);
        }
    });