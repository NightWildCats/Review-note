//引用数据库
var db=require('../dao/db.js');
//引用业务逻辑中的用户登陆的id
var loginLogic=require('./logic_login');
//添加待办事宜
function addItem(req,res,next){
    console.log('12111111111111')
    //输入
    var title=req.body.title;
    //处理 和数据库联系在一起
    //把获取到的用户的id 添加到数据库中
    var userID=global.userId;
    //调用数据db.js中的addItem函数对象
    db.addItem(title,userID,function(err,doc){
        //进行存值的判断
        if(err){
            console.error(err);
            res.send('添加失败');
        }else{
           // res.send('添加成功')
            loginLogic.indexPage(userID,res);
        }
    });
}
exports.addItem=addItem;

/*---------- 修改 完成---------------------=-----------*/


function updateFinishState(req,res,next){
    //获取输入
    var itemID=req.params.id;
    var state=req.query.state;
    //对状态码的判断 怎样把 已经完成 的状态转成 未完成 的状态 这边接受的是 yes no 但是数据库中接受的是数字
    // 故利用三目运算符进行判断 是 yes 的话 就是数字2 反之为 数字1
    state= ('yes'==state) ? 2:1;

    //处理- 修改数据库数据
   db.updateFinishState(itemID,state,function(err,doc){

       //数据库已经执行完了
       if(err){
          res.send('修改失败')
       }else{
        //  res.send('修改成功')
           //var userId = doc._id;
          // global.userId = userId;
           var userId=global.userId;
           loginLogic.indexPage(userId,res);
       }

   });
    //输出

}
exports.updateFinishState=updateFinishState;


/*------------状态码的删除--------------------------------*/

function deleteItem(req,res,next){
    //输入

    var itemID=req.params.id;
    //处理--从数据库中进行查询处理
    db.deleteItem(itemID,function(err,doc){
        if(err){
            res.send('删除失败')
        }else{
         // res.send('删除成功')
            var userId=global.userId;
            loginLogic.indexPage(userId,res);
        }

    });

    //输出

};
exports.deleteItem=deleteItem;

/*------------修改 1 呈现内容 -----------------------------*/

function editItem(req,res,next) {
    //输入
    var itemID=req.params.id;

    //处理
    db.editItem(itemID,function(err,doc){

            // res.send('查找成功');
            var title = doc.title;

            res.render('edit.ejs', {title: title, itemID: itemID});

    });
    //输出

}

exports.editItem=editItem;



/*----------真实 修改状态码------------------------------*/

function updateTitle(req,res,next) {
            //输入
            var title=req.body.title;
            var itemID=req.params.id;
             //处理 先去数据库中查找
            db.updateTitle(title,itemID,function(err,doc){
                if(err){
                    res.send('修改失败');
                }else{
                   res.send('修改成功');
                    //渲染页面
                    // var userId=global.userId;
                    // loginLogic.indexPage(userId,res); //登录成功的时候被赋值

                }
            });
             //输出
}
exports.updateTitle=updateTitle;
