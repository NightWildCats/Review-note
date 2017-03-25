
/**
 * 引入一个 http 模块的对象
 * @type {exports|module.exports}
 */
var http = require('http');

/**
 * 处理每一个访问的回调
 * @param {Object} req 请求对象，携带所有和请求有关的信息
 * @param {Object} res 响应对象，处理响应
 */
function serverCallBack(req, res) {
    res.end('<h1>hello world</h1>');
}
/**
 * 处理服务监听某个端口后的回调
 */
function listenCallBack(){
    console.log('server set up');
}

/**
 * http.createServer创造一个服务器实例
 * @param {Function} serverCallBack  服务器的回调处理函数。
 *                                   这个处理函数是服务器提供服务的真正的入口。
 *                                   每个从浏览器来的访问请求，都会被这个回调函数处理。
 *                                   服务器的主要目的是为提供商业服务，而商业处理逻辑的入口就是这个函数。
 *                                   我们写好了这个函数，就是写好了服务器的最重要的内容
 */
var server = http.createServer(serverCallBack);

var port = 3000; //端口号

/**
 * server 试图监听端口
 * @param {Number} port 端口号。listen 函数向操作系统提出申请，申请 port 这个端口号，本代码中的值是 3000
 * @param {Function} listenCallBack 回调函数。当操作系统讲这个端口号分配给了本服务的时候，listenCallBack 会被调用，通常用来打印一段话，表示服务已经启动
 */
server.listen(port, listenCallBack);
