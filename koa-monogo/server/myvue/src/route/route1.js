//register(注册)login(登录)路由
export default [{
    //登录父组件
    path: '/',
    name: 'logIndex',
    hidden: true,
    component: () => import("../loginIn/logIndex.vue"),
    children: [{
        path: '/',
        name: 'login',
        component: () => import("../loginIn/login.vue"),
    }, {
        path: '/register',
        name: 'register',
        component: () => import("../loginIn/register.vue"),
    }]
}, {
    path: '*',
    name: '/404',
    component: () => import('../404/404.vue')
}]