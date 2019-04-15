const Koa = require('koa');
const app = new Koa();
const users = require('./route/router');
const BodyParser = require('koa-bodyparser')
const cors = require('koa-cors');
const port = process.env.PORT || 3000;
app.use(BodyParser())
app.use(cors())
app.use(users.routes(),users.allowedMethods())
app.listen(port, () => {
    console.log(port)
})