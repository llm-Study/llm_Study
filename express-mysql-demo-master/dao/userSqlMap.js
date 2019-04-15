var userSqlMap = {
    add: 'insert into users(u_name, u_pass) values(?, ?)',
    deleteById: 'delete from users where u_id = ?',
    update: 'update users set u_name=?, u_pass=? where u_id=?',
    list: 'select * from users',
    getById: 'select * from users where u_id = ?'
};

module.exports = userSqlMap;