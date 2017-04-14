var express = require('express');
var fs = require('fs');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.send('hello, this is index page');
});


// ajax get
router.get('/node_ajax/test/get', function (req, res, next) {
    //1. 读取请求参数(url上)
    var username = req.query.username;

    console.log('get username='+username);
    //2. 处理
    var result = 'hello, '+username;
    //3. 返回响应
    res.send(result);
});


//ajax post
router.post('/node_ajax/test/post', function (req, res, next) {
    //1. 读取请求参数(请求体)
    var username = req.body.username;
    var password = req.body.password;
    console.log('post username='+username+" password="+password);
    //2. 处理
    var result = 'HELLO,  '+username;
    //3. 返回响应
    res.send(result);
});

//ajax get 异步与同步
router.get('/node_ajax/test/async_sync', function (req, res, next) {
    //获取请求参数
    var username = req.query.username;
    //处理数据
    console.log('async_sync username='+username);

    //在主线程不断运行2s
    var startTime = new Date().getTime();
    while(new Date().getTime()-startTime<2000) {

    }

    //返回结果
    res.send('你好, ' + username);
});


//ajax post 异步与同步
router.post('/node_ajax/test/async_sync2', function (req, res, next) {
    //获取请求参数
    var username = req.body.username;
    //处理数据
    console.log('async_sync username='+username);

    //在主线程不断运行2s
    var startTime = new Date().getTime();
    while(new Date().getTime()-startTime<2000) {
    }
    //返回结果
    res.send('你好222, ' + username);
});




router.get('/checkusername', function (req, res, next) {

    var userName = req.query.username;
    var result1 = '<span style="color:green"> 可用</span>'
    var result2 = '<span style="color:red"> 不可用</span>'

    //没有返回 可用
    if('wukong' === userName){
        res.send(result2);
    }else {
        res.send(result1);
    }

});


/*


var fs = require('fs');
var path = '../data.json';
router.get('/cities', function (req, res, next) {
    fs.readFile(path, function (err, data) {
        if(err){
            var obj = {
                status: 'error'
            };
            res.send(obj);
        }else {
            var dataStr = data.toString();      //json 字串
            var dataObj = JSON.parse(dataStr);

            var obj = {
                status: 'ok',
                data : dataObj
            };
            res.send(obj);      //send 函数自动检查参数，如果参数是一个对象，那么，自动将对象转化为 json字串
        }
    });
});

*/


//ajax get xml
var PATH = '../province.xml';
router.get('/dalian', function (req, res, next) {
    //1. 获取请求参数
    //2. 处理数据, 加载xml数据返回
    fs.readFile(PATH, function (err, doc) {
        if(err){
            console.error(err);
        }else {
            res.set('content-type', 'text/xml;charset=utf-8');//告诉客户端(Ajax引擎)返回的xml
            res.send(doc.toString());
        }
    });
});

router.get('/checkusername2', function (req, res, next) {
    var userName = req.query.username;

    //业务逻辑  wukong
    if(userName === 'wukong'){
        var obj = {
            status: 'ok',
            data: 2     //已经被注册过了
        };
        res.send(obj);  //自动转化，网络接收字符串，
    }else {
        var obj = {
            status: 'ok',
            data: 1     //可用
        };
        res.send(obj);  //自动转化，网络接收字符串，
    }
});

router.post('/checkusername2', function (req, res, next) {
    var userName = req.body.username;

    //业务逻辑  wukong
    if(userName === 'wukong'){
        var obj = {
            status: 'ok',
            data: 2     //已经被注册过了
        };
        res.send(obj);  //自动转化，网络接收字符串，
    }else {
        var obj = {
            status: 'ok',
            data: 1     //可用
        };
        res.send(obj);  //自动转化，网络接收字符串，
    }

});


var china_area = require('../china_area.json'); //使用 json
// console.log(china_area.provinces);
router.get('/provinces', function (req, res, next) {

    var obj = {
        provinces: china_area.provinces
    };

    res.send(obj);
});

router.get('/cities', function (req, res, next) {
    var provinceId = req.query.provinceId;
    var cities = [];    //push

    china_area.cities.forEach(function (city) {
        // {"id":"86","city":"邯郸市","parent":"36"}
        if(city.parent === provinceId || city.id === provinceId){
            cities.push(city);
        }
    });

    var obj = {
        cities: cities
    };
    res.send(obj);
});

router.get('/counties', function (req, res, next) {
    var cityId = req.query.cityId;
    var counties = [];

    china_area.counties.forEach(function (county) {
        // {"id":"7","county":"石景山区","parent":"2"}
        if( cityId === county.parent ){
            counties.push(county);
        }
    });

    var obj = {
        counties: counties
    };
    res.send(obj);
});















module.exports = router;
