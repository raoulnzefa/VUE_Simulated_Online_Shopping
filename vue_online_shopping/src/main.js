// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router.config'
import axios from  'axios'
import VueLazyload from 'vue-lazyload'
import './assets/font/iconfont.css'
import './assets/css/base.css'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
})


Vue.config.productionTip = false  //Stop production tips

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //1.0 style
  // components: { App },
  // template: '<App/>'
  render: h => h(App) //2.0 style, means create an app
})
