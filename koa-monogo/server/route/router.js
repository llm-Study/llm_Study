const router = require('koa-router')();
const dbFn = require('../server/dbFn');
const result = require('../result/result');
router.prefix('/users')
router.get('/getuserlist',dbFn.find)
router.post('/postuser',dbFn.resister)
.post('/loginuser',dbFn.login)
module.exports = router