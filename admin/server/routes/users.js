var express = require('express');
var router = express.Router();
var sqlDC = require('../sqlDC/sqlDC');
var result = require('../result/result')

/* GET users listing. */
router.get('/getlist', function (req, res) {
  console.log('getlist')
  sqlDC.select(users => {
    res.json(result.createResult(0, users))
  })
});
router.post('/postuser', (req, res) => {
  var user = req.body;
  sqlDC.add(user, function (success) {
    let users = result.createResult(success, null)
    res.json(users)
  })
})
router.post('/deluser', (req, res) => {
  var userId = req.body.u_id;
  sqlDC.delete(userId, function () {
    res.json(result.createResult('删除成功', null))
  })
})
// //登录验证信息
router.post('/signin', (req, res) => {
  var user = req.body;
  console.log(user)
  sqlDC.Verification(user, function (success) {
    console.log(success)
    if (success.length > 0) {
      res.json(result.createResult(0, success))
    } else {
      res.json(result.createResult(1, success))
    }
  })
})
router.post('/update', (req, res) => {
  let user = req.body;
  sqlDC.updateuser(user, function (success) {
    res.json(result.createResult(success, null))
  })
})
// //用户发布帖子
router.post('/addarticle', (req, res) => {
  let user = req.body;
  sqlDC.addarticle(user, function (success) {
    res.json(result.createResult(success, null))
  })
})
router.get('/selarticle', function (req, res) {
  sqlDC.selectarticle(users => {
    res.json(result.createResult(0, users))
  })
})
module.exports = router;