
var router = require('express').Router();
var path = require('path');
/*

var multer  = require('multer');
// var path = '../public/upload_files';
// var upload = multer({ dest: path });  //destination   目的地
*/

//引入 multer
var multer = require('multer');                     //上传文件的包
//设置磁盘存储信息
var distStorage = multer.diskStorage({
    destination: setDirectoryInfo,    //函数，设置目录相关信息
    filename: setFileInfo             //函数，设置文件相关信息
});
//生成上传中间件，以后使用
var upload = multer({ storage: distStorage });
//设定文件存储的位置，程序员需要提前建立好这个文件夹
var DIRECTORY_PATH = '../public/upload_files';
//设置目录相关信息
function setDirectoryInfo(req, file, cb) {
    //回调函数的固定写法
    cb(null, DIRECTORY_PATH);   //错误优先
}
//设置文件相关信息
function setFileInfo(req, file, cb) {
    var fileName = file.fieldname;  // 浏览器上传时候的 input 标签的 name 值
    fileName += '_' + Date.now();   // 保证文件名不会重复，否则就会覆盖
    var originalName = file.originalname;             //用户上传文件的原名
    var extensionName = path.extname(originalName);   //获得扩展名
    fileName += extensionName;      //拼接扩展名
    cb(null, fileName);             //回调函数的固定写法
}

/*------------------------------------------  文件上传 处理---------------------------*/

router.get('/', function (req, res, next) {

    res.send('aaaa');
});

router.post('/uploadSingleFile', upload.single('avatar'), function (req, res, next) {
    res.send('上传成功');
});

var arr = [{name: 'avatar', maxcount: 3 }, {name:'photo', maxcount:1}, {name:'picture', maxcount:1}];
router.post('/uploadMultiFile', upload.fields(arr), function (req, res, next) {
    res.send('多文件，上传成功');
});

router.get('/download', function (req, res, next) {

    var dir = path.join(__dirname, '../', 'public', 'upload_files');
    var filePath = path.join(dir, 'avatar_1491977733892.wmv');
    console.log(filePath);

    res.download(filePath);
});

router.get('/download_img', function(req, res, next) {

    var num = req.query.num;        // 1    '1'
    var fileName = null;

    if(num === '1'){
        fileName = 'elephant.jpg';
    }else if(num === '2'){
        fileName = 'ocean.jpg';
    }

    var dir = path.join(__dirname, '../', 'public', 'imgs');
    // var filePath = path.join(dir, 'elephant.jpg');
    var filePath = path.join(dir, fileName);
    console.log(filePath);

    res.download(filePath);
});

module.exports = router;










