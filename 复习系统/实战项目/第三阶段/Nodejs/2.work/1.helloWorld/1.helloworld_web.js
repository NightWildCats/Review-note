/*	
	建立服务器
	在网页中输出 helloworld
*/

//创建一个 require 对象
//引入包
var http = require('http');

//创建一个俯卧请求相应以及返回函数
function serverHan(req, red) {
	// req 接收请求
	// red 返回请求
	red.end('访问出错啦！')
}
//创建一个服务器
var server = http.createServer(serverHan);

//创建一个 端口开启之后的 返回信息
function listenHan() {
	console.log('端口设置成功！')
}
//创建一个连接端口
server.listen(3000,listenHan);

















