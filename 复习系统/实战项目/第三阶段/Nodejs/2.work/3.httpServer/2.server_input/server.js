/*
	1. 观察 req
	2. 获得 url 字符串
	3. 获得 请求的方法 		//post get 等
*/

var http = require('http');
http.createServer(function (req,res) {
	var strUrl = req.url;
	var method = req.method;
	console.log(strUrl);
	console.log(method);


}).listen(3000,function () {
	console.log('端口设置成功！')
});








