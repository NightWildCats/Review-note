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
    //创建ajax对象
    var xmlHttp = creatXMLHttp();

    //设置回调
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        //将返回值添加到页面的指定位置
        document.getElementById('result').innerHTML = xmlHttp.responseText;
      }
    };
    // 设置发送请求
    xmlHttp.open('post', '/xiaoxiong/post');

    //post 请求的解析
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //发送
    xmlHttp.send('username=这是一个post请求，过下了我要在页面看到');
  };
};

//将 创建 ajax 实例封装成一个方法
function creatXMLHttp() {
  var xmlHttp = null;
  if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
  } else {
    xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  return xmlHttp;
}