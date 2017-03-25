
var http = require('http');

var server = http.createServer(function serverHandler(req, res) {
    //输入内容的获取
    // req ---> request
    console.log(req);
    var urlStr = req.url;       //资源
    var method = req.method;    //请求的方法







    res.end('hello world');

}).listen(3000, function () {
    console.log('server started');
});

//
// setTimeout(function () {
//     server.close(); //关闭服务器
// }, 2000);
//









