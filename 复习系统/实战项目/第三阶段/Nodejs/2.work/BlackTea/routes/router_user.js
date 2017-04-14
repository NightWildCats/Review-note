var router = require('express').Router();
//引用数据库
var db=require('../dao/db.js');

router.get('/news',function(req,res,next){

    var title=req.query.title;
    console.log(title);
    db.findNews(title,function(err,doc){
        if(err){
            console.error(err);
        }else{
            var obj = [doc];
            // console.log('OBJ    '+obj);
            // console.log( obj instanceof Array);
            res.send(obj);

        }
    });

});

module.exports = router;
