
// 引入 mongoose 模块
var mongoose = require('mongoose');
//发起连接
mongoose.connect('mongodb://localhost:27017/todo'); //todo数据库的名字

var connection = mongoose.connection;
connection.on('error', function(err){
    console.error(err);
});
connection.on('open', function() {
    // we're connected!
    console.log('we are connected!');
});


//1. schema     2. model    3. entity
var UserSchema = new mongoose.Schema({
    userName:String,
    password:String,
    email:String
});

var UserModel = mongoose.model('user', UserSchema);

//创建 数据
var wukong = {
    userName:'wukong',
    password:'123456',
    email:'wukong@atguigu.com'
};

/*

UserModel.create(wukong, function (err) {
    console.log(err);
});

*/


function findUser(userName, cb) {
    //查找
    UserModel.findOne({userName: userName}, function (err, doc) {
        if(err){
            cb(err);
        }else {
            cb(null, doc);
        }
    });
}
exports.findUser = findUser;

function addUser(userName, password, email, cb) {

    //创建 entity
    var userEntity = new UserModel({
        userName: userName,
        password: password,
        email: email
    });
    userEntity.save(function (err, doc) {
        console.log('doc**********', doc);
        if(err){
            cb(err);
        }else {
            cb(null, doc);
        }
    });

}
exports.addUser = addUser;

//通过 _id 查找 用户名

function findId(userId,cb) {
  UserModel.find({_id:userId},function (err, doc) {
    if(err){
      cb && cb(err);
    }else {
      cb && cb(null, doc);
    }
  });
}
exports.findId = findId;

//---------------------------------         item         -------------------------------------


//1. schema     2. model    3. entity
var ItemSchema = new mongoose.Schema({
    userID: String,     //关联某个用户
    title: String,
    post_date: {type: Date},
    finish_state: {type: Number, default: 1} //1.未完成  2.已经完成
});

var ItemModel = mongoose.model('item', ItemSchema);



function addItem(title, userID, cb) {

    //创建 entity
    var itemEntity = new ItemModel({
        userID: userID,
        title: title,
        post_date: new Date()
    });
    itemEntity.save(function (err, doc) {
        if(err){
            //打log
            cb(err);
        }else {
            cb(null, doc);
        }

        // cb(err, doc);
    });

}
exports.addItem = addItem;


function findItems(userId, cb) {
    ItemModel.find({userID: userId}, function (err, docs) {
        if(err){
            cb(err);
        }else {
            //docs    数组
            cb(null, docs);
        }
    });
}
exports.findItems = findItems;


//状态修改
function stateUpadate(itemID,stateNum,cb) {
  ItemModel.findById(itemID,function (err,doc) {
    if (err) {
       cb && cb(err);
    }else {
        doc.finish_state = stateNum;
        doc.post_date = new Date();
        doc.save(function (err,doc) {
          if (err){
            cb && cb(err);
          }else {
            cb && cb(null,doc);
          }
        });
    }
  });
}
exports.stateUpadate = stateUpadate;

//删除Item 信息

function ItemDelete(itemID,cb) {
  ItemModel.findById(itemID,function (err,doc) {
    if(err) {
      cb && cb(err);
    }else {
      //处理删除数据
      doc.remove(function (err,doc) {
        if (err){
          cb && cb(err);
        }else {
          cb && cb(null,doc);
        }
      });
    }
  });
}

exports.ItemDelete = ItemDelete;

//修改信息查询
function ItemUpdateget(itemID,cb) {
  ItemModel.findById(itemID,function (err,doc) {
    if (err){
       cb && cb(err);
    }else {
      cb && cb(null,doc);
    }
  });
}
exports.ItemUpdateget = ItemUpdateget;

//更新保存信息
function ItemUpdatePost(itemID,title,cb) {
  ItemModel.findById(itemID,function (err,doc) {
    if(err){
      cb && cb(err);
    }else {
      doc.title = title;
      doc.post_date = new Date();
      doc.save(function (err,doc) {
        if (err){
          cb && cb(err);
        }else {
          cb && cb(null,doc);
        }
      });
    }
  });

}
exports.ItemUpdatePost = ItemUpdatePost;










