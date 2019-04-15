const Router = require('koa-router')
//层级路由
let home = new Router();
let page = new Router();
//home路由
home.get('/index',async(ctx)=>{
  ctx.body = '我的父路由是home,子路由是index'
}).get('/about',async(ctx)=>{
  ctx.body = '我的父路由是home,子路由是about'
})
//page路由
page.get('/index',async(ctx)=>{
   ctx.body = '我的父路由是page,子路由是index'  
}).get('/about',async(ctx)=>{
  ctx.body = '我的父路由是page,子路由是about'  
})
let router = new Router();
router.use('/home',home.routes(),home.allowedMethods())
.use('/page',page.routes(),page.allowedMethods())
module.exports = router
