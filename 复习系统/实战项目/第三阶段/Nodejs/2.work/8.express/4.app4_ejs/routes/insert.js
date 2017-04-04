
// 用户注册页面 逻辑处理

var router = require('express').Router();
var db = require('../dao/db.js');
var file = require('./logFile.js');

//注册信息处理
router.post('/reg', function (req, res, next) {
  var userName = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  db.findUser(userName, function (err, doc) {
    if (err) {
      //错误日志
      //写入日志并重定向到 404 页面
        var Prompt = userName + email+ '用户查询失败';
        file.wirtFile('../datalog/insertBDOver.txt',Prompt);
        res.redirect('over/index.html');
    } else {
      //检查新注册的信息是否已经存在
      if (doc) {
        // 用户名已经被注册 使用重定向 到登录页面
        var insertOver = {
          name: userName
        };
        //已存在注册的用户，模板使用
        res.render('overInsert.ejs', insertOver);
      } else {
        db.addUser(userName, password, email, function (err) {
          if (err) {
            //数据插入失败
            console.error(err);
            var Prompt = userName + ' - ' + email+ '用户注册失败';
            file.wirtFile('../datalog/insertOver.txt',Prompt);
            // res.end('注册失败');
            res.redirect('over/index.html');
          } else {
            var insertOk = {
              name: userName
            };
            //插入成功日志
            Prompt = userName + ' - ' + email+ '用户创建成功';
            file.wirtFile('../datalog/insertOK.txt',Prompt);
            //注册成功的模板使用
            res.render('insert.ejs', insertOk);
          }
        })
      }
    }
  });
});


//向外暴露
module.exports = router;