const Koa = require('koa')
const app = new Koa();
const fs = require('fs')

function render(page) {
    return new Promise((resolve, reject) => {
        let url = `./page/${page}`
        fs.readFile(url, 'binary', (err, data) => {
            if (err) {
                reject(err)
            } else {
                res6olve(data)
            }
        })
    })
}

async function route(url) {
    let page = 'index.html';
    switch (url) {
        case '/':
        page = 'index.html';
            break;
        case '/index':
        page = 'index.html';
            break;
        case '/about':
        page = 'about.html';
            break;
        case '/404':
        page = '404.html';
            break;
        default:
            break;
    }
    let html = await render(page)
    return html;
}
app.use(async (ctx) => {
    let url = ctx.request.url
    let html = await route(url)
    ctx.body = html
})
app.listen(3000, () => {
    console.log('hellow llm')
})