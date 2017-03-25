/*
	1. 同步写日记文件 
		1. 第一天写入 石破天惊
		2. 第二天写入 大闹天宫
		3. 第三天写入 西天取经
	2. 错误处理
	3. 同步和异步的区别（**重点理解**）
*/
var fs = require('fs');

var filePath = './log.txt';
var data1 = '石破天惊\n';
var data2 = '大闹天宫\n';
var data3 = '西天取经\n';

//写同步文件
console.log('before');
try{
    fs.writeFileSync(filePath, data1, {flag: 'r'});

    console.log('read finish');
}catch(err){
    console.error(err);
}

console.log('after');



/*

fs.writeFileSync(filePath, data1, {flag: 'a'});

fs.writeFileSync(filePath, data2, {flag: 'a'});

fs.writeFileSync(filePath, data3, {flag: 'a'});*/
