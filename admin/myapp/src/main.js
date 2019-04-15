import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import VueQuillEditor from 'vue-quill-editor'
import "quill/dist/quill.snow.css";
import $cookies from 'vue-cookies';
Vue.config.productionTip = false
Vue.use($cookies)
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
