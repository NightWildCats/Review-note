/*
 测试get类型的Ajax请求
 1. 创建一个xmlhttpRequest对象
 2. 设置回调监听
 3. 打开一个连接
 接受两个参数：1. httpMethod   2. httpUrl
 4. 发请求
 参数：无参
 */

window.onload = function () {
  document.getElementById('getBtn').onclick = function () {

    //  ajax请求的过程
    // 1.创建 ajax请求的对象  -------虽然现在不IE5-6已经属于淘汰品 但是知道其兼容方式还是不错的
    var xmlHttp = null;
    if (window.XMLHttpRequest) { //正常浏览器使用方式
      xmlHttp = new XMLHttpRequest();
    } else { //IE5-6 使用的方式
      xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // 2.设置ajax监听（回调函数）
    xmlHttp.onreadystatechange = function () {
      // ajax 的状态 一共具有 0 - 4 这几个状态
      /**
       *  状态 0 未进行任何 初始化
       *  状态 1 初始化 （设置了 ajax监听）
       *  状态 2 准备发送 设置发送请求的方式和路由
       *  状态 3 发送 过程中 （数据传输中）
       *  状态 4 数据返回完成
       */
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        //接受返回的信息
        var result = xmlHttp.responseText;
        //console.log(result);
        //注 ： 在这里可以进行把服务器处理返回的信息，通过逻辑处理 在页面进行展示
        //把获取的信息展示页面上
        document.getElementById('result').innerHTML = result;
      }
    };
    // 3.打开-设置一个请求（包括请求方式已经路由）
    xmlHttp.open('get', '/xiaoxiong/get');
    // 4.发送请求
    xmlHttp.send();
  };
};




















