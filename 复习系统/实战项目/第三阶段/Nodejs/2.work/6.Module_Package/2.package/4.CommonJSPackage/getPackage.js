/**
 *  package.json 配置了许多可配置项目
 *
 */


var somePackage = require('./APackage'); // 这里寻找的是文件夹，而不是具体的文件
somePackage.hello();