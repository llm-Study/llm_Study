const mysql = require('mysql');
class Mysql {
    constructor(options) {
        let connectionOptions = {
            host: options.host,
            user: options.user,
            password: options.password,
            database: options.database
        }
        this.config = connectionOptions
        this.ConnectInit();
    }
    ConnectInit() {
        this.pool = mysql.createPool(this.config);
        this.pool.on('error', (err) => {
            console.log(err, 'sql is not connection')
        })
    }
    query(sql, value) {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if (err) console.log(err)
                connection.query(sql, value, (err, row) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(row)
                    }
                    connection.release()
                }) 
            })
        })
    }
}
module.exports = Mysql;