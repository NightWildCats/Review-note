
//ajax get json
var PATH = './data.json';
router.get('/node_ajax/test/json', function (req, res, next) {
    //1. 获取请求参数
    //2. 处理数据, 加载json数据返回
    fs.readFile(PATH, function (err, doc) {
        if(err){
            console.error(err);
        }else {
            //在网上发的数据文本类型   js obj
            res.send(doc.toString());
        }
    });
});