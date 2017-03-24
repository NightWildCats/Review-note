/**
 * Created by Administrator on 2017/3/24/024.
 */

var onmessage = function (event) {
  // 1 接受数据
  var  data = event.data

  // 2 处理数据
 var data = data.toUpperCase()

  // 3 返回数据
  postMessage(data)
}
