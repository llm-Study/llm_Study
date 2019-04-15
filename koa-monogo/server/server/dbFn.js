const User = require('./db')
const result = require('../result/result')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dbFn = {
    /**
     * 注册用户
     */
    async resister(ctx, next) {
        //查询集合里面是否存在这个邮箱
        await User.findOne({
            email: ctx.request.body.email
        }).then(user => {
            //回调函数会返回一个数组,如果数组为空,说明集合里面这个邮箱没有被和注册过
            if (user == null) {
                //实例化
                const newUser = new User({
                    email: ctx.request.body.email,
                    password: ctx.request.body.password
                })
                //密码加密
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        // Store hash in your password DB.
                        if (err) throw err
                        newUser.password = hash
                        newUser.save()
                    })
                })
                ctx.body = result.Createresult('邮箱注册成功', 200)
            } else {
                ctx.body = result.Createresult('邮箱已经被注册', 500)
            }
        })
    },
    /**
     * 查询用户
     */
    async find(ctx, next) {
        ctx.body = result.Createresult('success', 0, await User.find())
    },
    /**
     * 登录
     */
    async login(ctx, next)  {
        const password = ctx.request.body.password
        await User.findOne({
            email: ctx.request.body.email
        }).then(async user => {
            console.log(user)
            if (user == null) {
                ctx.body = result.Createresult('邮箱不存在', 500)
            } else {
                //密码匹配
                await bcrypt.compare(password, user.password).then(async res => {
                    if (res) {
                        //jwt.sign("规则","加密名字","过期时间","()=>")
                        const rule = {
                            id: user._id,
                            email: user.email
                        }
                        await jwt.sign(rule, 'secret', {
                            expiresIn: 3600
                        }, (err, token) => {
                            console.log(token)
                            ctx.body = result.Createresult('登陆成功', 200, token)
                        })
                    } else {
                        ctx.body = result.Createresult('密码错误', 500)
                    }
                })
            }
        })
    }
}
module.exports = dbFn;