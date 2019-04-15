/**
 * db.js用来连接mongoDB数据库
 */
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/test'
mongoose.connect(DB_URL, err => {
    if (err) console.log('数据库连接失败')
    console.log('数据库连接成功')
});
/**
 * 定义一个模式(相当于传统mysql数据库中的结构表)
 * 每个模式映射mongoDB的一个集合
 * 定义这个集合里面的字段,字段类型,字段默认值
 * 除了定义结构,还定义实例方法,静态模型方法,复合索引,中间件
 * @type {mongoose}
 */
const UserSchema = new mongoose.Schema({
    password: String,//表示每个字段,定义类型
    email: String,
    create_time: {
        type: Date,
        default: Date.now
    },
})
const User = mongoose.model('User', UserSchema)
module.exports = User