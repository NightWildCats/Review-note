
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
