function config() {
    return async function (ctx, next) {
        if (ctx.context) {
            ctx.context.configs = configs;
        }
        await next();
    }
}
module.exports = config;