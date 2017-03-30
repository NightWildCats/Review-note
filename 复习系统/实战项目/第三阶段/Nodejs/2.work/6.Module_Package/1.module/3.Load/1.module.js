/**
 * 加载过程：
 *      1. 从磁盘读取 js 文件
 *      1. 一行一行执行 js 代码
 *      2. 收集向外暴露的信息，放到一个对象里
 *      3. 把这个对象放到缓存中, 下次读取从缓存中直接获得这个对象
 * 总结：
 *      require 就是将js文件运行了一遍
 */


var name;

exports.setName = function(thyName) {
    name = thyName;
};
exports.sayHello = function() {
    console.log('Hello ' + name);
};

console.log('加载');  //只打印一次



