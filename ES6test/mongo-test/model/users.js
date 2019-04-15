/**
 * 创建用户模型
 */
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    createTime: String,
    admin: {
        type: String,
        default: 1 //0为超级管理员,1为普通管理员
    }
})
const users = mongoose.model('users', userSchema);
module.exports = users;