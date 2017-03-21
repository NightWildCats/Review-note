/**
 * 在分线程执行的js
 * 分线程的全局对象不再window, 而是worker对象
 */
//指定接收主线程消息的监听
var onmessage = function (event) {
  //读取主线程发送的消息
  var data = event.data
  console.log('分线程接收到主线程发送的消息 '+data)
  //处理数据
  data = data.toUpperCase()
  //向主线程发送消息
  postMessage(data)
  console.log('分线程向主线程返回一个消息 '+data)
  
}