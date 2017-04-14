/*
服务器返回的数据是xml数据
    服务器：
        响应头设置为：res.set('content-type', 'text/xml;charset=utf-8')
    浏览器：
        获得 xml 对象： var doc = req.responseXML;
        原生 js 操作 xml api：
            doc.getElementsByTagName()
                参数：标签名
                返回值：数组
            doc.firstChild.nodeValue
                前端结点的第一个子节点中的值
 */
window.onload = function () {

    //ajax 获得数据
    // 1. 创建一个xmlhttpRequest对象
    var req = createReq();
    // 2. 设置回调监听
    req.onreadystatechange = function () {
        ///
        if(4 === req.readyState && req.status === 200){
            // req.responseText; //
            var result = req.responseXML; //科技
            // console.log(result);
            var province = result.getElementsByTagName('province')[1];
            console.log(province);
            var city = province.getElementsByTagName('city')[1].firstChild.nodeValue;
            console.log(city);

        }
    };
    // 3. 打开一个连接
    req.open('get', '/node_ajax/test/xml', true);
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