/*
 多次反复随机点击按钮，观察出现的结果
 问：观察是否会出现bug？

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
  var request = getHttpreq();
  //2. 设置回调监听
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      var result = request.responseText;
      document.getElementById('div1').style.backgroundColor = 'pink';
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
  var request = getHttpreq();
  //2. 设置回调监听
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      var result = request.responseText;
      document.getElementById('div1').style.backgroundColor = 'green';
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
  var request = getHttpreq();
  //2. 设置回调监听
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      var result = request.responseText;
      document.getElementById('div1').style.backgroundColor = 'yellow';
      document.getElementById('div1').innerHTML = result;
    }
  };
  //3. 打开一个连接
  request.open('GET', '/getWorkerAttendance');
  //4. 发请求
  request.send();
}

//实现 只有创建（共用）一个 ajax请求对象

var xhr = null;

function getHttpreq() {
  if (!xhr) {
    xhr = createReq();
  }
  else {
    // abort()   方法是立即结束当前执行程旭
    xhr.abort();
  }
  return xhr;
}


/*
 创建发送ajax请求的XMLHttpRequest对象
 */
function createReq() {
  var httpReq = null;
  if (window.XMLHttpRequest) {
    httpReq = new XMLHttpRequest();
  } else {//IE6/5
    httpReq = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return httpReq;
}
