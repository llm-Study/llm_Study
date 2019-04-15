export default [
    //登录父组件
    {
        path: '/',
        name: 'loginIndex',
        hidden: true,
        component: () => import('../loginIndex.vue'),
        children: [
            //登录
            {
                path: '/',
                name: 'login',
                component: () => import('../login/login.vue')
            },
            //注册
            {
                path: '/loginUp',
                name: 'loginUp',
                component: () => import('../login/loginUp.vue')
            }
        ]
    },
    //主页父组件
    {
        path: '/home',
        name: '主页导航',
        redirect: '/admin',
        admin:1,
        component: () => import('../Home.vue'),
        children: [{
                path: '/admin',
                name: '用户列表',
                component: () => import('../Home/admin.vue'),
                meta: {
                    keepAlive: true
                }
            },
            {
                path: '/adminInfo',
                name: '用户发布文章',
                component: () => import('../Home/adminInfo.vue'),
                meta: {
                    keepAlive: true
                }
            }
        ]
    },
    {
        path: '/Setup',
        name: '设置',
        admin:1,
        component: () => import('../Setup/Setup.vue')
    }
]