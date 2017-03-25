
var http = require('http');

var server = http.createServer(function serverHandler(req, res) {

   /* res.writeHead(404, 'OKKKKKK', {
        'Content-Type' : 'text/html; charset=utf-8'
        // 'Content-Type' : 'text/plain; charset=utf-8'
    });*/

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // res.removeHeader('Content-Type');
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    var header = res.getHeader('Content-Type');
    console.log(header);

    res.end('<h1>西天取经</h1>');

}).listen(3000, function () {
    console.log('server started');
});






