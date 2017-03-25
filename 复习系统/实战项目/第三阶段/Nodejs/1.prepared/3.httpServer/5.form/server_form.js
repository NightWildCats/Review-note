
//数据库 会员 1个     bajie   654321

var http = require('http');
var url = require('url');   //解析处理 url 字符串

var server = http.createServer(function serverHandler(req, res) {

    var urlStr = req.url;
    console.log(urlStr);

    //获得用户输入的数据
    var urlObj = url.parse(urlStr, true);   //参数：字符串    参数：true     返回值是一个 对象
    console.log(urlObj);
    var userName = urlObj.query.username;
    var password = urlObj.query.password;

    //服务器逻辑
    if('bajie' === userName && '654321' === password){
        res.end('welcome');
    }else {
        res.end('something wrong');
    }



    // res.end(urlObj.toString());


}).listen(3000, function () {
    console.log('server started');
});






