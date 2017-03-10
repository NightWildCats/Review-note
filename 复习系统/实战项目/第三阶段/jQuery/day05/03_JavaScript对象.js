// TODO 对象的定义 - 只能创建一个对象
/*var obj = {}
/!*
    TODO 通过构造函数 - 创建多个对象
    TODO * 构造函数具有特殊属性 - 原型
  *!/
function Hero(){
    this.name = 'zhangwuji';// 自身属性
    this.sayMe = function(){
        console.log('this is zhangwuji');
    }
}*/

/*Hero.prototype = {
    name : 'zhouzhiruo'// 原型属性
}*/

/*Hero.prototype.name = 'zhouzhiruo';

var hero = new Hero();
console.log(hero.name);// zhangwuji

delete hero.name;// 删除操作
console.log(hero.name);// zhouzhiruo*/

// TODO 继承 - 儿子延续父亲
function Parent(){
    this.work = function(){
        console.log('this is work.')
    }
}
var p = new Parent();

function Child(){}

Child.prototype = p;

var c = new Child();

c.work();