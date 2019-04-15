const fs = require('fs')
const first = async (ctx, next) => {
        console.log('我是第一个')
        if (ctx.path != '/') {
                ctx.type = 'html';
                ctx.body = fs.createReadStream('./html/demo01.html')
        }else{
                ctx.type = 'html';
                ctx.body = fs.createReadStream('./html/demo02.html')
        }
        await next();
}
module.exports = first