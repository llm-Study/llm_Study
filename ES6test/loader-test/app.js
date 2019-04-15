const Koa = require('koa');
const app = new Koa();
const {
    middlewares
} = require('./lib/mounter')
// app.use(middlewares.middlewares())