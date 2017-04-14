var submit = document.getElementById('submitButton');

submit.onclick = function () {
  console.log('准备下载');
  download();
};


function download() {

  //创建 xhr
  var xhr = new XMLHttpRequest();

  //注册回调函数
  //当下载结束的时候 调用
  xhr.onload = function () {
    console.log('下载成功');
    var blob = xhr.response;
    document.getElementById('submitA').onclick = function () {
      console.log(blob);
      var Mb = new Blob([blob],{type:'text/plain',endings:'native'});
      var url = URL.createObjectURL(Mb);
      var a = document.getElementById('a');
      a.setAttribute('href',url);
      a.setAttribute('download','从内存中下载文件到本地');
      document.getElementById('dis').appendChild(a);
      a.click();

    };

  };

  //设置请求返回数据的类型，为二进制类型数据
  xhr.responseType = 'blob';
  //open   函数
  xhr.open('get', '/down/download');
  //sand 函数

  xhr.send();

}










































