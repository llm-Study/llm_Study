const users = require('../mongoose/users');
const result = require('../result/result');

module.exports = {
    Getuser: async (ctx, next) => {
        ctx.body = await users.find();
    },
    loginUser: async (ctx, next) => {
        await users.findOne({
            email: ctx.request.body.email,
        }).then(user => {
            if (user === null) {
                ctx.body = result.errorResult('error', 1); //账号不存在
            } else if (user.password != ctx.request.body.password) {
                ctx.body = result.errorResult('error', 2) //密码错误
            } else {
                ctx.body = result.successResult('success', 0) //匹配成功
            }
        })
    },
    addUser: async (ctx, next) => {
        console.log(ctx.req.body)
        await users.findOne({
            email: ctx.request.body.email
        }).then(user => {
            if (user === null) {
                const newUser = new users({
                    email: ctx.request.body.email,
                    name: ctx.request.body.name,
                    password: ctx.request.body.password
                })
                newUser.save();
                ctx.body = result.successResult('success', 0);
            } else {
                ctx.body = result.errorResult('error', 1);
            }
        })
    }
}