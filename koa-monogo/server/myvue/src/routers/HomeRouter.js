export default [{
    path: '/HomeIndex',
    name: '主页',
    redirect: '/HomeAdmin',
    component: () => import('../Home/HomeIndex'),
    children: [{
        admin: 1,
        path: '/HomeAdmin',
        name: '用户列表',
        component: () => import('../Home/HomeAdmin'),
    }, {
        path: '/FoodList',
        name: '订单列表',
        admin: 0,
        component: () => import('../Home/FoodList'),
    }]
}]