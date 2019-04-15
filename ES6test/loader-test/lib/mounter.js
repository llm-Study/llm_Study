const path = require('path');
const loaderRouter = require('../routes/router');
const fs = require('fs');
/*    loader:目录加载器,按照目录层次来加载
 * options:{
 *           exports   {Object},导出目标对象
 *           directory {String},目录路径
 *           capitalizeClass   {Boolean},是否格式化类首字母(大写)默认为false
 *           skipIndex {Boolean},是否跳过index.js,默认为true
 *           loader    {Function},自定义加载器
 *    }
 */
function loadDirectory(options) {
    let configs = Object.assign({
        capitalizeClass: false,
        skipIndex: true
    }, options)
    let {
        exports,
        directory,
        capitalizeClass,
        skipIndex
    } = configs;
    fs.readdirSync(directory).forEach(flitem => {
        console.log(flitem)
        console.log(process.env.NODE_ENV)
    })
    // console.log(configs)
}
let mounter = {
    //中间件
    middlewares: {},
    services: {},
    controllers: {},
    routers: function (app) {
        console.log(app)
        loadDirectory({
            exports: {},
            app: app,
            directory: path.resolve(__dirname, '../routes'),
            loader: loaderRouter
        })
    },
    loader: loadDirectory
}

loadDirectory({
    exports: mounter.middlewares,
    directory: path.resolve(__dirname, '../middlewares'),
})
// 加载services
// loadDirectory({
//     exports: mounter.services,
//     directory: path.resolve(__dirname, '../services'),
//     capitalizeClass: true,
//     skipIndex: true
// });