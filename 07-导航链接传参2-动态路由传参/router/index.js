import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    // 1.配置动态路由
    // words前面加了冒号，代表动态路由，可以匹配多个路径
    // 例如/search/stydy，/search/heima都可以匹配到
    { path: '/search/:words', component: Search }
  ]
})

export default router