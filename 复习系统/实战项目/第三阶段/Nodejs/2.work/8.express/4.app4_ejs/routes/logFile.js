
// 进行 日志书写的方法
var express = require('express');
var fs = require('fs');

/**
 * 日志文件
 * @param pathName 存储的路径
 * @param Prompt 使用场景的提示信息
 */
var file = {
  wirtFile: function (pathName,Prompt) {
    //错误日志
    var logData =  Prompt +': ' + " - " + new Date().toDateString()  +'\n';
    fs.writeFile(pathName, logData, {flag: 'a'}, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log(Prompt);
      }
    });
  }
}


//向外暴露
module.exports = file;
