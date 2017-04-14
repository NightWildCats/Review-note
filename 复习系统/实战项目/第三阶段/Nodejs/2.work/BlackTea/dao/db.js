//引入mongoose模块
var mongoose=require('mongoose');
//发起连接
mongoose.connect('mongodb://localhost:27017/blackTea');
//获取连接
var connection=mongoose.connection;
//处理
connection.on('error',function (err) {
  console.error(err);
}).on('open',function(){
  console.log('we are connectting');
});

/*---------------------------------------------*/
//创建数据库 schema model entity

var  NewsSchema=new  mongoose.Schema({
    title:String,
    desc:String,
    address:String,
    time:String

});

var NewsModel=mongoose.model('news',NewsSchema);

//增加到数据库里
//
//     var news=new NewsModel({
//             title:'行业新闻',
//             desc:'黑茶7周年加盟代理优惠活动从7月20日正式启动，针对部分区域和城市，我们现推出零',
//             address:'广东省深圳市福田区燕南路88号A-9号铺1111111111111111111111',
//             time: '2016-07-15'
//     });
// var newsEntity = new NewsModel(news);
//
//     newsEntity.save(function (err,doc) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(doc);
//         }
//     });




function findNews(title,cb){
    //匹配的话 取数据中查找
    NewsModel.find({title:title},function(err,doc){
        if(err){
            cb(err);
        }else{
            //不报错的话  在进行判断
            cb(null,doc);
        }
        console.log('--+-->'+doc);
    });
}
exports.findNews=findNews;


/*/写入数据库
function news(title,desc,address,cb){
    console.log('++++++++++++')
    //创建entity
    var newsEntity=new NewsModel({
        title:title,
        desc:desc,
        address:address
        //time:time
    });
    //保存创建的对象
    newsEntity.save(function(err,doc){
        console.log('-------------')
        if(err){
            cb(err);
        }else{
            cb(null,doc);
        }
    });
};*/


/*NewsModel.create(new1,function (err,doc) {
    console.log(doc);
    //res.send(doc);

})*/
/*======================================*/
/*
function findUser(userName,cb){
    //匹配的话 取数据中查找
    UserModel.findOne({userName:userName},function(err,doc){
       if(err){
          cb(err);
       }else{
           //不报错的话  在进行判断
           cb(null,doc);
       }
    });

}
exports.findUser=findUser;

/!*--------------------------------------------*!/
//写入数据库
function addUser(userName,password,email,cb){
   console.log('++++++++++++')
    //创建entity
    var userEntity=new UserModel({
        userName:userName,
        password:password,
        email:email
    });
    //保存创建的对象
    userEntity.save(function(err,doc){
        console.log('-------------')
        if(err){
            cb(err);
        }else{
            cb(null,doc);
        }
    });
};
exports.addUser = addUser;

/!*------------------------------*!/
//创建一个新的表名 schema model entity
var ItemSchema=new mongoose.Schema({
        //关联某个用户
        userID:String,
        title:String,
        post_date: {type: Date},
        finish_state: {type: Number, default: 1}
    }

);
var ItemModel=mongoose.model('item',ItemSchema);

function addItem(title,userID,cb){

    //创建entity
    var itemEntity=new ItemModel({
        userID:userID,
        title:title,
        post_date:new Date()

    });
    itemEntity.save(function (err,doc) {
       if(err){//保存成功和失败的回调函数
           cb(err);
       }else{
           cb(null,doc);//然后把保存的 doc 返回给login_item文件中的db.addItem()函数中的回调函数
       }

    });
}
exports.addItem=addItem;

function findItems(userId,cb){
   //从数据库中进行查找
    ItemModel.find({userID:userId},function(err,docs){
        if(err){
            cb(err);
        }else{
            cb(null,docs);//err 有可能传入的是一个null 或是doc
        }
    });
}
exports.findItems=findItems;


/!*----------修改状态码---完成 主要是完成什么？---------------------------*!/


function updateFinishState(itemID,state,cb){
    ItemModel.findById(itemID,function(err,doc){//为什么用findById()? 主要是因为具体的id是明确给出的
        if(err){
            cb(err);
        }else{
            //修改数据 返回的是一个数据类型
            doc.finish_state = state; //num
            //把修改好的数据进行保存
            doc.save(function (err,doc) {
                //判断保存成功和失败的判断
                if(err){
                    cb(err);
                }else{
                    cb(null,doc);
                }

            });

        }


    });

}
exports.updateFinishState=updateFinishState;


/!*----------删除状态码----------------------------------*!/
function deleteItem(itemID,cb) {
    //从数据库中先查找 存在的话进行删除

    ItemModel.findById(itemID,function (err,doc) {
        //查找匹配之后进行处理
        if(err){
            cb(err);
        }else{
            //判断删除是否成功
            doc.remove(function (err,doc) {
                if(err){
                    cb(err);
                }else{
                    cb(null,doc);
                }

            });

        }

    });


}
exports.deleteItem=deleteItem;


/!*--------------修改 1 呈现内容-------------------------------*!/

function editItem(itemID,cb) {
    //到数据库中进行查找
    ItemModel.findById(itemID,function (err,doc) {
        //判断是否查找成功
        if(err){
            cb(err);
        }else{
            //查找成功后返回的值
            cb(null,doc);
        }

    });

}
exports.editItem=editItem;


/!*----------真实 修改状态码-------------------*!/

function updateTitle(title,itemID,cb) {
    //进入到数据库中进行查找
    ItemModel.findById(title,itemID,function(err,doc){
        if(err){
            cb(err);
        }else{
            //从数据库中返回的对象
           // cb(null,doc);
            //修改的对象
            doc.title=title;
            //修改之后进行保存
            doc.save(function(err,doc){
                //查看是否保存成功
                if(err){
                    cb(err);
                }else{
                    cb(null,doc);
                }
            });
        }
    });

}
exports.updateTitle=updateTitle;
*/
