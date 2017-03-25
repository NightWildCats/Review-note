//引入各种包
var http = require('http');
var url = require('url');
var fs = require('fs');
var sum = 0;
var counter = 0;
var average = 0;
var str = null;

//创建服务器
http.createServer(function serverHandler(req, res) {
    var urlStr = req.url;
    var urlObj = url.parse(urlStr, true);
    var userName = urlObj.query.userName;
    var myNumber = +urlObj.query.myNumber;
    console.log(urlStr);


    //路由    url中的文件路径   资源（静态资源，计算资源）
    var pathName = urlObj.pathname;
    switch (pathName){  //加减乘除
        case '/a/b/index.html':
            var txt = 'hello world';
            var pagePath = 'calculate_page.html';
            fs.readFile(pagePath, function (err, data) {
                if(err){
                    res.end('file error');
                }else {
                    res.end(data);
                }
            });
            break;
        case '/hongbao':
            // wukong   12
            counter++;
            sum += myNumber;
            str = userName + '\t' + myNumber;
            printLog(str, res);
            break;
        case '/ave':
            average = sum / counter;
            str = '' + average * 2 /3;
            str += '\t' + counter;
            printLog(str, res);
            break;
        case '/favicon.ico':
            var iconPath = 'favicon.ico';
            fs.readFile(iconPath, function (err, data) {
                if(err){
                    res.end('icon error');
                }else {
                    res.end(data);
                }
            });
            break;
        case '/css.css':
            var cssPath = './css/css.css';
            fs.readFile(cssPath, function (err, data) {
                if(err){
                    res.end('css error');
                }else {
                    res.end(data);
                }
            });
            break;
        default:
            res.statusCode = 404;
            res.end('404 not found');
    }
}).listen(3000, function () {
    console.log('sever started');
});

function printLog(str, res) {

    var path = './log.txt';
    str += '\n';
    fs.writeFile(path, str, {flag: 'a'}, function (err) {
        if(err){
            console.error(err);
        }else {
            console.log('写完了');
            res.end(str);
        }
    });

}