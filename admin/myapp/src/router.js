import Vue from 'vue'
import Router from 'vue-router'
import route1 from './router/route1'
import route2 from './router/route2'
Vue.use(Router)
//合并路由
let routes = [...route1 , ...route2]
export default new Router({
    mode:'history',
    routes,
    base: process.env.BASE_URL
})