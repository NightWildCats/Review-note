var db = require('../dao/db.js');

// get 请求  登录
function getLogin(req, res, next) {
    //res.redirect('/login.html'); //重定向
    res.render('login', {});    //模板
}

// post 请求  登录
function postLogin(req, res, next) {
    //获得用户数据
    var userName = req.body.userName;
    var password = req.body.password;
    //运算
    /*  伪代码
     if(用户名和密码非空){
     if(用户名在数据库中存在){
     if(密码正确){
     //登录成功
     }else {
     //返回密码不存在
     }
     }else {
     //返回用户名不存在
     }
     }else{
     //请输入用户名和密码
     }
     */
    if(userName && password){
        //db.getUser(userName);   //查找用户名，如果找到了，那么，我返回一个对象，如果没找到，返回一个null
        db.getUser(userName, function (err, userInfoDB) {
            if(err){
                //console.error(err);
                res.send(err);
            }else {
                //doc 两个可能的值： null 或者 obj
                if(userInfoDB){
                    if(password === userInfoDB.password){
                        //登录成功
                        //res.send('登录成功');
                        //res.render('welcome', {userName: 'aaa'});
                        res.cookie('userName', userInfoDB.userName, {maxAge : 10 * 60 * 1000});
                        req.session.userInfo = userInfoDB;

                        res.redirect('/'); //首页去判断是否登录过，是否刷出页面


                    }else {
                        //返回密码错误
                        res.send('密码错误');
                    }
                }else {
                    //返回用户名不存在
                    res.send('用户名不存在');
                }
            }
        });
    }else{
        //请输入用户名和密码
        res.send('请输入用户名和密码');
    }
}

// get 请求  注册
function getRegister(req, res, next){
    //处理get 获得页面
    //res.redirect('/register.html'); //重定向
    res.render('register.ejs');
}
// post 请求  注册
function postRegister(req, res, next) {
    //获取用户信息
    //req.query   //获取数据 get
    //console.log(req.body);//
    var userName = req.body.userName;
    var password = req.body.password;
    var passwordConfirm = req.body.passwordConfirm;
    var email = req.body.email;

    //注册
    /*

     if(用户名密码邮箱等不空){
         //1
         if(密码和确认密码相同){
             if(用户名存在){
                //请更换用户名
             }
             else{
                 //2
                 //写数据库
             }
         }else{
            //请确认两次密码输入是否相同
         }
     }
     else{
         //请输入完整信息
     }
     */
    if(userName && password && passwordConfirm && email){
        if(password === passwordConfirm){
            db.getUser(userName, function (err, doc) {
                if(err){
                    console.error(err);
                    res.send(err);
                }else {
                    if(doc){
                        //请更换用户名
                        res.send('请更换用户名');
                    }
                    else{
                        //写数据库
                        var userInfo = {
                            userName : userName,
                            password : password,
                            email : email
                        };
                        //添加用户
                        db.addUser(userInfo, function(err, doc) {
                            if(err){
                                res.send(err);
                            }else {
                                //res.send('添加成功');
                                res.redirect('/login');
                            }
                        });
                    }
                }
            });
        }else {
            res.send('请确认两次密码输入是否相同');
        }
    }
    else{
        res.send('请输入完整信息');
    }
}

//登出
function logout(req, res, next) {
    req.session.destroy();
    res.redirect('/');
}


//确认 当前是已经登录状态
function checkIsLogined(req, res, next) {
    //第一次登录
    if (!req.session.userInfo){
        next();
    }else {
        //不是第一次登录，已经登录过了，
        //显示 XXX 欢迎你
        // res.render('wel', req.session.userInfo);
        //显示列表页
        //res.send(req.session.userInfo.userName);
        var dataTemp = {
            userName : req.session.userInfo.userName
        };

        //从数据库取数据
        db.getItemsByUserID(req.session.userInfo._id, function (err, items) {
            if(err){
                console.error(err);
            }else {
                console.log(items);
                dataTemp.items = items;
                dataTemp.avatar = req.session.userInfo.avatar;
                //返回输出信息
                res.render('item_list.ejs',  dataTemp );
                //console.log(doc);
            }
        });

    }
}

