

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
    1. 查询

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
/*

MonsterModel.find({}, function (err, docs) { //错误优先     docs数组类型
    if(err){
        console.error(err)
    }else {
        console.log(docs);
    }
});
*/
/*

MonsterModel.find({name: 'eagle'}, {_id:0, name: 1, age: 1}, function (err, docs) {
    if(err){
        console.error(err)
    }else {
        console.log(docs);
    }
});
*/
/*

MonsterModel.findOne({name: 'yellow'}, {_id:1, name: 1, age: 1}, function (err, doc) {
    if(err){
        console.error(err)
    }else {
        console.log(doc);
    }
});
*/
/*

MonsterModel.findById({_id:'58de00b0c8b08931c8a178cc'}, {_id:1, name: 1, age: 1}, function (err, doc) {
    if(err){
        console.error(err)
    }else {
        console.log(doc);
    }
});
*/

MonsterModel.findById('58de00b0c8b08931c8a178c1', {_id:1, name: 1, age: 1}, function (err, doc) {
    if(err){
        console.error(err)
    }else {
        console.log(doc);   //null
    }
});













































