const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const moment = require('moment');
moment.locale('zh-cn') //设置默认格式化时间地区
let reqtimemid = require('./middlewares/requesttime')
const router = require('./routes/index')
const users = require('./routes/users')
const cors = require('koa-cors')
// const maddle = require('./middlewares/mounnet')
// error handler
onerror(app)
app.use(cors())
// middlewares
// requesttime
app.use(reqtimemid)
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger,应用级中间件
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms - ${ctx.status}`)
})
// routes,路由级中间件
app.use(router.routes(), router.allowedMethods())
app.use(users.routes(), users.allowedMethods())
// error-handling
// app.on('error', (err, ctx) => {
  // console.error('server error', err, ctx)
// });
// app.use(maddle)

module.exports = app