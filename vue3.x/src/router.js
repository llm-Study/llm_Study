import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
  const routes =[//声明一const值为routes的变量
      {
        path: '/',
        name: 'Home',
        //在父级组件里面给子组件给个定位就行
        redirect:'/header',
        component: Home,
        children:[
          {
            path:'/header',
            name:'header',
            component:()=>import('./index/header'),
            //加入meta属性（meta属性还有个功能，联合这keep-alive使用，明天给你搞）
            meta:{
              title:'头'
            }
          },
             {
               path:'/About',
               name:'About',
               component:()=>import('./views/About'),
               meta:{
                title:'关于'
              }
             },
             {
               path:"/login",
               name:"login",
               component:()=>import('./views/login'),
               meta:{
                title:'登录'
              }
             }
        ]
  
      },//以上home组件


//单独的login组件，不会挂载到home组件里面，只会挂载到App.vue组件里面
  ]

export default new Router({//这里你要去看看es6语法（import与 export defaul ）
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})


/**
 * 路由定义；
 * routes必须是个数组。再用之前与引入router.我给你换一种方式，你好理解；
 * 
 * home 路由下面的所有组件都可以看作是home 组件的子组件，home组件里面有个router-view挂载。所有home组件里面cildren组件都是属于home组件的；
 * 
 * longin组件是属于你声明const routes ，也就这router的组件。你看包含的地方不同；
 * 
 * tips:  path:'/'  其中'/'表示默认的路径，其他就不解释了
 * 
 * 就是这样，不懂再问我
 * 
 * 
 * 
 * 
 * 
 * 
 */


























