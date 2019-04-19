export default [{
    path: '/HomeIndex',
    name:'主页',
    admin:1,
    redirect:'/HomeAdmin',
    component: () => import('../Home/HomeIndex'),
    children: [{
        path: '/HomeAdmin',
        component: () => import('../Home/HomeAdmin'),
    }, {
        path: '/HomeUser',
        admin:0,
        component: () => import('../Home/HomeUser'),
    }]
}]