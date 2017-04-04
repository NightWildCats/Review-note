
//引入包
var router = require('express').Router();

//处理获得的首页
/**
 * 可以使用 use 进行前导继承 这样就不会造成经常出现 404 页面 本来404 就是一个让人奔溃的页面
 * 但是 依据用户的体验来说，是希望只要我的ip加端口正确了，后面的路径不管是什么，都定位到首页上
 * 使用 use 这样做的优势有：可以保证系统文件的保密性，从一个入口进，方便维护/管理
 */
router.use('/',function (req,res,next) {
  res.redirect('index.html');
});

//处理 404 页面
/**
 * 说明：在首页定位使用get的方式获取地址 当地址Ip和端口正确，文件的路径不正确，会导致返回404 页面
 * 在这里根据实际需求 把上面获取首页的 ‘get方式’ 改为 ‘use前导的方式’
 */
router.all('*',function (req,res,next) {
  res.redirect('over/index.html');
});

//向外暴露
module.exports = router;
