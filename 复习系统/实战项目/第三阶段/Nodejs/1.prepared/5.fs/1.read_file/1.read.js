/*
	1. 读文件，显示文件中的内容
	2. 使用相对路径找到文件
	3. 使用绝对路径找到文件
	4. 错误处理
*/


var fs = require('fs');


//file path     绝对路径    相对路径
// var filePath = './content.txt';
// console.log('before');
//
// fs.readFile(filePath, function (err, data) {
//     //错误处理，检查错误，如果有错... 如果没错...
//     if(err){
//         console.error(err);
//         console.log('出错了打电话')
//     }else {
//         console.log('read...');
//         console.log(data);
//         // console.log(data.toString());
//     }
// });
// console.log('after');



var filePath = './content.txt';


fs.readFile(filePath, function(err,data){
    console.log(data);
    console.log(data.toString());
})






