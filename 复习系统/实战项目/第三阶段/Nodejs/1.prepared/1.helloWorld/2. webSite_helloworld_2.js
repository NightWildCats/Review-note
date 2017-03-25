//工程中的写法
var http = require('http');


http.createServer(function (req, res) {
    res.end('<h1>hello world</h1>');
}).listen(3000,  function(){
    console.log('server started');
});

//
// listen EADDRINUSE :::3000
// E           error
// ADDR        address
// IN USE      in use