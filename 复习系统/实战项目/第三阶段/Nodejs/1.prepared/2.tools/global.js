

// console.log(global); //浏览器  window


function test() {
    var a = 0;
    global.b = 7; //污染全局空间
    c = 9;

}
test();
console.log(global.b);
console.log(b);