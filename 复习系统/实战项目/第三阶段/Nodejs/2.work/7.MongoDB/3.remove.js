


// 引入 mongoose 模块
var mongoose = require('mongoose');
//发起连接
mongoose.connect('mongodb://localhost:27017/xiyou');

var connection = mongoose.connection;
connection.on('error', function(err){
    console.error(err);
});
connection.on('open', function() {
    // we're connected!
    console.log('we are connected!');
});

/*
 需求
    1. 删除数据
        1. model 层删除
        2. entity 删除

 */
var MonsterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: {type: Number, default: 1},     //   1.nan   2.nv
    address: String,
    uniqueSkill: String
});


//module
var MonsterModel = mongoose.model('monster', MonsterSchema);

var query = {
    name: 'xiao'
};
MonsterModel.remove(query, function (err, doc) {
    if(err){
        console.error(err);
    }else {
        console.log('removed');
        console.log(doc);
    }
});
















