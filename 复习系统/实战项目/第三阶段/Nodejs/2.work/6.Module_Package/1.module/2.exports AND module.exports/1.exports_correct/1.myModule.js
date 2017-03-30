/*
    需求：
        描述孙悟空的相关信息
        1. 向外暴露属性和方法
            属性：
                name    字符串
                info    对象（包括 home， weapon 等信息）
            方法：
                flyFun  函数
                        向外暴露具有名字的函数
                        向外暴露没有名字的函数
        2. 不向外暴露属性和方法
            不能被外界访问的私有属性和私有方法
                不想被外人知道的    horse   诨号： 弼马温
                不想被外人调用的       官职：

     语法：
         exports.名 = 值
         exports.name = value

 */

var name = 'wukong';
exports.name = name;
exports.age = 2000;

exports.info = {
    home: 'huaguoshan',
    weapon: 'bang'
};

exports.flyFun = function () {
    console.log('fei')
};

//私有属性
var title = 'horse';
//私有方法
function feedHorse() {
    console.log('yang ma');
}










