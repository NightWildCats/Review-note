/*
	定时器
		1. 延迟执行
		2. 反复循环执行
*/

//工业级别的服务器搭建

var http = require('http');
http.createServer(function (req,rep) {
  rep.end('nihao1')
}).listen(3001,function () {
	console.log('端口设置成功！')
});


//设置 延时调用函数

var timeout = setTimeout(function () {
	console.log('延时函数执行了')
},2000);
//关闭延时函数
// clearTimeout(timeout);



//设置定时函数
var interval =  setInterval(function () {
	console.log('定时函数执行了')
},2000);
//关闭定时函数
clearInterval(interval);


// 总结 ； 当使用定时器 时 会把定时器函数放入事件循环队列 ，然后进行调用
//		当使用 清除定时器语句（可以看做是一个初始化代码），会使定时器回调函数在初始化语句之后执行
//    这样就会导致 定时器回调函数在事件循环队列中等待执行，初始化就把定时器清除了。所以不会输出任何信息











