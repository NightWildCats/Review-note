/*
 1. 获得 form 表单的数据
 2. 当用户名密码正确后显示 welcome 否则显示 something wrong
 用户名：bajie
 密码：654321
 3. 使用 url 模块


 */
//引入包
var http = require('http');
var url = require('url');
var fs = require('fs');
var db = require('./dao/db.js');
var LOG_FILE = './log.txt';


//创建服务器
var server = http.createServer(function serverHandler(req, res) {
    // console.log('aaa';
    //获得文件路径
    var urlStr = req.url;
    var urlObj = url.parse(urlStr, true);
    var pathName = urlObj.pathname;

    //路由
    switch (pathName){
        //显示页面
        case '/user/newuser/login.html':
            // res.end('首页');
            var formPath = './form.html';
            fs.readFile(formPath, function (err, data) {
                if(err){
                    console.error(err);
                    res.statusCode = 404;
                    res.end('网络错误，稍后重试');
                    //打电话， 修程序
                }else {
                    //data  buffer类型
                    res.end(data);
                }
            });
            break;
        //登录逻辑
        case '/login':
            var userName = urlObj.query.userName;
            var password = urlObj.query.password;

            //去数据库查询    获得结果集
            //  1. 能查到数据 ---> 密码是否匹配 ---> 匹配成功，返回欢迎回来
            //  2. 如果查不到数据  --->    请去注册

            //1.根据用户名查数据库
            // 伪代码  汉语描述功能需求    ---> 伪代码    ---> 真代码
            /*
            if(找到了用户名){
                if(密码 匹配 ){
                    返回：欢迎回来
                }else {
                    返回：用户名或密码错误
                }
            }else {
                返回：请去注册
            }
*/
            //使用回调函数来处理，在异步处理需要使用回调函数的方式
            db.findUser(userName, handler );


            //错误优先
            function handler(err, doc) {     //从数据库得到的对象
                if(err){
                    console.error(err);
                    res.end('网络错误');
                }else {
                    // 找到了用户名
                    if(doc){
                        //密码是否相等
                        if(password === doc.password ){
                            // 返回：欢迎回来
                            res.end('欢迎' + userName + '回来');
                        }else {
                            // 返回：用户名或密码错误
                            res.end('用户名或密码错误');
                        }
                    }else {
                        // 返回：请去注册
                        res.end('请去注册');
                    }
                }
            }





/*
            if('wukong' == userName){
                res.end('欢迎');
                var date = new Date();
                var data = userName + '\t登录\t' + date.toDateString();
                fs.writeFile(LOG_FILE, data, function (err) {
                    if(err){
                        console.error(err);
                    }else {
                        //data  buffer类型
                        console.log('log 完成');
                    }
                });
            }else {
                res.end('请去注册');
            }*/

            break;
        //处理小图标
        case '/favicon.ico':
            var iconPath = './favicon.ico';
            fs.readFile(iconPath, function (err, data) {
                if(err){
                    console.error(err);
                }else {
                    //data  buffer类型
                    res.end(data);
                }
            });
            // res.end('tubiao');
            break;
        //没找到
        default:
            res.statusCode = 404;
            res.end('404 not founds');
    }


}
).listen(3008, function () {
    console.log('server started');
});









