/*
	1. 试图返回汉字 “你好” 观察现象
	2. 设置响应报头
		writeHead	一次性设置
		setHeader 	分别设置
*/


var http = require('http');

var server = http.createServer(function serverHandler(req, res) {



}).listen(3000, function () {
    console.log('server started');
});






