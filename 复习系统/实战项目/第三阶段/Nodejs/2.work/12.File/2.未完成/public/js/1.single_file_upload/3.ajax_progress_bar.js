var from = document.getElementById('from1');
var progressId = document.getElementById('progressId');

var submit = document.getElementById('submit');

//点击提交按钮
submit.onclick = function () {
  console.log('提交按钮被点击');

  //创建 xhr 对象
  var xhr = new XMLHttpRequest();
  //创建 form 对象
  var data = new FormData(from);
  //注册结束事件的回调函数
  xhr.upload.onload = function () {
    document.getElementsByName('ajaxfile')[0].value = '';
    document.getElementById('spanok').innerHTML = '上传成功';
    console.log(xhr.responseText);
  };
  //注册上传进度事件的回调函数
  xhr.upload.onprogress = function (event) {
    if (event.lengthComputable) {
      var loaded = event.loaded; //已经上传的文件大小
      var total = event.total; //文件大小
      var rate = Math.floor(loaded / total);      // 已经下载的百分比
      rate = rate + '%';
      console.log('上传进度', rate, '\txhr.readyState', xhr.readyState);
      //设置 progressBar
      progressId.max = total;
      progressId.value = loaded;
    }
  };

  //open函数
  xhr.open('post', '/ajax/file');
  //send 函数发送数据

  xhr.send(data);

};




















