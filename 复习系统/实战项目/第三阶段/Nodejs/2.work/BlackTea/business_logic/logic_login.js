//引用数据库中的值
var db=require('../dao/db.js');
function postLogin(req,res,next) {
    //输入
    var userName=req.body.userName;
    var password=req.body.password;
    //TODO 2 处理--创建数据库
    /* if(用户存在){
     //判断密码是否正确
     if(正确){
     //返回:登陆成功
     }else{//返回：用户或是密码不正确}

     }else{//返回：去注册 }
     */
var doc=db.findUser(userName,handler);
    function handler(err,doc) {
        if (doc) {
            //判断密码是否正确
            if (password === doc.password) {
                //返回:登陆成功
               //res.send('登陆成功');
               // res.redirect('./item_list.html')
                var userId = doc._id;
                 global.userId = userId;
             //渲染出用户的首页
                indexPage(userId,res);
               /* //todo 怎么从数据库中获取到读入的数据 和userId相关的
                db.findItems(userId,function(err,docs){
                    if(err){
                        res.send('网络错误')
                    }else{
                        //res.send('查询成功')
                        var dataObj={
                            items:docs
                        }
                        res.render('./item_list.ejs',dataObj);
                    }
                });*/



            } else {
                //返回：用户或是密码不正确
                res.send('用户名或是密码不匹配')
            }

        } else {
            //返回：去注册
            res.send('请去注册')
        }

    }

}

exports.postLogin=postLogin;


/*======================================*/
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


//todo 把ejs渲染部分抽取出函数 然后进行调用
function indexPage(userId,res){
    db.findItems(userId,function(err,docs){
        if(err){
            res.send('网络错误')
        }else{
            //res.send('查询成功')
            var dataObj={
                items:docs
            }
            res.render('./item_list.ejs',dataObj);
        }
    });
}
exports.indexPage=indexPage;