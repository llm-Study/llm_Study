
/**
 * create context for each Koa request
 * @param {Object} defaults params
 */

function context(defaults) {
    const inProduction = (process.env.NODE_ENV === 'production');

    if (typeof defaults === 'undefined') {
        defaults = {};
    }
    if (typeof defaults !== 'object') {
        throw new Error('Invalid defaults');
    }

    return async function (ctx, next) {
        if (!ctx.context) {
            ctx.context = {};
            ctx.inProduction = inProduction;
            Object.keys(defaults).forEach(key => {
                ctx.context[key] = defaults[key];
            });

            // ctx.context.requestTime = new Date();
        }

        await next();
    };
}

module.exports = context;
