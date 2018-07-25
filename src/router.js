import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/tabbar/Home.vue'
import Member from "./views/tabbar/Member.vue"
import Cart from "./views/tabbar/Cart.vue"
import Search from "./views/tabbar/Search.vue"

// 引入新闻相关的组件
import NewsList from './views/news/List.vue'
import NewsDetail from './views/news/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/news/list',
      component: NewsList
    },
    {
      path: '/news/detail',
      component: NewsDetail
    }
  ]
})
