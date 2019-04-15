const Base = require('./base');
const moment = require('moment');
class User extends Base {
    /**
     * 查找用户
     * @param {Object} user
     */
    async selectUser(user) {
        sql = 'select * from users';
        const result = await this.mysql.use('test').query(sql);
        this.logger.debug('selectUser select', result);
    }
}
module.exports = User;