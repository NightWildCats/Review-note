
// ajax get
router.get('/node_ajax/test/get', function (req, res, next) {
    //1. 读取请求参数(url上)
    var username = req.query.username;

    console.log('get username='+username);
    //2. 处理
    var result = 'hello, '+username;
    //3. 返回响应
    res.send(result);
});


