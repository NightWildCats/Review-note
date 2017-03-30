



/*
 北京到上海的距离 1463 公里
 北京到深圳的距离 2372 公里
 ...
 ...
 */


function getDistance(departure, destination) {
    var result = 0;
    if('beijing' === departure && 'shanghai' === destination ){
        result = 1463;
    }else if('beijing' === departure && 'shenzhen' === destination ){
        result = 2372;
    }else {
        result = null
    }
    return result;
}

//暴露
exports.getDistance = getDistance; // 使用此方式暴露出来的都是封装在一个对象中，以键值对形式存在

// 也可以使用 module.exports 来进行暴露










