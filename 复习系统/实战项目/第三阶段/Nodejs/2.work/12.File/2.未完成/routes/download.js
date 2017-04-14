/**
 * Created by Administrator on 2017/4/12/012.
 */
var router = require('express').Router();
var multer = require('multer');
var path = require('path');

router.get('/download',function (req, res, next) {
  //拼凑文件路径
  var dir = path.join(__dirname,'../','public', 'upload_files');
  var fileDir = path.join(dir,'ajaxsfiles_1492002122004.xml');
  //返回对应的文件
  res.download(fileDir);

});






module.exports = router;