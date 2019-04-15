const koa = require('koa');
const app = new koa();
const dbFn = require('./serverdb/user')
app.use(async (ctx, next) => {
     ctx.body = '欢迎'
})
app.listen(3000,()=>{
    console.log(111)
})