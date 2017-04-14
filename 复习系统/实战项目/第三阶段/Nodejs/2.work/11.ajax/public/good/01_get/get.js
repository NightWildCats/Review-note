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

        // 1. 创建一个xmlhttpRequest对象
        var xmlhttp;
        if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
            //xmlhttp.readyState 已经存在
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }

        // 2. 设置回调监听
        xmlhttp.onreadystatechange = function() {
            console.log(xmlhttp.readyState);
            //xmlhttp.readyState 4  数据已经接受完毕
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
                // document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
                //responseText //服务器发回来的信息
                console.log(xmlhttp.responseText);
                //局部刷新页面
                document.getElementById('result').innerHTML = xmlhttp.responseText;
            }
        };

        // 3.打开一个连接
        xmlhttp.open("GET", "/node_ajax/test/get" + '?username=wukong');     //打开连接  准备连接
        //xmlhttp.readyState 1
        // 4. 发请求
        xmlhttp.send(); //真的发送
        //xmlhttp.readyState 2
        //xmlhttp.readyState 3  已经开始是接受数据
    }


};




















