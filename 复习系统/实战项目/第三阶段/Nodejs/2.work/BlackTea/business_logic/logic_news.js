
/*//引用数据库
var db=require('../dao/db.js');*/

/*function news(req,res,next){
    console.log('qqqqqqqqqqqq');
   //输入
    var title=req.query.title;
    var desc=req.query.desc;
    var address=req.query.address;
    //var time=req.query.time;
    //处理
        db.news(title,desc,address,function(err,doc){
            //进行存值的判断
            if(err){
                console.error(err);
                res.send('添加失败');
            }else {
                res.send('添加成功')
            }
    });
}*/
exports.news=news;