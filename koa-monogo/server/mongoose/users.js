const db = require('./db')
const mongoose = require('mongoose')
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