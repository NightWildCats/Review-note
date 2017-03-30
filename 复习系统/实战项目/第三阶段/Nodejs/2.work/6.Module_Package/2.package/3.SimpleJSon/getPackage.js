/**
 *  路径精确到文件夹
 *      成为包的两个要素：
 *          1. 存在 js 文件
 *          2. 存在 package.json 文件
 *
 */


var somePackage = require('./APackage'); // 这里寻找的是文件夹，而不是具体的文件
somePackage.hello();


