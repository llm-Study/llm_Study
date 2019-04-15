//引入express,搭建express
const express = require('express');
var mysql = require('mysql');
var sql = require('./sql');
const app = express();
var connection = mysql.createConnection(sql.db); //数据库连接方法
connection.connect();
var arr = []
connection.query(`select * from index_img`, function (err, rows) {
    if (err) return err
    rows.forEach((item, index) => {
        arr[index] = item
    });
    app.get('/getuser', function (req, res) {
        res.send(arr);
    });
})
connection.end();
app.all('*', function(req, res, next) {
    //解决跨域问题
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.listen(1234, () => {
    console.log('http://127.0.0.1:1234')
})