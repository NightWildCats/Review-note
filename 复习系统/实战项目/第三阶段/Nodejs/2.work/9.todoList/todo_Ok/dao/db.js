
//引入包
var mongoose = require('mongoose');

//连接 服务器
mongoose.connect('mongodb://127.0.0.1:27017/todo');
//                                  http://ip:27017/test

//设置 出错处理，设置 打开连接报告连接成功
var connection = mongoose.connection;

connection.on('error', function (err) {
    if(err){
        console.error(err);
    }
});

// once 一次
connection.once('open', function (err) {
    if(err){
        console.error(err);
    }
    else{
        console.log('数据库连接-成功！');
    }
});

//数据模式
var userSchemaInfo =
{
    userName:String,
    password:String,
    email:String,
    avatar:{type:String, default: 'default_avatar_2.png'} //默认值 default_avatar_2.png
};

// Monster 用户 模式 数据的骨架
var UserSchema = new mongoose.Schema(userSchemaInfo);

// 一个数据模型 数据库中的一个 collection
var User = mongoose.model('user', UserSchema);  //构造函数


//用户信息
var wukongInfo = {
    userName: 'wukong',
    password: '123456',
    email: 'wukong@atuigui.com'
};

// document
// var user = new User(wukongInfo);
// user.save(function (err, doc) {
//     if(err){
//         console.error(err);
//     }
//     else {
//         console.log('写入成功');
//         console.log(doc);
//     }
// });

//集合里面找符合条件的对象
/*User.find({userName: 'wukong'}, {}, function (err, docs) {
    if(err){
        console.error(err);
    }
    else {
        console.log('查找成功');
        console.log(docs);
    }
});*/



//查找用户
function getUser(userName, callback) {
    //var result = null;
    User.findOne({userName: userName}, {}, function (err, doc) {
        if(err){
            //console.error(err);
            callback(err);
        }
        else {
            // console.log('查找成功');
            // console.log(doc);
            // result = doc;
            callback(null, doc);    //1.null, 2.obj
        }
    });
    //return result;
}
exports.getUser = getUser;

//添加用户
function addUser(userInfo, cb) {
    var userTemp = new User(userInfo);
    //存入数据库
    userTemp.save(function (err, doc) {
        if(err){
            cb(err);
        }else {
            cb(null, doc);
        }
    });
}
exports.addUser = addUser;



/////////////////////////    待办事宜    ///////////////////////////////////////



//数据模式
var itemSchemaInfo =
{
    userID: String,
    title: String,
    post_date: {type: Date},    //上传时间，
    finish_state: {type: Number, default: 1} //1.未完成  2.已经完成
};

// Monster 用户 模式 数据的骨架
var ItemSchema = new mongoose.Schema(itemSchemaInfo);

// 一个数据模型 数据库中的一个 collection
var Item = mongoose.model('item', ItemSchema);  //构造函数

//添加待办事宜
function addItem(options, callback){
    //输入
    var title = options.title;
    var userID = options.userID;
    var post_date = new Date();

    var item = new Item({
        title : title,
        userID : userID,
        post_date : post_date
    }); //内存里有数据

    //写入数据库
    item.save(function (err, doc) {
        if(err){
            callback(err);
        }else {
            callback(null, doc);
        }
    });
}

//根据用户名获取用户的 items
function getItemsByUserID(userID, callback){
    Item.find({userID: userID}, {}, function (err, docs) {
        if(err){
            callback(err);
        }else {
            callback(null, docs);
        }
    });
}

//通过id找到 item 设置为 完成状态
function setItemFinishState(itemID, stateNum, callback){
    Item.findById(itemID, function (err, doc) {
        if(err){
            callback(err);
        }else {
            doc.finish_state = stateNum; //设置完成状态
            doc.post_date = new Date();
            doc.save(function (err, doc) {
                if(err){
                    callback(err);
                }else {
                    callback(null, doc);
                }
            });
        }
    });
}

function deleteItem(itemId, callback) {
    Item.findById(itemId, function (err, doc) {
        if(err){
            callback(err);
        }else {
            //删除
            doc.remove(function (err, doc) {
                if(err){
                    callback(err);
                }else {
                    callback(null, doc);
                }
            });
        }
    });
}

// 通过 itemID 获得 item 信息
function getItemsByItemID(itemID, cb){
    Item.findById(itemID, function (err, doc) {
       if(err){
           cb(err);
       }else {
           cb(null, doc);
       }
    });
}

function updateItemTitle(itemID, title, cb){
    //操作数据库
    getItemsByItemID(itemID, function (err, doc) {
        if(err){
            cb(err);
        }else {
            //修改title 和 时间
            doc.title = title; //修改title
            doc.post_date = new Date();
            doc.save(function (err, doc) {
                if(err){
                    cb(err);
                }else {
                    cb(null, doc);
                }
            });
        }
    });
}


function uploadAvatar(userName, fileName, cb) {
    //获得用户信息
    getUser(userName, function (err, doc) {
        if(err){
            cb(err);
        }else {
            //更新头像信息
            doc.avatar = fileName;
            doc.save(function (err, doc) {
                if(err){
                    cb(err);
                }else {
                    cb(null, doc);
                }
            })
        }
    });
}

//添加item
module.exports.addItem = addItem;

//通过id 找到 item
module.exports.getItemsByUserID = getItemsByUserID;

//设置 item 为完成状态
module.exports.setItemFinishState = setItemFinishState;

//删除 item
module.exports.deleteItem = deleteItem;

// 通过 itemID 获得 item 信息
module.exports.getItemsByItemID = getItemsByItemID;


//修改 item 的 title
module.exports.updateItemTitle = updateItemTitle;

//修改头像信息
module.exports.uploadAvatar = uploadAvatar;


