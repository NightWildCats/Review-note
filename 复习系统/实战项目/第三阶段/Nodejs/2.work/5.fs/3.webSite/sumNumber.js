
//获取两个包
var http = require('http');
var url = require('url');
var fs = require('fs');

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
  // console.log(objUrl);
  var stratNum = objUrl.query.stratNum;
  var endNum = objUrl.query.endNum;
  var operator = objUrl.query.selceted;
  //定义返回结果变量
  var sum = 0;
  //条件进行运算
  switch (operator) {
    case '+' :
      sum = (stratNum * 1) + (endNum * 1);
      res.end('进行加法运算的结果是：' + sum);
      break;
    case '-':
      sum = (stratNum * 1) - (endNum * 1);
      res.end('进行减法运算的结果是：' + sum);
      break;
    case '*':
      sum = (stratNum * 1) * (endNum * 1);
      res.end('进行乘法运算的结果是：' + sum);
      break;
    case '/':
      sum = (stratNum * 1) / (endNum * 1);
      res.end('进行除法运算的结果是：' + sum);
      break;
    default:
      // res.statusCode = 404;
      // res.end('出错了，我还能怎么办？报错呗：not found!');
      //路径   获取小图标
      var loginUrl = objUrl.pathname;
      switch (loginUrl) {
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
          res.end('出错了，我还能怎么办');
      }
  }
}).listen(3001, function () {
  // 设置端口
  console.log('设置端口成功！')
});