var express = require('express');
var fs = require('fs');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.send('hello, this is index page');
});

//ajax get 处理
router.get('/xiaoxiong/get', function (req, res, next) {
  var username = '你好，你已经测试ajax成功了，你现在已经实现了异步无刷技术，祝你使用愉快！';
  console.log(username);
  res.send(username);
});

//ajax post 处理
router.post('/xiaoxiong/post', function (req, res, next) {
  var str = req.body.username;
  console.log(str);
  res.send('我会把刚才的请求在返回给你----->' + str);
});

// 异步无刷 验证用户名
var fs = require('fs');
router.get('/xiaoxiong/check', function (req, res, next) {
  fs.readFile('../good.json', function (err, data) {
    if (err) {
      res.send('系统验证失败')
    } else {
      var dataStr = data.toString();
      var dataObj = JSON.parse(dataStr);
      if ('wukong' === req.query.username) {
        res.send(dataObj[1]);
      } else {
        res.send(dataObj[0]);
      }
    }
  })
});


//省市联动

//读取中国城市json
var china = require('../china.json');
// console.log(china.province);
// console.log(china.city);
// console.log(china.county);

//自动读取省
router.get('/province', function (req, res, next) {

  var obj = {
    province: china.province
  };
  res.send(obj);

});
//获取 市

router.get('/city', function (req, res, next) {
  var provinceId = req.query.provinceID;
  //根据 cityId 的值 来查询有哪些关联的 市级城市
  // {"id":"86","city":"邯郸市","parent":"36"}
  //把返回的信息以 { [ ] } 的形式返回
  var ctiyArr = [];
  china.city.forEach(function (city) {
    if (city.parent === provinceId || city.id === provinceId) { //
      ctiyArr.push(city);
      console.log(city)
    }
  });

  //整理返回的信息
  var obj = {
    ctiyArr: ctiyArr
  };
  res.send(obj);
});

//获取 区县
router.get('/county', function (req, res, next) {
  //读取返回的市级城市 id
  var selCitId = req.query.cityID;
  var countyArr = [];

  //遍历 {"id":"3","county":"东城区","parent":"2"}
  china.county.forEach(function (county) {
    if (county.parent === selCitId) {
      countyArr.push(county);
      console.log(countyArr);
    }
  });
  var obj = {
    countyArr: countyArr
  };
  res.send(obj);

});


//测试原生的js跨域请求  -- 原生的js只能发送 get请求
router.get('/jsonp', function (req, res, next) {
  var username = req.query.username;

  var arg = {
    p1: 2,
    p2: 1
  };
  if ('wukong' === username) {
    res.send('callback(' + arg.p1 + ');');
  } else {
    res.send('callback(' + arg.p1 + ');');
  }

});

//使用 jQuery 进行跨域 请求
router.get('/jQuery', function (req, res, next) {
  var callback = req.query.callback;
  var username = req.query.username;
  var obj1 = {
    result: 1
  };
  var obj2 = {
    result: 2
  };
  if ('wukong' === username) {
    var p2 = JSON.stringify(obj2);
    res.send(callback + '(' + p2 + ');');
  } else {
    var p1 = JSON.stringify(obj1);
    res.send(callback + '(' + p1 + ');');
  }
});

// 使用 cors 的方式进行 跨域 请求  --不用在浏览器端设置任何语句

router.post('/cors', function (req, res, next) {
  var username = req.body.username;
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log(username);
  if ('wukong' === username) {
    res.send('不可用');
  } else {
    res.send('可用');
  }

});


// 信息管理系统
//员工基本信息 路由
router.get('/getWorkerInfo', function (req, res, next) {
  var info = {
    name: 'wukong',
    age: 2000
  };
  var timeDely = Math.floor(Math.random() * 1000 * 5);
  setTimeout(function () {
    res.send(info);
  }, timeDely);
});


//员工工资 路由
router.get('/getWorkerSalary', function (req, res, next) {
  var info = {
    name: 'wukong',
    salary: 500
  };
  var timeDely = Math.floor(Math.random() * 1000 * 5);
  setTimeout(function () {
    res.send(info);
  }, timeDely);
});


//员工考勤 路由
router.get('/getWorkerAttendance', function (req, res, next) {
  var info = {
    name: 'wukong',
    Attendance: 'late'
  };
  var timeDely = Math.floor(Math.random() * 1000 * 5);
  setTimeout(function () {
    res.send(info);
  }, timeDely);
});


module.exports = router;
