
var http = require('http');

var server = http.createServer(function serverHandler(req, res) {
    res.end('hello world');
}).listen(3000, function () {
    console.log('server started');
});


setTimeout(function () {
    server.close(); //关闭服务器
}, 2000);










