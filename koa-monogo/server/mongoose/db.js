const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://localhost:27017/test', {
    useNewUrlParser: true
});
conn.on('error', (err) => {
    console.log(err, '数据库连接错误')
})
conn.on('open', () => {
    console.log('数据库连接成功')
})
module.exports = conn