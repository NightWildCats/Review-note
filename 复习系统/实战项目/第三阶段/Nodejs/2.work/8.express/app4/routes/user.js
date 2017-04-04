var router = require('express').Router();

router.get('/login',function (req,res,next) {
  res.send('login');
});



//向外暴露
module.exports = router;