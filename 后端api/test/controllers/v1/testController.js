const BaseController = require('../../lib/baseController');

class UserController extends BaseController {

    /**
     * @api {POST} /v1/users3  add user
     * @apiGroup users3
     * @apiVersion 1.0.3
     * @apiParam {String} name name of user
     * @apiParam {String} password password of user
     * @apiParam {String} [sex] Optional, sex of user
     * @apiSuccess {Number} status 状态码0
     * @apiSuccess {String} message 消息
     * @apiSuccess {Object} user  user信息
     * @apiSuccess {String} user.name  user名称
     * @apiSuccess {Number} user.id  用户id
     * @apiSuccess {String} user.password 用户密码
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": 0,
     *       "user":  {
     *           id:0,
     *           name:'name'
     *       }
     *     }
     */
    async post(ctx, next) {
        let context = ctx.context,
            logger = context.logger,
            services = context.services;
       
        let userService = new services.User(context);

        ctx.checkBody('name').notEmpty().withMessage('无效的名称');
        let errors = await ctx.getValidationResult();
        if (!errors.isEmpty()) {
            ctx.status = 422;
            ctx.body = this.respond(null, 422, errors.array());
            logger.warn('validate error', errors.array());
            return false;
        }

        this.logger.info('add users2', ctx.request.body);
        try {


            let mUser = ctx.request.body;
            mUser.created_time = new Date();
            mUser.updated_time = new Date();
        
            let user = await userService.addUser(mUser);
            ctx.body = this.respond(user, 0, 'ok');

        } catch (e) {

            logger.error('add user error', e);
            ctx.body = this.respond(0, 500, e.message);
            ctx.status = 500;
        }
    }


    /**
     * @api {PUT} /v1/users3  modify user
     * @apiGroup users3
     * @apiVersion 1.0.3
     * @apiParam {String} name name of user
     * @apiParam {String} password password of user
     * @apiSuccess {Number} status 状态码0
     * @apiSuccess {String} message 消息
     * @apiSuccess {Object} user  user信息
     * @apiSuccess {String} user.name  user名称
     * @apiSuccess {Number} user.id  用户id
     * @apiSuccess {String} user.password 用户密码
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": 0,
     *       "user":  {
     *           id:0,
     *           name:'name'
     *       }
     *     }
     */
    async put(ctx, next) {


        ctx.checkBody('name').notEmpty().withMessage('无效的名称');
        ctx.checkBody('id').isInt({ gt: 0 }).withMessage('无效的Id');

        let errors = await ctx.getValidationResult();
        if (!errors.isEmpty()) {
            ctx.status = 422;
            ctx.body = this.respond(null, 422, errors.array());
            this.logger.warn('validate error', errors.array());
            return false;
        }

        let userService = new this.services.User(this.context);

        try {


            let mUser = ctx.request.body;
            mUser.updated_time = new Date();

            let user = await userService.update(mUser);
            ctx.body = this.respond(user, 0, 'ok');

        } catch (e) {

            this.logger.error('update user error', e);
            ctx.body = this.respond(0, 500, e.message);
            ctx.status = 500;
        }

    }


    /**
     * @api {DELETE} /v1/users3/:userId  delete user
     * @apiGroup users3
     * @apiVersion 1.0.3
     * @apiParam {Number} userId id of user
     * @apiSuccess {Number} status 状态码0
     * @apiSuccess {String} message 消息
     *
     */
    async deleteUser(ctx, next) {

        ctx.checkParams('id').notEmpty().isInt({ gt: 0 }).withMessage('无效的Id');

        let errors = await ctx.getValidationResult();
        if (!errors.isEmpty()) {
            ctx.status = 422;
            ctx.body = this.respond(null, 422, errors.array());
            this.logger.warn('validate error', errors.array());
            return false;
        }


        this.logger.info('delete user:', ctx.params.id);

        let userService = new this.services.User(this.context);

        try {

            let isSuc = await userService.delUser(ctx.params.id);
            if (!isSuc) {
                ctx.body = this.respond(null, 404);
                return;
            }
            ctx.body = this.respond(null, 0, ' ok');

        } catch (e) {

            this.logger.error('delete user error', e);
            ctx.body = respond(0, 500, e.message);
            ctx.status = 500;
        }
    }

    /**
     * @api {GET} /v1/users3/:userId  get user
     * @apiGroup users3
     * @apiVersion 1.0.3
     * @apiParam {Number} userId id of user
     * @apiSuccess {Number} status 状态码0
     * @apiSuccess {String} message 消息
     * @apiSuccess {Object} user  user信息
     * @apiSuccess {String} user.name  user名称
     * @apiSuccess {Number} user.id  用户id
     * @apiSuccess {String} user.password 用户密码
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": 0,
     *       "user":  {
     *           id:0,
     *           name:'name'
     *       }
     *     }
     */
    async getUser(ctx, next) {
        ctx.checkParams('id').notEmpty().isInt({ gt: 0 }).withMessage('无效的Id');

        let errors = await ctx.getValidationResult();
        if (!errors.isEmpty()) {
            ctx.status = 422;
            ctx.body = this.respond(null, 422, errors.array());
            this.logger.warn('validate error', errors.array());
            return false;
        }
        this.logger.debug('get user:', ctx.params.id);

        let userService = new this.services.User(this.context);

        try {
            

            let user = await userService.get(ctx.params.id);
            if (!user) {
                ctx.body = this.respond(null, 404);
                return;
            }
            this.logger.debug('get users:', user);
            ctx.body = this.respond(user, 0, ' ok');

        } catch (e) {

            this.logger.error('get user error', e);
            ctx.body = this.respond(0, 500, e.message);
            ctx.status = 500;
        }

    }
}

module.exports = UserController;
