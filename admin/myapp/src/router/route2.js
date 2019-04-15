export default [
    {
        path:'/userInfo',
        name:'操作',
        admin:0,
        component:()=>import('../userInfo.vue'),
        redirect:'/user',
        children:[
            {
                path:'/user',
                name:'发布帖子',
                component:()=>import('../user/user.vue')
            }
        ]
    }
]