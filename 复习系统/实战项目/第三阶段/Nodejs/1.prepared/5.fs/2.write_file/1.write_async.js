/*
	1. 写日记文件 
		1. 第一天写入 石破天惊
		2. 第二天写入 大闹天宫
		3. 第三天写入 西天取经
	2. 设置写入模式 a w r
	2. 错误处理
	3. 同步和异步的区别（**重点理解**）
*/


var fs = require('fs');

var filePath = './log.txt';
var data1 = '石破天惊\n';
var data2 = '大闹天宫\n';
var data3 = '西天取经\n';


//异步写文件
// fs.writeFile(filePath, data1, {flag : 'r'}, function (err) {
//     if(err){
//         console.error(err);
//     }else {
//         console.log('写完了1');
//     }
// });

fs.writeFile(filePath, data1, {flag: 'a'}, function(err){
    console.error(err);
} );


/*


//异步写文件
fs.writeFile(filePath, data1, {flag : 'a'}, function (err) {
    console.log('写完了1');
});

//异步写文件
fs.writeFile(filePath, data2, {flag : 'a'}, function (err) {
    console.log('写完了2');
});

//异步写文件
fs.writeFile(filePath, data3, {flag : 'a'}, function (err) {
    console.log('写完了3');
});

*/



