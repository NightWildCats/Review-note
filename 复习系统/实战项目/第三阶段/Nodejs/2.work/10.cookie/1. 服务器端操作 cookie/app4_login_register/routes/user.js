

var router = require('express').Router();
var db = require('../dao/db.js');




router.post('/login', function (req, res, next) {
    var userName = req.body.userName;
    var password = req.body.password;

    //查询数据库
    db.findUser(userName, function (err, doc) {
        if(err){
            console.error(err);
            res.send('网络错误');
        }else {
            //伪代码
            if(doc){
                if(password === doc.password){

                    res.send(userName + ', 欢迎你');
                }else {
                    res.send('用户名或者密码错误');
                }
            }else {
                res.send('请去注册');
            }
        }
    });
});



module.exports = router;


