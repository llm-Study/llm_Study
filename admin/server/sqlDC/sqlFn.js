module.exports = {
    select: 'select * from users',
    add: 'insert into users(u_name,u_pass)values(?,?)',
    del: 'delete from users where u_id = ?',
    Verification: "select * from users where u_name=? and u_pass=?", //登录验证
    getById: 'select * from users where u_id=?',
    update: 'update users set u_name=?,status=? where u_id=?',
    addarticle:'insert into user_article(article_name,article_content,u_id)values(?,?,?)',
    selarticle:'select * from user_article'
}