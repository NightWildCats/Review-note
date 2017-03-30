
/*
    需求：
        1.引入模块
        2.打印引入的对象，并且观察结果


    更进一步：
        如果确实想不采用名值对的形式还要向外暴露数组/对象，改怎么办？？

 */

var arr =  [1, 2, 3, 4];
var wukong = {
  home : '花果山',
  weapon : '金箍棒',
  car : '筋斗云'
};

//通过 module.exports 的方式暴露
module.exports = wukong;
//注意 ；也可以单独暴露一个变量或者对象 ， 示例如下：
/*
* module.exports = {
               home : '花果山',
               weapon : '金箍棒',
               car : '筋斗云'
               };
*
*
* */