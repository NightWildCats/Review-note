

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Info');
var connection = mongoose.connection;
connection.on('error',function (err) {
  //错误信息处理
});
connection.on('open',function () {
  //成功信息处理
});

var parseSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: {type:Number, default:1},  //设置默认值
  address: String,
  uniqueSkill: String
});

var tableModel = mongoose.model('EmpInfo',parseSchema);

var HR = {
  name: "HJ",
  age: 22,
  gender: 2,
  address: "湖北",
  uniqueSkill: "美貌如花"
} ;

// tableModel.create(HR,function (err,doc) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(doc);
//   }
// });

var tableEntity = new tableModel(HR);
tableEntity.save(function (err,doc) {
  if (err) {
    console.error(err);
  } else {
    console.log(doc);
  }
});
