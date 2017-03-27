/*
	1. 路由
		url文件路径和资源的映射关系
		由 文件路径 铺设一条路找到 资源
	2. 使用if else 语法
	3. 使用 switch  case 语法
*/
var http = require('http');

var server = http.createServer(function serverHandler(req, res) {
    var url = req.url;
  /**
	 * 设置文件目录
	 * ① / 根目录
	 * ② /html.html
	 * ③ /js.html
	 * ④ /node.js
   */
		res.writeHead(200,'OK',{
			'Content-Type': "text/html;charset=utf-8"
		});


    // 通过 if 模式进行资源路由
  /**
   if (url ==='/') {
			res.end('这是一个根标签');
		} else if (url === '/html.html') {
			res.end('这是一个html页面');
		}else if (url === '/js.html') {
      res.end('这是一个html页面');
    }else if (url === '/node.js') {
      res.end('这是一个html页面');
    } else {
			res.statusCode = 404;
			res.end('not found');
		}
   */

		// 通过 switch 模式进行资源路由
	switch (url) {
		case '/':
      res.end('这是一个根标签');
			break;
    case '/html.html':
      res.end('这是一个html标签');
      break;
    case '/js.html':
      res.end('这是一个js标签');
      break;
    case '/node.js':
      res.end('这是一个node标签');
      break;
		default:
      res.statusCode = 404;
      res.end('not found');
	}
	

}).listen(3000, function () {
    console.log('server started');
});






