
//多路请求
router.get('/getWorkerInfo', function (req, res, next) {
    var info ={
        name : 'wukong',
        age : 2000
    };
    var timeDely = Math.floor( Math.random()*1000*5 );
    setTimeout(function () {
        res.send(info);
    }, timeDely);
});

router.get('/getWorkerSalary', function (req, res, next) {
    var info ={
        name : 'wukong',
        salary : 500
    };
    var timeDely = Math.floor( Math.random()*1000*5 );
    setTimeout(function () {
        res.send(info);
    }, timeDely);
});

router.get('/getWorkerAttendance', function (req, res, next) {
    var info ={
        name : 'wukong',
        Attendance : 'late'
    };
    var timeDely = Math.floor( Math.random()*1000*5 );
    setTimeout(function () {
        res.send(info);
    }, timeDely);
});

