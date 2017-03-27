/**
 * Created by Administrator on 2017/3/26/026.
 */
/*
* 目标 ：
 * 创建一个服务器访问 一个地址
 * 实现在浏览器端通过地址进行访问网页
*/

//创建 一个 HTTP 对象
var http = new require('http');
http.createServer(function (req,res) {
  // var strUrl = req.url('hello.html');       //实现目的 返回 指定的地址的网页
  res.write('hello.html');
  res.end() ; //location.assign
}).listen(3000,function () {
  console.log('端口设置成功！');
});


//总结 ： 未实现  后期需要实现