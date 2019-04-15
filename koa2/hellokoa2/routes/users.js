const router = require('koa-router')()
const sqlFn = require('../config/sqlFn')
const result = require('../result/result')
router.prefix('/users')

router.get('/getlist', async (ctx, next) => {
  //这里查询了数据库,异步调用必须使用await
  // ctx.body = ctx.accepts('json')//返回什么样的数据类型
  ctx.body = result.createResult(0, await sqlFn.select())
}).get('/selarticle', async (ctx, next) => {
  ctx.body = result.createResult(0, await sqlFn.selarticle())
}).get('/111', async (ctx) => {
  if (ctx.request.method == 'GET' && ctx.request.path == '/users/111') {
    ctx.body = ctx.status
  }
})
router.post('/addarticle', async (ctx, next) => {
  ctx.body = result.createResult(0, null)
}) 
router.post('/signin', async (ctx, next) => {
  console.log(ctx)
  let user = ctx.request.body;
  let data = await sqlFn.Verification(user)
  if(data.length>0){
    ctx.body = result.createResult(0, data)
  }else{
    ctx.body = result.createResult(1,data)
  }
}).post('/update', async ctx => {
  // console.log(ctx.request.body)
  let data = await sqlFn.update(ctx.request.body)
  if (data.affectedRows > 0) {
    ctx.body = result.createResult(0, null)
  }
})
module.exports = router