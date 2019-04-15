'use strict'
/**
 * mongodb连接
 */
const config = require('config-lite')(__dirname) //使用config-lite中间件读取config目录下的配置
const log4Util = require('../middlewares/log');
console.log(config)
const mongoose = require('mongoose')
mongoose.connect(config.url, {
    useNewUrlParser: true //处理警告
}, (err => {
    if (err) {
        console.error(err)
    }
    return
}));
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.once('open', () => {
    // console.log('连接mongodb数据库成功,' + '端口号:' + config.port);
    log4Util.info('连接mongodb数据库成功,' + '端口号:' + config.port);
})
db.on('error', (err) => {
    // console.error('mongodb数据库连接错误:' + err);
    log4Util.error('连接mongodb数据库失败,' + '错误信息:' + err);
})
db.on('close', () => {
    console.log('mongodb数据库断开连接,请重新连接')
    mongoose.connect(config.url, {
        useNewUrlParser: true
    })
})
module.exports = db