const Router = require('koa-router');
const controllers = require('../lib/mounter').controllers;

// const middlewares = require('../lib/mounter').middlewares;

let router = new Router();


// TODO remove this
router.get('/', async ctx => {
    ctx.body = { hello: 'hello world' };
});

/**
 * 路由规则说明:以类别来放路由，好区分管理；比如api.js 则都放api相关
 * 比如某目录下的所有url下都需要加认证中间件
 * router.use('/ucenter',middlewares.session);
 *
 * 特殊url 需要加某个中间件
 * router.get('/v1/mixed/index', middlewares.session, controllers.v1.mixed.get);
 *
 * controller 支持多种方式写，方便不同根据各自喜好选择
 */


//请求处理 controller 方式 (单个文件对应N个处理请求, N>=1),TODO:移除
router.post('/v1/users3', controllers.v1.testController.post);
router.put('/v1/users3', controllers.v1.testController.put);
router.get('/v1/users3/:id', controllers.v1.testController.getUser);
router.delete('/v1/users3/:id', controllers.v1.testController.deleteUser);

module.exports = router;
