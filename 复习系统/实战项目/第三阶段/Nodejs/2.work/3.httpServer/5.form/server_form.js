/*
	1. 获得 form 表单的数据
	2. 当用户名密码正确后显示 welcome 否则显示 something wrong
		用户名：bajie
		密码：654321
	3. 使用 url 模块
		
		
*/

var http = require('http');
var url = require('url');   

var server = http.createServer(function serverHandler(req, res) {



}).listen(3000, function () {
    console.log('server started');
});






