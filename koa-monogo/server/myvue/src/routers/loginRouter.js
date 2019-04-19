import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router)
export default [{
    path: '/',
    hidden:true,
    component: () => import('../login/loginIndex'),
    children: [{
            path: '/',
            component: () => import('../login/login')
        },
        {
            path: '/loginUp',
            component: () => import('../login/loginUp')
        }
    ]
}]