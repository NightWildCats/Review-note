/*
	1. 使用数字参数创建 buffer 
	2. 打印 buffer
	3. buffer 初始化
	4. 使用字符串参数创建 buffer 
	5. 修改第一个位置的值
	6. buffer 与 字符串之间的转化
*/

//
// var buf = new Buffer(20);
// console.log(buf);
// buf.fill(0);
// console.log(buf);
// buf = null;
//

/*

var buf = new Buffer('A love guigu');
console.log(buf);
console.log(buf.toString());

buf[0] = 0x42;      //0x 十六进制数

console.log(buf);
console.log(buf.toString());
*/

// 69 + 1 = 6a
// 6a + 1 = 6b

var str = '呵呵呵';
var buf = new Buffer(str);
console.log(buf);
console.log(str);
console.log(buf.length);    // 9    内存的字节长度
console.log(str.length);    // 3

console.log(buf.toString());








