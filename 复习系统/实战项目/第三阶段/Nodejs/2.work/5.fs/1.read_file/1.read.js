/*
	1. 读文件，显示文件中的内容
	2. 使用相对路径找到文件
	3. 使用绝对路径找到文件
	4. 错误处理
*/

// 异步读文件
//创建一个fs文件包
var fs = require('fs');
//设置路径
var path = './content.txt';
// 异步读取文件 ，设置读取状态的回调函数
fs.readFile(path,function (err,data) {
	//参数： ‘错误优先’ 原则
	// err 表示错误信息提示
	// data 表示返回的信息(在计算机中存储的是二进制的信息)
	if (err){
		// err 错误信息提示
		console.error(err);
	} else {
		// data.toString()将二进制的数据转化成 能够读懂的字符串形式
		console.log(data.toString());
	}
});





