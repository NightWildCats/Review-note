/*
    TODO 函数的定义
    TODO * 函数定义具有几种方式:
    TODO *
 */
/*// TODO 直接量方式定义
function fn(){}
// TODO 表达式方式定义
var fn = function(){}
// TODO ？*/

/*
// TODO 作为一个函数的参数形式存在的函数
var one = function(){return 1;}
var two = function(){return 2;}

function fn(a,b){
    return a() + b();
}

fn(one, two);//output 3
// TODO 匿名回调函数
fn(function(){return 1;},function(){return 2;});*/

/*
    TODO 自调函数 - 只定义不调用
    TODO * 第一个小括号 - 表示定义函数
    TODO * 第二个小括号 - 表示调用函数(可以传递实参)
    TODO 作用 - 可以将所有全局内容改为局部
 */
/*(function(){

})();*/

// TODO 内部函数
function fn(){
    var a = 1;
    return function(){
        var b = 2;
        return a + b;
    }
}

var fun = fn();//TODO Function
console.log(fun());

//console.log(fn()());