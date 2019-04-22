const router = require('koa-router')()
const userApi = require('../api/userApi')
router.get('/getuserList', userApi.Getuser)
router.post('/loginUser', userApi.loginUser)
    .post('/addUser', userApi.addUser)

module.exports = router