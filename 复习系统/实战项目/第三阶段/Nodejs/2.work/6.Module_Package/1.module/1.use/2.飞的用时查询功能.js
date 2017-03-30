
/*
 查出两个城市之间 飞机到达需要的时间
 时间 = 距离 / 速度

 飞机的速度： 一般平均运营时速在 800公里/小时
 */

var dis = require('./4.distance_calculation.js');


function getTimeInterval(departure, destination) {
    var distance;
    distance = dis.getDistance(departure, destination);
    var interval = distance / 800;
    return interval;
}


var time = getTimeInterval('beijing', 'shanghai');
console.log(time);



