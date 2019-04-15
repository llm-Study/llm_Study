//引入express,搭建express
const express = require('express');
var bodyParser = require('body-parser');
var http = require('http')
var sqlFn = require('./fn');
var sql = require('./sql');
var mysql = require('mysql');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.all('*', function (req, res, next) { //app.all处理所有http方法
    //解决跨域访问问题
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
var arr = [];
var arrimg = [];
app.get('/getimg', function (req, res) {
    var connection = mysql.createConnection(sql.db);
    connection.connect();
    connection.query(sqlFn.selectimg, function (err, rows) {
        if (err) return err
        rows.forEach((item, index) => {
            arrimg[index] = item
        });
        res.send(arrimg);
    })
    connection.end();
});

app.get('/getuser', function (req, res) {
    var connection = mysql.createConnection(sql.db);
    connection.connect();
    connection.query(sqlFn.selectusers, function (err, rows) {
        if (err) return err
        rows.forEach((item, index) => {
            arr[index] = item
        });
        res.send(arr);
    })
    connection.end();
});
app.post('/del', function (req, res) {
    var connection = mysql.createConnection(sql.db);
    connection.connect();
    var delid = JSON.stringify(req.body.u_id);
    var delusers = "DELETE FROM users WHERE u_id =  " + delid;
    connection.query(delusers, delid, (err, result) => {
        if (err) {
            var date = {
                code: 8002,
                message: 'error'
            }
            res.send(date)
        } else {
            var date = {
                code: 0,
                message: 'success'
            }
            res.send(date)
        }
    })
    connection.end();
})
app.post('/add', (req, res) => {
    var connection = mysql.createConnection(sql.db);
    connection.connect();
    console.log(req.body);
    let name = req.body.u_name;
    let pass = req.body.u_pass;
    let phone = req.body.u_phone;
    let addusers = `insert into users(u_name,u_pass,u_phone) values` + (name, pass, phone);
    connection.query(addusers, req.body, (err, res) => {
        if (err) console.log(err);
        else console.log(res);
        // if (err) {
        //     var date = {
        //         code: 8002,
        //         message: '添加失败'
        //     }
        //     res.send(date)
        // } else {
        //     var date = {
        //         code: 0,
        //         message: '添加成功'
        //     }
        //     res.send(date)
        // }
    })
    connection.end();
})
app.listen(1234, () => {
    console.log('http://127.0.0.1:1234')
})