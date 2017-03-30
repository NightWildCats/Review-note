

/*
    需求：
        使用原生方式打印当前日期
        1. YYYY-MM-DD
        2. MM-DD-YYYY
        3. 如果求两个日期之间相距几天，应该怎么做
        4. 如果求两个时刻之间差距几分钟，应该怎么做



    API :    http://www.w3school.com.cn/jsref/jsref_obj_date.asp
    各种时间操作： http://www.cnblogs.com/mingmingruyuedlut/archive/2011/10/12/2208564.html
 */
var moment = require('moment');
moment().format('YYYY-MM-DD');
// console.log(moment);
console.log(moment().format('YYYY-MM-DD'));


//计算时间差  -- 等待结果
moment([2007, 0, 29]).fromNow();
console.log(moment([2007, 0, 29]).fromNow());


