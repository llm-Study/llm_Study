const router = require('koa-router')()
const userFn = require('../middlewares/userFn');
router.get('/', userFn.getuser)
router.get('/add',async(ctx)=>{
})
module.exports = router