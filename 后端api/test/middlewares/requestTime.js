/**
 * 请求时间中间件
 */
function requestTime() {

    return async function (ctx, next) {
        const start = new Date();
        
        await next();
        const ms = new Date() - start;
        console.info(`requestTime: ${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`);
    };
}


module.exports = requestTime;
