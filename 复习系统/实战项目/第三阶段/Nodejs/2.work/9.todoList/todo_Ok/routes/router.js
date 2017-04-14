var router = require('express').Router();
var todoLogic = require('../business_logic/todo_logic.js');
var path = require('path');

router.get('/', function (req, res, next) {
    res.redirect('/login'); // 发出一个 get /login 请求
});



//获取注册页面
router.get('/register', todoLogic.checkIsLogined);
router.get('/register', todoLogic.getRegister);

//提交信息
router.post('/register', todoLogic.postRegister);

//登录
router.get('/login', todoLogic.checkIsLogined);
router.get('/login', todoLogic.getLogin);

router.post('/login', todoLogic.postLogin);

//登出
router.get('/logout', todoLogic.logout);





//添加 待办事宜
router.post('/addItem', todoLogic.addItem);

//item 设置完成状态
router.get('/finish/:id', todoLogic.finishItem);

//删除 item
router.get('/delete/:id', todoLogic.deleteItem);

//修改 item get
router.get('/edit/:id', todoLogic.editItemGet);

//修改 item post
router.post('/edit/:id', todoLogic.editItemPost);



//引入
var multer  = require('multer');
var dirpath = path.join(__dirname, '../public', 'avatars');
// console.log(__dirname);
// console.log(dirpath);

var storage = multer.diskStorage({
    //文件夹路径
    destination: function (req, file, cb) {
        cb(null, dirpath);
    },
    //文件名
    filename: function (req, file, cb) {
        var fileName = req.session.userInfo.userName; // A id name
        cb(null, fileName);
    }
});

var upload = multer({ storage: storage });

//跳转到 上传 头像的页面
router.get('/upload_avatar', todoLogic.uploadAvatar);

//获得上传数据 avatar
router.post('/upload_avatar', upload.single('avatar'), todoLogic.uploadAvatarPost);


//404 页面未找到
router.all('*', todoLogic.pageNotFound);








module.exports = router;











