const mysql = require('mysql')
const mysqlConfig = require('../mysql/sqlConfig');
const pool = mysql.createPool({
    host: mysqlConfig.mysql.host,
    user: mysqlConfig.mysql.user,
    password: mysqlConfig.mysql.password,
    database: mysqlConfig.mysql.database
})

let allServer = {
    query: (sql, values) => {
        return new Promise((resolve, reject) => {
             pool.getConnection((err,connection)=>{
                 if(err){
                    reject(err)
                 }else{
                    connection.query(sql,values,(err,rows)=>{
                        if(err){
                            reject(err)
                        }else{
                            resolve(rows)
                        }
                        connection.release()
                    })
                 }
             })
        })
    }
}
module.exports = allServer