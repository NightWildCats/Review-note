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
        1. 创建 schema    记录妖怪的信息
            name age gender  address uniqueSkill
        2. 创建 model
            把数据存入数据库
        3. 创建 entity
            new 黄眉怪 存入
        4. 创建 entity
            new 金翅大鹏雕 存入
                1. 默认数据类型
                2. 数据类型隐士转化

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

//黄眉怪
var yellow = {
    name: 'yellow',
    age: 4000,
    gender: 1,
    address: 'xiaoXiTian',
    uniqueSkill: 'bag'
};
MonsterModel.create(yellow, function (err, doc) {
    if(err){
        console.error(err);
    }else {
        console.log(doc);   //entity
    }
});
*/

/*

//创建实体
var eagle = {
    name: 'eagle2',
    age: 6000,
    address: 'shiTuoLing',
    uniqueSkill: 'fei'
};
var eagleEntity = new MonsterModel(eagle);
console.log(eagleEntity);
eagleEntity.save(function (err, doc) {
    if(err){
        console.error(err);
    }else {
        console.log(doc);   //entity
    }
});     //保存    把内存中的对象保存到数据库中

*/

//创建实体
var xiao = {
    name: 'xiao2',
    age: '1',   //字符串
    address: 'shiTuoLing',
    uniqueSkill: ''
};
var xiaoEntity = new MonsterModel(xiao);
console.log(xiaoEntity);
xiaoEntity.save(function (err, doc) {
    if(err){
        console.error(err);
    }else {
        console.log(doc);   //entity
    }
});     //保存    把内存中的对象保存到数据库中













