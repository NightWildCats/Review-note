
var http = require('http');

var server = http.createServer(function serverHandler(req, res) {
    //获得用户的输入       文件路径
    var urlStr = req.url;
    console.log(urlStr);
/*

    '/'                 //首页        领先的 Web 技术教程
    '/html/index.asp'   //html       html教程
    '/html/html_intro.asp' //jian    html简介
*/

    // 路由 由路径找到资源    route    router
    switch (urlStr){
        case '/':
            //逻辑
            res.writeHead(200, 'ok', {
                'content-type': 'text/html;charset=utf-8'
            });
            res.end('领先的 Web 技术教程');
            break;
        case '/html/index.asp':
            //逻辑
            res.writeHead(200, 'ok', {
                'content-type': 'text/html;charset=utf-8'
            });
            res.end('html教程');
            break;
        case '/html/html_intro.asp':
            res.writeHead(200, 'ok', {
                'content-type': 'text/html;charset=utf-8'
            });
            res.end('html简介');
            break;
        default:
            res.writeHead(404, 'not found', {
                'content-type': 'text/html;charset=utf-8'
            });
            res.end('404 网页没找到');
    }

    // res.end('hello');

}).listen(3000, function () {
    console.log('server started');
});






