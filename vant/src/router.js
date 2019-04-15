import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Footer/Home'
import Case from './components/Footer/Case'
import Me from './components/Footer/Me'
Vue.use(VueRouter);
const routes = [
    {path: '/',component: Home,meta:{title:'首页',keepAlive: true}},
    {path: '/Case',component: Case,meta:{title:'文案',keepAlive: true}},
    {path: '/Me',component: Me,meta:{title:'我的',keepAlive: true}}
]

export default new VueRouter({
    routes,
    mode: 'hash',
})