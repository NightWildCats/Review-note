/*
	1. 同步写日记文件 
		1. 第一天写入 石破天惊
		2. 第二天写入 大闹天宫
		3. 第三天写入 西天取经
	2. 错误处理
	3. 同步和异步的区别（**重点理解**）
*/

// 同步读取文件
//引入一个fs包
var  fs = require('fs');
//设置创建文件的路径（位置）
var path = './login2.txt';
//设置插入的信息（可以通过变量动态插入信息）
var data = '石破天惊\n';
//需要使用 try {} catch(err) {} 来进行处理
try {
  fs.writeFileSync(path,data,{flag:'a'});
  //参数说明：
  /*
	 * path : 创建文件的路径
	 * data ：插入文件的信息
	 * {flag:'a'} : 插入文件的方式（状态）
	 * 		具体方式参考上面的异步写入
   */
  //文件写入争取处理过程
  console.log('OK');
} catch(err) {
	//文件失败处理过程
  console.log('ERROR');
}


















