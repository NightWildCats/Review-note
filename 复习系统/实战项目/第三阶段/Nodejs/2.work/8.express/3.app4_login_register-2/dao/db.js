
// 引入 mongoose 模块
var mongoose = require('mongoose');
//发起连接
mongoose.connect('mongodb://localhost:27017/user');
//事件处理
var connection = mongoose.connection;
connection.on('error', function(err){
    console.error(err);
});
connection.on('open', function() {
    // we're connected!
    console.log('we are connected!');
});

//表头
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

function addUser(userName, password, cb) {
    var user = new UserModel({
        name: userName,
        password: password
    });
    user.save(function (err) {  //错误处理
        cb && cb(err);  //先检查 cb 是否存在
    });
}
exports.addUser = addUser;

addUser('wukong', '123456');