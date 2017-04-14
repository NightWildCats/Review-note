/*
服务器返回的数据是json数据
 */
window.onload = function () {

    //ajax 获得数据
    // 1. 创建一个xmlhttpRequest对象
    var req = createReq();
    // 2. 设置回调监听
    req.onreadystatechange = function () {
        ///正常返回数据
        if(4 === req.readyState && req.status === 200){


        }
    };
    // 3. 打开一个连接
    req.open('XXX', 'XXX', true); //第三个参数 默认 true 异步， false 同步
    // 4. 发请求
    req.send();

};


function createReq() {
    var req = null;
    if(window.XMLHttpRequest) {
        req = new XMLHttpRequest();
    } else {
        req = new new ActiveXObject("Microsoft.XMLHTTP");
    }
    return req;
}