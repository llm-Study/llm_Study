/**
 * services   Base基类
 * 构造函数db,logger属性
 */
class Base {
    constructor(context) {
        this.mysql = context.mysql;
        this.mssql = context.mssql;
        this.logger = context.logger;
        this.configs = context.configs;
    }
}