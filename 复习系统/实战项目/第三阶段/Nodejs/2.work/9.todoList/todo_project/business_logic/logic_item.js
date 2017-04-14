var db = require('../dao/db.js');
var userLogic= require('./logic_user');
var url = require('url');

function addItem(req, res, next) {
    //输入
    var title = req.body.title;

    //处理
    //添加到数据库
    var userID = global.userId;
    db.addItem(title, userID, function (err, doc) {
        if(err){
            console.error(err);
            res.send('添加失败');
        }else {
            // res.send('添加成功');
            userLogic.indexPage(userID, res);
        }
    });

}

exports.addItem = addItem;

//完成状态的修改
function ItemOk(req,res,next) {
  //系统 _id
  var itemID = req.params.id;
  //状态码
  var state = req.query.state; //yes no
  var stateNum = ('yes' === state) ? 2 : 1;
  db.stateUpadate(itemID,stateNum,function (err,doc) {
    if(err){
      console.error(err);
    }else {
      //刷新首页列表
      var userID = global.userId;
      userLogic.indexPage(userID, res);
    }
  });
  
}
exports.ItemOk = ItemOk;

//修改
function ItemUpdateget(req,res,next) {
  var itemID = req.params.id;
  db.ItemUpdateget(itemID,function (err,docs) {
    if (err){
      console.log(err)
    } else {
      //获取用户ID
      var userId = global.userId;
      db.findId(userId,function (err,doc) {
        var userName = doc[0].userName;
        var itemInfo = {
          userName : userName,
          title: docs.title,
          itemID: docs._id
        };
        console.log(itemInfo.title);
        res.render('edit.ejs',itemInfo);
      });
    }
  });

}

function ItemUpdatePost(req,res,next) {
  var title = req.body.title;
  var itemID = req.params.id;
  db.ItemUpdatePost(itemID,title,function (err,doc) {
    if (err){
      res.render('保存失败');
    }else {
      //刷新首页列表
      var userID = global.userId;
      userLogic.indexPage(userID, res);
    }
  })

}
exports.ItemUpdateget = ItemUpdateget;
exports.ItemUpdatePost = ItemUpdatePost;

//删除
function ItemDelete(req,res,next) {
  var itemID = req.params.id;
  db.ItemDelete(itemID,function (err,doc) {
    if (err){
      console.error(err);
    }else {
      //重新刷新页面
      var userID = global.userId;
      userLogic.indexPage(userID, res);
    }
  });
}
exports.ItemDelete = ItemDelete;








