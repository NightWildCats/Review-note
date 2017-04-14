
var db = require('../dao/db.js');


function postLogin(req, res, next) {

    // 输入
    var userName = req.body.userName;
    var password = req.body.password;
    // 处理
    /*
     if(用户存在){
     if(密码正确){
     返回： 登录成功
     }else {
     返回： 用户名或者密码不正常
     }
     }else {
     返回： 请去注册
     }*/

    var doc = db.findUser(userName, handler);
    function handler(err, doc) {
        if(doc){
            if(password === doc.password){
                // res.send('登录成功');
                // 个性化首页
                // res.redirect('/item_list.html'); //重定向
                var userId = doc._id;
                global.userId = userId;
                res.cookie('THE_LIST_LOGIN',userName);
                //渲染出用户的首页
                indexPage(userId, res);
            }else {
                res.send('用户名或者密码不正确');
            }
        }else {
            res.send('请去注册');
        }
    }

}
exports.postLogin = postLogin;


//注册用户
function postRegisiter(req, res, next) {
    //输入
    var userName = req.body.userName;
    var password = req.body.password;
    var passwordConfirm = req.body.passwordConfirm;
    var email = req.body.email;

    //处理数据
    /*if(用户存在){
        返回： 用户名已经存在
    }else {
        存入数据库
        存完之后，返回：注册成功请去登录
    }*/

    db.findUser(userName, function (err, doc) {
        if(err){
            console.error(err);
        }else {
            // doc      对象      null
            if(doc){
                res.send('用户名已经存在');
            }else {
                // 存入数据库
                db.addUser(userName, password, email, function (err, doc) {
                    if (err) {
                        console.error(err);
                        res.send('注册失败，稍后再试');
                    } else {
                        // console.log('存储成功');
                        res.send('注册成功, 请去登录');
                    }
                });
            }
        }
    });
}
exports.postRegisiter = postRegisiter;



function indexPage(userId, res) {
    db.findItems(userId, function (err, docs) {
        if(err){
            res.send('出错了');
        }else {
            //查找用户名
            db.findId(userId,function (err,doc) {
              var userName = doc[0].userName;
              var dataObj = {
                items: docs,     //数组
                // userName: 通过 id 找到的值
                userName:userName
              };
              //模板引擎
              res.render('item_list.ejs', dataObj);
            });
            // res.send(docs);
        }
    });
}
exports.indexPage = indexPage;





