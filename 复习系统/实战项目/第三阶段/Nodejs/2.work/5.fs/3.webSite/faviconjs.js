
//获取两个包
var http = require('http');
var url = require('url');

//创建一个服务器
http.createServer(function (req, res) {
  //设置请求报文的的类型
  res.writeHead(200, 'OK', {
    'Content-Type': 'text/html;charset=utf-8'
  });
  //获取请求的地址
  var strUrl = req.url;
  //获取三个表单变量的值
  var objUrl = url.parse(strUrl, true);

  // 通过请求的路径返回 具体的HTML 页面
  var loginUrl = objUrl.pathname;
  var fs = require('fs');
  switch (loginUrl) {
    case '/login':
      //读文件 并且写入到浏览器
      var path = './计算器-肖雄.html';
      fs.readFile(path,function (err,data) {
        if (err){
          var path = './login.txt';
          var data1 = new Date().toDateString() + '文件读取不成功！\n';
          fs.writeFile(path,data1,{flag:'a'},function (err) {
            if (err){
              console.error('error');
            }
          });
        }else {
          res.end(data);
        }
      });
      break;
    // 获取小图标
    case '/favicon.ico':
      var pathIco = './favicon.ico';
      fs.readFile(pathIco,function (err,data) {
        if (err){
          console.log('图片加载失败啦！')
        }else {
          res.end(data);
        }
      });
      break;
    default:
      res.statusCode = 404;
      res.end('出错了，我还能怎么办1');
  }

}).listen(3002, function () {
  // 设置端口
  console.log('设置端口成功！')
});
