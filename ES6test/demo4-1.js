const sql = require('./demo4');
const __data = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test',
    port: 3306
}
var sqlConnect = new sql(__data);
var dbFn = {
    sel: async () => {
        console.log(await sqlConnect.query('select * from users'))
    }
}
dbFn.sel();
module.exports = dbFn;