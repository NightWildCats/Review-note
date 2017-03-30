
/**
 * 无论调用多少次，事实上只是从磁盘加载一次
 * 第一次运行形成对象，将对象存储在缓存中
 * 以后都是从缓存中获取对象
 */



//第一次加载
var hello1 = require('./1.module.js');
hello1.setName('atguigu');

//第二次加载
var hello2 = require('./1.module.js');
hello2.setName('atguigu 2');

//第三次加载
var hello3 = require('./1.module.js');
hello3.setName('atguigu 3');


//请问 这里会输出什么？？？？？？
hello1.sayHello(); //atguigu 3  原因：同一个页面多次调用一个模块会被最后一个覆盖