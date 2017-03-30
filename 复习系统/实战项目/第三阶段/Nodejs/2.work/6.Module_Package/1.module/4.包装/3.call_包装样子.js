/**
 *  node 不是直接执行 js 文件， 而是先包装起来再执行
 *  包装过程：
 *      1. 把 js 中的代码拷贝到一个新函数中
 *      2. 这个函数是一个立即执行函数
 *      3. 这个函数具有 5个 参数
 *          exports, require, module, __filename, __dirname
 *      4. 平时使用的     exports, require, module 就来源与这些参数
 *      5. __filename, __dirname 分别表示 当前的工作文件和当前的工作目录
 */





(function (exports, require, module, __filename, __dirname) {

    //引入模块
    var o1 = require('./1.module.js');

    //日常代码
    console.log(o1);
    var i = 0;
    i++;

    //向外暴露
    exports.add = function (op1, op2) {
        return op1 + op2;
    }


})();




console.log(__filename); //当前的文件名
console.log(__dirname); //当前的工作目录







