const userdb = require('../model/users');
let userFn = {
    getuser: async (ctx, next) => {
        ctx.body = await userdb.find();
        next();
    },
    adduser: async (ctx, next) => {

    },
    loginuser: async (ctx, next) => {
        console.log(ctx.body);
    }
}
module.exports = userFn