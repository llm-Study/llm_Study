//cookies缓存
const Koa = require('koa')
const app = new Koa();
app.use(async (ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set(
            'Myname', 'llm',{
                Domain: '127.0.0.1',
                maxAge: 1000 * 60 * 60 * 1,
                path: '/index',
                httpOnly: false,
                overwrite: false
            }
        )
        ctx.body = 'cookies is Ok'
    } else {
        if (ctx.cookies.get('Myname')) {
            ctx.body = 'welcome' + "," + ctx.cookies.get('Myname')
        } else {
            ctx.body = 'cookies is none'
        }
    }
})
app.listen(3333, () => {
    console.log('app is start')
})