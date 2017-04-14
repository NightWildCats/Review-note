
//ajax get 异步与同步
router.get('/node_ajax/test/async_sync', function (req, res, next) {
    //获取请求参数
    var username = req.query.username;
    //处理数据
    console.log('async_sync username='+username);

    //在主线程不断运行2s
    var startTime = new Date().getTime();
    while(new Date().getTime()-startTime<2000) {

    }

    //返回结果
    res.send('你好, '+username);
});


//ajax post 异步与同步
router.post('/node_ajax/test/async_sync2', function (req, res, next) {
    //获取请求参数
    var username = req.body.username;
    //处理数据
    console.log('async_sync username='+username);

    //在主线程不断运行2s
    var startTime = new Date().getTime();
    while(new Date().getTime()-startTime<2000) {
    }
    //返回结果
    res.send('你好222, '+username);
});