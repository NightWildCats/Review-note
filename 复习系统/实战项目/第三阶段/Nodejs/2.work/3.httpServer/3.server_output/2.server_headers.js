/*
	1. 试图返回汉字 “你好” 观察现象
	2. 设置响应报头
		writeHead	一次性设置
		setHeader 	分别设置
*/


var http = require('http');

var server = http.createServer(function serverHandler(req, res) {
 res.writeHead(200,'OK',{
 	// 'Content-Type':'text/html;charset=utf-8' //解析成html的格式进行显示
 	'Content-Type':'text/plain;charset=utf-8' //按照设置的输入流 进行输出
	});

 res.end('<h1>这是一个测试</h1>')

}).listen(3000, function () {
    console.log('server started');
});






