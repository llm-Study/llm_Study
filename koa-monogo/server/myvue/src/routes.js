import Vue from 'vue';
import Router from 'vue-router';
import route1 from './route/route1';
import { from } from 'rxjs';
// import route2 from './route/route2';
Vue.use(Router)
//合并路由
let routes = [...route1]
const router =  new Router({
    model: 'history',
    routes,
    base: process.env.BASE_URL
})
// router.beforeEach((to,from,next)=>{

// })
export default router