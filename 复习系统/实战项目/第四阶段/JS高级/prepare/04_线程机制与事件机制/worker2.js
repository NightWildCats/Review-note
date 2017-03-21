/**
 * Created by xfzhang on 2017/1/7.
 */
function fibonacci(n) { // fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
  return n<=2 ? 1 : fibonacci(n-1) + fibonacci(n-2) //递归调用
}
var onmessage = function (event) {
  var number = event.data
  // alert(number) //不能在分线程更新UI
  console.log('分线程接收到消息 '+number)
  number = fibonacci(number)
  postMessage(number)
}