/*
 测试post类型的Ajax请求
 1. 创建一个xmlhttpRequest对象
 2. 设置回调监听
 3. 打开一个连接
    接受两个参数：1. httpMethod   2. httpUrl
 4. 设置请求头
    通知浏览器请求体的相关设置
 5. 发请求
    参数: 具体发送的值
 */

window.onload = function () {
    document.getElementById('postBtn').onclick = function () {
        var xmlHttp = createXMLHttp();

        //2. 设置回调函数
        xmlHttp.onreadystatechange = function () {
            if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
                //业务逻辑
                //取得数据
                console.log(xmlHttp.responseText);
            }
        };

        //3. 打开连接
        xmlHttp.open('post', '/node_ajax/test/post');

        xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        //4. 发送数据
        xmlHttp.send('username=wukong&password=123456');
    }
};




function createXMLHttp() {

    //1.new 对象
    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xmlHttp;

}