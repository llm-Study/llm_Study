const __data = require('./db')
const mssql = require('mssql');
const db = {};
const __options = {
    user: __data.user,
    password: __data.pass,
    server: __data.server,
    database: __data.data
}
//连接池
db.sql = (sql, callback) => {
    const createPool = new mssql.ConnectionPool(__options, err => {
        if (err) throw err
        console.log('数据库连接成功')
    })
    const ps = new mssql.PreparedStatement(createPool)
    return ps
}
module.exports = db;