/*
 多次反复随机点击按钮，观察出现的结果
    问：观察是否会出现bug？
 分析：bug出现的原因：多次 ajax 请求 返回的时间不同
 bug解决的方法是？

 测试get类型的Ajax请求
 1. 创建一个xmlhttpRequest对象
 2. 设置回调监听
 3. 打开一个连接
 4. 发请求
 */
window.onload = function () {

    document.getElementById('btn1').onclick = getInfo;
    document.getElementById('btn2').onclick = getSalary;
    document.getElementById('btn3').onclick = getAttendance;

};

function getInfo() {
    //1. 创建一个xmlhttpRequest对象
    var request = getReqObj();
    //2. 设置回调监听
    request.onreadystatechange = function () {
        if(request.readyState==4 && request.status==200) {
            var result = request.responseText;
            document.getElementById('div1').innerHTML = result;
        }
    };
    //3. 打开一个连接
    request.open('GET', '/getWorkerInfo');
    //4. 发请求
    request.send();
}
function getSalary() {
    //1. 创建一个xmlhttpRequest对象
    var request = getReqObj();
    //2. 设置回调监听
    request.onreadystatechange = function () {
        if(request.readyState==4 && request.status==200) {
            var result = request.responseText;
            document.getElementById('div1').innerHTML = result;
        }
    };
    //3. 打开一个连接
    request.open('GET', '/getWorkerSalary');
    //4. 发请求
    request.send();
}

function getAttendance() {
    //1. 创建一个xmlhttpRequest对象
    var request = getReqObj();
    //2. 设置回调监听
    request.onreadystatechange = function () {
        if(request.readyState==4 && request.status==200) {
            var result = request.responseText;
            document.getElementById('div1').innerHTML = result;
        }
    };
    //3. 打开一个连接
    request.open('GET', '/getWorkerAttendance');
    //4. 发请求
    request.send();
}

function getReqObj() {
    //如果不存在
    if(!window.reqObj){
        window.reqObj = createReq();
    }else { //如果已经存在
        //状态码是 2 或者 3
        if(window.reqObj.readyState === 2 || window.reqObj.readyState === 3 ){
            window.reqObj.abort();
        }
    }
    return window.reqObj;
}

/*
 创建发送ajax请求的XMLHttpRequest对象
 */
function createReq() {
    var httpReq = null;
    if(window.XMLHttpRequest) {
        httpReq = new XMLHttpRequest();
    } else {//IE6/5
        httpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return httpReq;
}
