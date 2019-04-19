import Vue from 'vue'
import Router from 'vue-router'
import loginRouter from './routers/loginRouter'
import HomeRouter from './routers/HomeRouter'
Vue.use(Router)
const routes = [...loginRouter, ...HomeRouter]
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})