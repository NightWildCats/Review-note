
//引入模块
var o1 = require('./1.module.js');

//日常代码
console.log(o1);
var i = 0;
i++;

//向外暴露
exports.add = function (op1, op2) {
    return op1 + op2;
};