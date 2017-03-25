/*
console.log('aaa');



var obj = {
    name: 'wukong',
    age: 12
};

console.log('info:', obj);


*/
/*

console.log('取经');
console.info('还去取经'); //log  info 别名

console.warn('大师兄，师傅被妖怪抓走了');
console.error('大师兄，二师兄被妖怪抓走了');   //互为别名



function CCC() {
    console.trace('出错了'); //足迹
}

function BBB() {
    CCC();
}

function AAAA() {
    BBB();
}

AAAA();*/


console.time('timeeeee');
var i = 0;
while (true){
    i++;
    if ( i > 10000000){
        break;
    }
}
console.timeEnd('timeeeee');