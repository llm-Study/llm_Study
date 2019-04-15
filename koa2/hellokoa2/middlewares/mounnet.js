const compose = require('koa-compose')
const first = require('./first')
const second = require('./second')
const third = require('./third')
const middel = compose([first, second, third]);
module.exports = middel