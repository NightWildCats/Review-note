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

	//获取 地址栏的地址信息
	var strUrl = req.url;
  //使用 Url 对象
	var objUrl = url.parse(strUrl,true); //设置为 true 之后就可以是获取到 query属性为对象形式的字符串
	//可以通过调用 objUrl对象的属性方法来进行获取提交的字符串
	// objUrl.pathname
	console.log(objUrl)

}).listen(3000, function () {
    console.log('server started');
});






