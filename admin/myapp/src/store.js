import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        user: JSON.parse(localStorage.getItem('user'))
    },
    getters: {
        getuser: (state) => {
            if(!state.user === ''){
                user =  JSON.parse(localStorage.getItem('user')) || null
            }
            return state.user
        }
    },
    mutations: {
        $Set: (state, value) => {
            state.user = value
            localStorage.setItem('user', JSON.stringify(value))
        }
    },
    actions:{}
})
export default store