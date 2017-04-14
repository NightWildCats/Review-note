/**
 * Created by Administrator on 2017/4/12/012.
 */

var router = require('express').Router();
//文件路径
var path = require('path');
//文件上传包
var multer = require('multer');
//设置文件路径
var PATH_FILE = '../public/upload_files';
//上传的目的地
var upload = multer({dest: PATH_FILE});  //destination   目的地

//设置目录相关信息
//简单的单个文件上传
router.post('/uploadSingleFile', upload.single('sfile'), function (req, res, next) {
  res.send('上传成功');
});



module.exports = router;