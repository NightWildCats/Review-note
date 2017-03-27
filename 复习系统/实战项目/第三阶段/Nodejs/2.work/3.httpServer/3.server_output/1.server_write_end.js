/*
	1. 观察 res
	2. 设置响应报文体
		write	传输数据，但是不断开连接
		end 	传输数据，同时断开连接
	3. 调整write 和 end 的顺序
*/
var http = require('http');

var server = http.createServer(function serverHandler(req, res) {

	var write = res.write('你好');
	var end = res.end('world'); //传输一次之后断开连接
	var write1 = res.write('h');
	
	
}).listen(3000, function () {
    console.log('server started');
});










