/*
	1. 打印对象
	2. 四个输出函数
	3. 打印调用堆栈
	4. 使用计时器
*/

//打印的四个对象
//标准输出流
console.log('这是一个大师兄');
console.info('这是一个大师兄的别名');
//报错信息输出流
console.error('这是一个大师兄的报错');
console.warn('这也是大师兄的一个警告');


//打印定时器
//开始执行时间
console.time('start');
	for (var i = 0; i < 1000000000; i++) {
  var obj = i;
}
//结束执行时间
console.timeEnd('start');










