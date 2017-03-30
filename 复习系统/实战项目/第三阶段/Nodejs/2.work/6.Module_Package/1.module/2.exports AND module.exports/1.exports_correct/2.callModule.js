
/*
    需求：
        1. 引用模块
        2. 打印被引用模块的属性
        3. 调用被引用模块的方法
        4. 打印被引用模块的私有属性
        5. 调用被引用模块的私有方法
 */

// 1. 引用模块
//打印 引入的对象 观察
var wukong = require('./1.myModule.js');    //对象
console.log(wukong);

// 2. 打印被引用模块的属性
wukong.flyFun();
// 3. 调用被引用模块的方法

// 4. 打印被引用模块的私有属性
console.log(wukong.title);
// 5. 调用被引用模块的私有方法
console.log(wukong.feedHorse());
