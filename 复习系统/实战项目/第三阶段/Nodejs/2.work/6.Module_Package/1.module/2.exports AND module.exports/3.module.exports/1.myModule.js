
/*
    需求
        八戒的所有信息都已经被封装到一个对象中了。
        1. 使用 module.exports 向外暴露 八戒 的相关信息
        2. 使用 exports 向外暴露 八戒 的相关信息


        exports 与 module.exports 的区别
            exports 必须使用名值对的方式向外暴露数据；但是书写方便
            module.exports 可以使用名值对的形式，也可以直接暴露一个对象；书写繁琐

 */

var bajie = {
    name : 'bajie',
    age : 2000,
    home : '高老庄',
    skill : function () {
        console.log('巨能吃');
    }
};















