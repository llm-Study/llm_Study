import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//在不兼容ios的情况下
router.beforeEach((to,from,next)=>{
  //做个判断
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();//执行下一步跳转
});