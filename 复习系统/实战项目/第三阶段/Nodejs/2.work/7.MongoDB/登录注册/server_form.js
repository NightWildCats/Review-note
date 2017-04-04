/**
 * Created by Administrator on 2017/4/1/001.
 */
//引入包
var http = require('http');
var url = require('url');
var fs = require('fs');
var db = require('./dao/db.js');

//创建一个服务器
http.createServer(function (req, res) {
  var strUrl = req.url;
  var objUrl = url.parse(strUrl, true);
  //获取路径
  var pathname = objUrl.pathname;

  //进行路由
  switch (pathname) {
    case '/login.html':
      //进行登录处理
      var loginPath = './form.html';
      fs.readFile(loginPath, function (err, data) {
        if (err) {
          console.error(err);
        } else {
          res.end(data);
        }
      });
      break;
    case '/register.html':
      //进行注册处理
      var regPath = './register.html';
      fs.readFile(regPath, function (err, data) {
        if (err) {
          console.error(err);
        } else {
          res.end(data);
        }
      });
      break;
    case '/login':
      var selectName = objUrl.query.userName;
      var selectPassword = objUrl.query.password1;
      res.writeHead(200, 'OK', {
        'Content-Type': 'text/html;charset=utf-8'
      });
      //登录验证
      db.selectUser(selectName, loginHandler);
      function loginHandler(err, doc) {     //从数据库得到的对象
        if (err) {
          console.error(err);
          res.end('网络错误');
        } else {
          // 找到了用户名
          if (doc) {
            //密码是否相等
            if (selectPassword === doc.password) {
              console.log(doc);
              res.end('欢迎' + selectName + '回来');
            } else {
              console.log(doc);
              res.end('用户名或密码错误');
            }
          } else {
            // 返回：请去注册
            res.end('请去注册');
          }
        }
      }
      break;
    case '/register':
      var insertName = objUrl.query.userName;
      var insertPassword = objUrl.query.password1;
      //页面渲染
      res.writeHead(200, 'OK', {
        'Content-Type': 'text/html;charset=utf-8'
      });
      //注册验证
      db.selectUser(insertName,registerHandler);
      function registerHandler(err, doc) {     //从数据库得到的对象
        if(err){
          console.error(err);
          res.end('网络错误');
        }else {
          // 找到了用户名
          //判断返回值是否空
          if(doc){
            console.log(doc.userName);
            res.end('用户名已被注册');
          }else {
            db.insertUser(insertName, insertPassword, function (err) {
              if(err){
                console.error(err);
                res.end('注册失败');
              }else {
                res.end('注册成功');
              }
            });
          }
        }
      }
      break;
    default:
      res.statusCode = 404;
      res.end('404 Not found!');
      //错误日志
      var logData = '错误日志：' + pathname + " - " + new Date().toDateString() + '\n';
      fs.writeFile('./logs.txt', logData, {flag: 'a'}, function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log("日志写入成功！")
        }
      })
  }
}).listen(3001, function () {
  console.log('创建服务器/设置端口成功！')
});
