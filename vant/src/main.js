import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css';
import router from './router'
Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next();
})