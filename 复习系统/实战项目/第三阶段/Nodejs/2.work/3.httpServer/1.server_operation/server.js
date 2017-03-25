/*
	1. 建立 server
	2. 关闭 server
*/

//工业级别的服务器搭建

var http = require('http');
var server = http.createServer(function (req,red) {
  red.end('nihao1')
}).listen(3001,function () {
  console.log('端口设置成功！')
});

//定时关闭 服务器

// setTimeout(function () {
// 	server.close()
// },2000);















