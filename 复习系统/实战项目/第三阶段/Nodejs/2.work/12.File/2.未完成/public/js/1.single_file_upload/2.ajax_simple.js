//找到上传按钮
var submit = document.getElementById('submit');
var form = document.getElementById('form1');

//点击提交按钮
submit.onclick = function () {
  console.log('提交按钮被点击');

  //创建 xhr 对象
  var xhr = new XMLHttpRequest();

  //创建 FormData 对象
  var data = new FormData(form);

  //设置回调函数
  xhr.onreadystatechange = function () {
    if (xhr.readyState===4&& xhr.status ===200){
      //当文件上传成功之后 清空文件选择器中的文本信息
      document.getElementById('ajaxfile').value = '';
      console.log(xhr.responseText);
    }
  };
  //open 函数设置参数
  xhr.open('post','/ajax/file');

  //发送数据  注意：使用了FormData就不用设置请求头
  xhr.send(data);
};




















