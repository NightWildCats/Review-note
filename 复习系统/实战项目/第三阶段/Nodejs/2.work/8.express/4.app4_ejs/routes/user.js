
//用户登录页面 逻辑处理

var router = require('express').Router();
var db = require('../dao/db.js');
var file = require('./logFile.js');
var IP = require('./ipConfig.js');

//登录验证
router.post('/index', function (req, res, next) {
  var userName = req.body.username;
  var password = req.body.password;
  db.findUser(userName, function (err, doc) {
    if (err) {
      //出错之后 重定向到 404 页面
      res.redirect('over/index.html');
    } else {
      if (doc) {
        if (password === doc.password) {
          //获取IP地址
          var ip = IP.getClientIp(req);
          ip = ip.slice(ip.indexOf(':',6));
          //进行登录成功日志书写
          var Prompt = userName + " -IP:"+ ip +'用户登录成功';
          //文件写入模块
          file.wirtFile('../datalog/userOk.txt',Prompt);
          //进行模板的设置 render 渲染页面
          var loginOk = {
            name: userName,
            ip:ip
          };
          res.render('user.ejs', loginOk);
        } else {
          // res.send('用户名和密码错误');
          ip = IP.getClientIp(req);
          ip = ip.slice(ip.indexOf(':',6));
          Prompt = userName+ " -IP:"+ ip +'用户尝试登录失败';
          file.wirtFile('../datalog/userOver.txt',Prompt);
          var loginOver = {
            name: userName,
            next:"不正确，或者密码错误！请重新登录",
            ip:ip
          };
          res.render('overUser.ejs', loginOver);
        }
      } else {
        // 用户不存在 ，去注册
         var loginNull = {
          name: userName,
          next:"不存在，请去注册",
          ip:ip
        };
        res.render('overUser.ejs', loginNull);
      }
    }
  })
});



//向外暴露
module.exports = router;