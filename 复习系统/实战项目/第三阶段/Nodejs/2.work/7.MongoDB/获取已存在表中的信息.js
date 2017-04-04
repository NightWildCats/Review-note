var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/emp');

var  connection = mongoose.connection;

connection.on('error',function (err) {
   console.error(err);
});
connection.on('open',function () {
  console.log('连接成功');
});

var insetrBD = {
  first_name:String,
  last_name:String,
  salary:Number,
  phone_number:String
};

//创建一个空对象惊喜获取
var tableModel = mongoose.model('employees',insetrBD);


//(1)查询
/*
tableModel.find({},{_id:0,first_name:1,last_name:1,salary:1,phone_number:1},function (err,docs) {
  if (err) {
    console.error(err);
  } else {
    console.log(docs);
  }
});
*/

//(2)新增
//新增对象
var mayun = {
   first_name:"马云",
   last_name:"mayun",
   salary:2035.33,
   phone_number:"123456789"
};
var liyanhong = {
  first_name:"李彦宏",
  last_name:"liyanhong",
  salary:2035.33,
  phone_number:"223456789"
};
var mahuateng = {
  first_name:"马化腾",
  last_name:"mahuateng",
  salary:2035.33,
  phone_number:"323456789"
};
var xiaoxiong = {
  first_name:"肖雄",
  last_name:"xiaoxiong",
  salary:2035.33,
  phone_number:"823456789"
};
/*
tableModel.create(mayun,function (err,doc) {
  if (err) {
      console.log(err);
  } else {
      console.log(doc);
  }
});
tableModel.create(liyanhong,function (err,doc) {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});
tableModel.create(mahuateng,function (err,doc) {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});
tableModel.create(xiaoxiong,function (err,doc) {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});
*/
//(3)删除
var deleteDB = {
  _id:"5751690b8d7095336f358994"
};
// tableModel.remove(deleteDB,function (err,doc) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(doc);
//   }
// });

//(4)修改
/*
var selectUpdate = {
  "_id":"5751690b8d7095336f35898c"
};
var newUpdaate = {
  $inc: { salary: 200 },
  $set: {phone_number: "13586705312" }
};
tableModel.update(selectUpdate,newUpdaate,function (err,doc) {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});
*/

//(5)打印
// tableModel.find({},function (err,docs) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(docs);
//   }
// });
//(6)补办工牌
// tableModel.find({last_name:"Himuro"},function (err,docs) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(docs);
//   }
// });
//(7)查询生日
// db.employees.find({last_name:"Lee"},{_id:0,phone_number:1,manager_id:1})
// tableModel.find({last_name:"Lee"},{_id:0,phone_number:1,manager_id:1},function (err,docs) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(docs);
//   }
// });
//(8)调查薪酬
//1.工资在2000到5000之间的员工信息
// db.employees.find({$and:[{salary:{$gt:2000}},{salary:{$lt:5000}}]},{_id:0,last_name:1,salary:1})
// tableModel.find({$and:[{salary:{$gt:2000}},{salary:{$lt:5000}}]},{_id:0,last_name:1,salary:1},function (err,docs) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(docs);
//   }
// });
//汇总 count()
//db.employees.count({$and:[{salary:{$gt:2000}},{salary:{$lt:5000}}]})
// tableModel.find({'$and':[{salary:{$gt:2000}},{salary:{$lt:5000}}]},{_id:0,last_name:1,salary:1},function (err,docs) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(docs.size);
//   }
// });


//2.工资在3000以上的人数
//db.employees.find({salary:{$gte:3000}},{_id:0,last_name:1,salary:1})

// tableModel.find({salary:{$gte:3000}},{_id:0,last_name:1,salary:1},{_id:0,last_name:1,salary:1},function (err,docs) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(docs);
//   }
// });
//汇总
// tableModel.find({salary:{$gte:3000}},{_id:0,last_name:1,salary:1},{_id:0,last_name:1,salary:1},function (err,docs) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(docs.lenght);
//   }
// });

//manager_id是空的
//db.employees.find({$and:[{manager_id:{$exists:1}},{manager_id:{$in:[null]}}]})
// tableModel.find({$and:[{manager_id:{$exists:1}},{manager_id:{$in:[null]}}]},{_id:0,last_name:1,salary:1},function (err,docs) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(docs);
//   }
// });

//(10)市场部的主管想了解他们部门员工的工资
//db.employees.find({"job_id":"ST_CLERK"},{_id:0,last_name:1,salary:1}).sort({salary:1})
// tableModel.find({"job_id":"ST_CLERK"},{_id:0,last_name:1,salary:1,job_id:1},{sort:{salary:1}},function (err,docs) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(docs);
//   }
// });


//(11) 实现分页查询
//db.employees.find({"job_id":"ST_CLERK"},{_id:0,last_name:1,salary:1}).sort({salary:1}).skip(5).limit(5)
tableModel.find({"job_id":"ST_CLERK"},{_id:0,last_name:1,salary:1,job_id:1},{sort:{salary:1}},function (err,docs) {
  if (err) {
    console.error(err);
  } else {
    tableModel.find({}, null, {skip: 10}, function (err, doc) {
      tableModel.find({}, null, {limit: 5}, function (err, doc1) {
        if (err) {
          console.error(err);
        } else {
          console.log('-----------------------------------');
          console.log(doc1);
        }
      });
    });
  }
});


//(12) 删除 last_name 字段为空的信息
// var last_name = {
//   last_name:null
// };
//
// tableModel.remove(last_name);