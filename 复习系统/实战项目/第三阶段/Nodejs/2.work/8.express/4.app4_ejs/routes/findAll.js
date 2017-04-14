//实现查询成功之后的逻辑处理
var router = require('express').Router();

//引入包 db
var db = require('../dao/db.js');

//显示所有的页面
router.get('/findAll', function (req, res, next) {
  //返回来的值为一个数组 数组也是一个对象
  var fall;
  db.findAll(function (err,doc) {
    console.log(doc);
    fall = doc;
    var user = {
      all: fall
    };
    res.render('fall.ejs', user);
  });
});

//向外暴露
module.exports = router;


//未成功-----2017.4.6已经修改成功

