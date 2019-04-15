
/**
 * create child logger for each request
 *
 * @param {bunyun} rootLogger
 * @param {Koa context} ctx
 * @param {next} next
 */

function logger(rootLogger) {

    return async function (ctx, next) {
        let context = ctx.context,
            requestLine;

        requestLine = ctx.method + ' ' + ctx.url + ' HTTP/' + ctx.req.httpVersion;
        context.logger = rootLogger.child({
            ip: ctx.ip,
            'request-line': requestLine
        }, true);
        await next();
    };
}
module.exports = logger;
