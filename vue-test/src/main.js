import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: localStorage.getItem('user')
  },
  // getters:{

  // },
  mutations: {
    add(state, value) {
      state.user = value
      localStorage.setItem('user', value)
    }
  }
})
new Vue({
  render: h => h(App),
  store
}).$mount('#app')