const statues = require('./statuses');

/**
 *
 * BaseController
 */
class BaseController {

    constructor(context) {
        this.context = context;
        this.configs = context.configs;
        this.logger = context.logger;
        this.services = context.services;
    }

    /**
     * respond 构造响应body
     * @param {Object} data
     * @param {Status} status
     * @param {String} message
     */
    respond(data, status = 0, message) {
        if (message === undefined) {
            message = this.status(status);
        }
        return { data: data, status: status, message: message };
    }
    /**
     * 根据code取状态码对应的message
     * @param {Int} code
     */
    status(code) {
        return statues[code];
    }

}

module.exports = BaseController;
