import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Member from "./views/Member.vue"
import Cart from "./views/Cart.vue"
import Search from "./views/Search.vue"

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
    }
  ]
})
