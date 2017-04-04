
// 引入 mongoose 模块
var mongoose = require('mongoose');
//发起连接
mongoose.connect('mongodb://localhost:27017/user');

var connection = mongoose.connection;
connection.on('error', function(err){
    console.error(err);
});
connection.on('open', function() {
    // we're connected!
    console.log('we are connected!');
});


var MonsterSchema = new mongoose.Schema({
    name: String,
    age: {type: Number, default: 1},
    gender: {type: Number, default: 1},     //   1.nan   2.nv
    password: String
});


//module
var UserModel = mongoose.model('user', MonsterSchema);

// exports.UserModel = UserModel;




function findUser(userName, handler){
    UserModel.findOne({name: userName}, function (err, doc) {   //回调函数  一定时间之后发生
        if(err){
            handler(err);
            // res.end('网络错误');
        }else {
            // docObj = doc;
            handler(null, doc);
        }
    });
}


exports.findUser = findUser;

