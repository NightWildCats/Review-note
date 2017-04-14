
//ajax get xml
var PATH = './province.xml';
router.get('/node_ajax/test/xml', function (req, res, next) {
    //1. 获取请求参数
    //2. 处理数据, 加载xml数据返回
    fs.readFile(PATH, function (err, doc) {
        if(err){
            console.error(err);
        }else {
            res.set('content-type', 'text/xml;charset=utf-8');//告诉客户端(Ajax引擎)返回的xml
            res.send(doc.toString());
        }
    });
});