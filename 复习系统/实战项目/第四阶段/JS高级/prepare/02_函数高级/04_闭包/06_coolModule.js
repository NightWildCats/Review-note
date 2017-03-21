/**
 * 自定义模块
 */
function coolModule() {
  //私有的数据
  var msg = 'atguigu'
  var names = ['I', 'Love', 'you']
  //操作数据的函数
  function doSomething() {
    console.log(msg.toUpperCase())
  }
  function doOtherthing() {
    console.log(names.join(' '))
  }

  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
  
}