//确认 当前是未登录状态
function checkNotLogined(req, res, next) {
    if(req.session.userInfo){
        //已经登录过了
        next();
    }else {
        //从来没有登录过，跳转到登录页面
        res.redirect('/login');
    }
}


//404 页面未找到
function pageNotFound(req, res, next) {
    // res.send(404, 'not found');
    res.redirect('/404.html');
}

//注册
module.exports.getRegister = getRegister;
module.exports.postRegister = postRegister;

//登录
module.exports.getLogin = getLogin;
module.exports.postLogin = postLogin;

//登出
module.exports.logout = logout;


//确认 当前是已经登录状态
module.exports.checkIsLogined = checkIsLogined;
//确认 当前是未登录状态
module.exports.checkNotLogined = checkNotLogined;


//404 页面未找到
module.exports.pageNotFound = pageNotFound;



///////////////////////////////   待办事宜    /////////////////////////////
//添加待办事宜
function addItem(req, res, next) {
    // 输入
    var title = req.body.title;
    var userID = req.session.userInfo._id;

    // 处理
    //写数据
    var options = {
        title: title,
        userID: userID
    };
    db.addItem(options, function (err, item) {
        if(err){
            console.error(err);
        }else {
            console.log(item);

            // 输出
            //res.render('item_list.ejs', {});
            res.redirect('/login');
        }
    });


}

//设置item 的状态为完成
function finishItem(req, res, next){
    //输入
    var itemID = req.params.id;
    var state = req.query.state;    //yes  no
    var stateNum = ('yes' === state) ? 2 : 1;

    //处理 设置完成
    db.setItemFinishState(itemID, stateNum, function (err, doc) {
        if(err){
            console.error(err);
        }else {
            //刷新首页列表
            res.redirect('/login');
        }
    });
}

function deleteItem(req, res, next){
    //输入
    var itemID = req.params.id;

    //处理 删除item
    db.deleteItem(itemID, function (err, doc) {
        if(err){
            console.error(err);
        }else {
            //刷新首页列表
            res.redirect('/login');
        }
    });
}

//修改 item title get方法
function editItemGet(req, res, next) {
    //输入
    var itemID = req.params.id;

    //获得item 信息
    db.getItemsByItemID(itemID, function (err, doc) {
        if(err){
            console.error(err);
        }else {
            //返回页面
            //画页面
            res.render('edit.ejs', {userName: doc.userName, title: doc.title, itemID: doc._id});
        }
    });
}

//修改 item title post方法
function editItemPost(req, res, next) {
    //输入
    var itemID = req.params.id;
    var title = req.body.title;

    //获得item 信息
    db.updateItemTitle(itemID, title, function (err, doc) {
        if(err){
            console.error(err);
        }else {
            res.redirect('/login'); //刷新页面
        }
    });

}


//删除 item
module.exports.deleteItem = deleteItem;

//添加待办事宜
module.exports.addItem = addItem;

//设置item 的状态为完成
module.exports.finishItem = finishItem;

//修改 item get
module.exports.editItemGet = editItemGet;

//修改 item post
module.exports.editItemPost = editItemPost;


///////////////////////    上传头像     //////////////////////////////////
function uploadAvatar(req, res, next) {
    var userName = req.session.userInfo.userName;
    var avatar = req.session.userInfo.avatar;
    res.render('upload_avatar.ejs', {userName: userName, avatar: avatar});
    //res.redirect('upload_avatar.html');
}

function uploadAvatarPost(req, res, next) {
    //输入

    //处理
    //将来显示头像的时候显示用户个性化的头像
    //通知数据库，已经上传过个性的头像
    //将来，加载页面的时候，取得这个个数据化的数据，
    var userName = req.session.userInfo.userName;
    var fileName = req.session.userInfo.userName;
    db.uploadAvatar(userName, fileName, function (err, doc) {
        if(err){
            console.error(err);
        }else {
            //返回结果
            res.redirect('/');
        }
    });
}

module.exports.uploadAvatar = uploadAvatar;
module.exports.uploadAvatarPost = uploadAvatarPost;
