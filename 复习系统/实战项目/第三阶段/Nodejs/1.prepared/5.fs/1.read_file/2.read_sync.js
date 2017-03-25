/*
	1. 同步读文件，显示文件中的内容
	2. 错误处理
	3. 同步和异步的区别（**重点理解**）
*/



var fs = require('fs');

//同步读文件'
//file path     绝对路径    相对路径
var filePath = './content1.txt';
console.log('before');

try{
    //逻辑代码
    console.log(data);
    var data = fs.readFileSync(filePath);   //5
}
catch (err){
    //错误处理
    console.error(err);
    console.log('打电话');
}

// console.log(data.toString());
console.log('after');








