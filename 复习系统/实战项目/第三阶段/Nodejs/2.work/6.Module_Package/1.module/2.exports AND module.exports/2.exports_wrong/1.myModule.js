
/*
    需求：
        1. 不用名值对的形式 向外暴露 数组，外部获得的不是一个对象，而是一个数组
        2. 不用名值对的形式 向外暴露 对象


    如果 不是给 exports 附加属性，而是期望其指向一个对象, 这样的语句不会抛异常，也不会有效果
 */


var arr =  [1, 2, 3, 4];
var wukong = {
    home : '花果山',
    weapon : '金箍棒',
    car : '筋斗云'
};

// 通过 exports 暴露出来的的是把需要暴露的属性和方法 全部封装在一个对象，然后暴露的属性和方法作为对象属性在
//          调用的页面中显示对象的 ‘键值对’;

//通过 module.exports={}或[]或function 的方式 进行暴露，不会全部封装在一个对象中，
        // 但是 以 module.exports.obj =obj 等方式进行暴露会变成 exports的方式

//总结：通过对比发现，还是优先使用 module.exports 方式吧，被扯把么多么蛾子了
// exports 与 module.exports 的区别
// exports 必须使用名值对的方式向外暴露数据；但是书写方便
// module.exports 可以使用名值对的形式，也可以直接暴露一个对象；书写繁琐

//进行模块引入 与调用
var module = require('./2.callModule.js');
console.log(module);
console.log(module.home);
console.log(module.weapon);





