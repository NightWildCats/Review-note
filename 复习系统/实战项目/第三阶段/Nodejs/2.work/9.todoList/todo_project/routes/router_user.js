var router = require('express').Router();

var userLogic = require('../business_logic/logic_user.js');
var itemLogic = require('../business_logic/logic_item.js');

//登录
router.post('/login', userLogic.postLogin);

//注册
router.post('/register', userLogic.postRegisiter);

//添加待办事项
router.post('/addItem', itemLogic.addItem);

//完成状态
router.get('/finish/:id',itemLogic.ItemOk);
//修改
router.get('/edit/:id',itemLogic.ItemUpdateget);
router.post('/edit/:id',itemLogic.ItemUpdatePost);
//删除
router.get('/delete/:id',itemLogic.ItemDelete);


module.exports = router;






