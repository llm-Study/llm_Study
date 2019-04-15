const express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser'); //post获取参数必须
var sql = require('./sql');
const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))
var connection = mysql.createConnection(sql.db); //数据库连接方法
connection.connect();
var addSql = 'INSERT INTO users(u_id,u_name,u_pass,u_phone) VALUES(7,?,?,?)';
var addSqlParams = ['萨达', '23453', '1545454545'];
//添加
connection.query(addSql, addSqlParams, function (err, result) {
    if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }
    app.post('/add', function (res, req) {
        res.send('添加成功')
    })
    console.log('INSERT ID:', result);
});

connection.end();