async function requesttime(ctx, next) {
    let start = new Date();
    await next();
    let ms = new Date() - start;
    console.log(ms)
}
module.exports = requesttime;