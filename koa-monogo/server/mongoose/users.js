const db = require('./db')
const mongoose = require('mongoose')
/**
 * @type{name}用户名
 * {email}邮箱
 * {password}密码
 * {create_time}创建时间
 * {admin}管理员权限
 * {status}发言权限,默认(1)为可发言,0为禁言
 */
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    create_time: {
        type: Date,
        default: Date.now
    },
    admin: {
        type: String,
        default: 0
    },
    status: {
        type: Number,
        default: 1
    }
})
module.exports = users = db.model('users', userSchema);