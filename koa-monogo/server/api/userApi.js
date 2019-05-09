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
        console.log(ctx.request.body)
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
    },
    /**
     * 修改用户评论状态
     * @type status == 1 用户可以评论
     * status == 0 用户不能评论
     */
    updateStatus: async (ctx, next) => {
        const sta = ctx.request.body.status == 0 ? 1 : 0
        await users.update({
            'status': ctx.request.body.status
        }, {
            $set: {
                'status': sta
            }
        }).then(res => {
            ctx.body = result.successResult('success', 0, res)
        })
    }
}