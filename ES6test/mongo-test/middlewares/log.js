const log = require('log4js');
class log4Demo {
    constructor() {
        /**
         * stdout,err都是自定义参数名
         * type:记录日志文件类型,注意大小写
         * pattern:日志文件名的格式
         * 
         * categories  作为getLooger方法的键名对昵称
         */
        log.configure({
            appenders: {
                stdout: {
                    type: 'stdout' //控制台打印信息
                },
                chesse: {
                    type: 'file',
                    filename: './log/chesse.log'
                },
                err: {
                    type: 'dateFile',
                    filename: './log/error.log',
                    pattern: 'yyyyMMdd-out.log'
                }
            },
            categories: {
                default: {
                    appenders: ['chesse'],
                    level: 'info'
                },
                error: {
                    appenders: ['err'],
                    level: 'error'
                }
            }
        })
        this.info = (information) => {
            let logger_info = log.getLogger('app') //app这个参数会先在categories中找,如果没有默认使用default
            logger_info.info(information);
        }
        this.error = (information) => {
            let logger_info = log.getLogger('error');
            logger_info.error(information);
        }
    }
}
module.exports = new log4Demo();