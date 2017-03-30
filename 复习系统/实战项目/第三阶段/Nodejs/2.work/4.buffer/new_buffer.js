/*
	1. 使用数字参数创建 buffer 
	2. 打印 buffer
	3. buffer 初始化
	4. 使用字符串参数创建 buffer 
	5. 修改第一个位置的值
	6. buffer 与 字符串之间的转化
*/

//创建一个 buffer 对象

var ber = new Buffer(10); //设置其长度为 10 个字节，一个字节有8位
console.log(ber);
ber.fill(); //填充 清空
var ber1 = new Buffer('I love me');
console.log(ber1);
console.log(ber1.toString());


