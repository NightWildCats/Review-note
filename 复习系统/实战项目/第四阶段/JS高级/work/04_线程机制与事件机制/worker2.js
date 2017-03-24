/**
 * Created by Administrator on 2017/3/24/024.
 */
/**
 *计算函数
 * @param count 传入的计算的数值
 * @returns {number} 返回值
 */
function fibonacci(count) {
  return count <= 2 ?  1 :  fibonacci (count - 1) + fibonacci (count - 2)
}

var  onmessage = function (event) {
  //接受数据
  var data = event.data

  //处理数据
  // var str = fibonacci(data)
  //返回数据
  // postMessage(str)

  //合并写在一起的 处理并返回数据
  postMessage(fibonacci(data))

}