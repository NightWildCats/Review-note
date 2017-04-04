

var router = require('express').Router();
var db = require('../dao/db.js');
// router mini app

router.get('/login', function (req, res, next) {
    //获得用户的输入数据
    //get 请求的数据
    var userName = req.query.userName;
    var password = req.query.password;

    //查询数据库
    db.findUser(userName, function (err, doc) {
        if(err){
            console.error(err);
            res.send('网络错误');
        }else {
            //伪代码
            if(doc){
                if(password === doc.password){
                    res.send('登录成功');
                }else {
                    res.send('用户名或者密码错误');
                }
            }else {
                res.send('请去注册');
            }
        }
    });

    // res.send(userName + "\t" + password);
});













module.exports = router;


