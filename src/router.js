import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/tabbar/Home.vue'
import Member from "./views/tabbar/Member.vue"
import Cart from "./views/tabbar/Cart.vue"
import Search from "./views/tabbar/Search.vue"

// 引入新闻相关的组件
import NewsList from './views/news/List.vue'
import NewsDetail from './views/news/Detail.vue'

// 引入图片分享相关的组件
import PicList from './views/picshare/List.vue'
import PicDetail from './views/picshare/Detail.vue'

// 引入商品相关的组件
import GoodsList from './views/goods/List.vue'
import GoodsDetail from './views/goods/Detail.vue'

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
    },
    {
      // ：参数  后面如果加上? 表示这个参数可有可无

      // 用户既可以通过 /pic/list 来访问这个页面
      // 也可以通过 /pic/list/19  来访问这个页面

      // ?cateid = 19
      path: '/pic/list/:cateid?',
      component: PicList
    },
    {
      path: '/pic/detail/:id',
      component: PicDetail
    },
    {
      path: '/goods/list',
      component: GoodsList
    },
    {
      path: '/goods/detail',
      component: GoodsDetail
    }
  ]
})
