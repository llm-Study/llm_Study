var mysql = require('mysql');
var sqlFn = require('../sqlDC/sqlFn');
var db = require('../config/db');
var pool = mysql.createPool(db.mysql); //连接数据池

module.exports = {
    select: function (callback) {
        pool.query(sqlFn.select, function (err, result) {
            if (err) throw err
            callback(result)
        })
    },
    add: function (user, callback) {
        pool.query(sqlFn.add, [user.u_name, user.u_pass], (err, result) => {
            if (err) throw err
            callback(result.affectedRows > 0)
        })
    },
    delete: function (id, callback) {
        pool.query(sqlFn.del, id, (err, result) => {
            if (err) throw err
            callback(result.affectedRows > 0)
        })
    },
    Verification: function (user, callback) {
        pool.query(sqlFn.Verification, [user.u_name, user.u_pass], (err, result) => {
            if (err) throw err
            callback(result)
        })
    },
    getById: function (Id, callback) {
        pool.query(sqlFn.getById, Id, (err, result) => {
            if (err) throw err
            callback(result)
        })
    },
    updateuser: function (user, callback) {
        pool.query(sqlFn.update, [user.u_name, user.status, user.u_id], (err, result) => {
            if (err) throw err
            callback(result.affectedRows > 0)
        })
    },
    addarticle: function (user, callback) {
        pool.query(sqlFn.addarticle, [user.article_name, user.article_content, user.u_id], (err, result) => {
            if (err) throw err
            callback(result.affectedRows > 0)
        })
    },
    selectarticle:function(callback){
       pool.query(sqlFn.selarticle,function(err,result){
        //    console.log(result)
           if(err) throw err
           callback(result)
       })
    }
}