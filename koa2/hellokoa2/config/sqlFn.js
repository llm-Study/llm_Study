const sqlDc = require('./sqlDc');

let sqlFn = {
    select: () => {
        let sql = `select * from users`
        return sqlDc.query(sql)
    },
    add: () => {
        let sql = 'insert into users(u_name,u_pass)values(?,?)'
        return sqlDc.query(sql)
    },
    selarticle: () => {
        let sql = 'select * from user_article'
        return sqlDc.query(sql)
    },
    addarticle: () => {
        let sql = 'insert into user_article(article_name,article_content,u_id)values(?,?,?)'
        return sqlDc.query(sql)
    },
    Verification: (user) => {
        let sql = `select * from users where u_name="${user.u_name}" and u_pass="${user.u_pass}"`
        return sqlDc.query(sql)
    },
    update:(user)=>{
        let sql = `update users set u_name="${user.u_name}",status="${user.status}"where u_id=${user.u_id}`
        return sqlDc.query(sql)
    }
}
module.exports = sqlFn