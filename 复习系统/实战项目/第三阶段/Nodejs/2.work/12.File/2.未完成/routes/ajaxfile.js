/**
 * Created by Administrator on 2017/4/12/012.
 */
var router = require('express').Router();
var multer = require('multer');
var path = require('path');

//设置磁盘存储信息
var distStorage = multer.diskStorage({
  destination: setDirectoryInfo,    //函数，设置目录相关信息
  filename: setFileInfo             //函数，设置文件相关信息
});
//生成上传中间件，以后使用
var upload = multer({storage: distStorage});
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
//异步读取文件和加载进度条
router.post('/file', upload.single('ajaxfile'), function (req, res, next) {
  res.send('ajax异步上传文件成功');
});


module.exports = router;