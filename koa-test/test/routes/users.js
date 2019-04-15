const router = require('koa-router')()
const querystring = require('querystring');
router.prefix('/users')
let FnPromise = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, time)
  })
}
let start1 = async function (ctx, next) {
  console.log('start1:' + new Date())
  console.log(querystring.escape('哈哈哈'))
  console.log(querystring.unescape("%E5%93%88%E5%93%88%E5%93%88"))
  await FnPromise(3000)
  console.log('start1' + new Date())
}
let start2 = async function () {
  console.log('start2:' + new Date())
  start1();
  console.log('start2' + new Date())
}
router.get('/', async function (ctx, next) {
  start2();
  ctx.body = 'hello'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router