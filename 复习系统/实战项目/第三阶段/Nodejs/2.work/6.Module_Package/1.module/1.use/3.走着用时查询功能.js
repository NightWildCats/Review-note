
/*
 查出两个城市之间 走着到达需要的时间
 时间 = 距离 / 速度

 走着的速度： 快步走 8公里/小时
 */

var dis = require('./4.distance_calculation.js');

function getTimeInterval(departure, destination) {
    var distance;
    distance = dis.getDistance(departure, destination);;
    var interval = distance / 8;
    return interval;
}


var time = getTimeInterval('beijing', 'shanghai');
console.log(time);











