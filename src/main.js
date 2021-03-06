// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import VueSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VueSwiper)
Vue.use(VueResource);

import store from './store/index.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
