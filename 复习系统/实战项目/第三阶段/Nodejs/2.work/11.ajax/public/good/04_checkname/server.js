
//ajax post html(片断)
router.post('/node_ajax/test/html', function (req, res, next) {
    var username = req.body.username;
    console.log('html username='+username);
    var result;
    if('admin'===username) { //不可用   <font color="red">不可用</font>
        result = '<font color="red">不可用</font>';
    } else { //可用
        result = '<font color="green">可用</font>';
    }

    res.send(result);
});
