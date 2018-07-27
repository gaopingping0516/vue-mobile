import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入mint-ui相关的内容
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)

// 引入mui的样式
import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'
// import "./assets/mui/js/mui.js"


// 引入vue-preview插件
import VuePreview from "vue-preview"
Vue.use(VuePreview);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
