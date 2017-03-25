
var http = require('http');

var server = http.createServer(function serverHandler(req, res) {
    //输入内容的获取
    // req ---> request
    console.log(req);
    var urlStr = req.url;       //资源
    var method = req.method;    //请求的方法






    res.write('wu\tkong \n'); //返回数据
    res.write('bajie '); //返回数据
    res.write('shaheshang '); //返回数据
    res.write('sanzang '); //返回数据

    res.end('hello world1');    //结束本次访问，同时把数据返回回去
    // res.end('hello world2');
    // res.end('hello world3');


    // res.write('shaheshang '); // 在 end 时候 就不能在发送数据了

}).listen(3000, function () {
    console.log('server started');
});

//
// setTimeout(function () {
//     server.close(); //关闭服务器
// }, 2000);
//









