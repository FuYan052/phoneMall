// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import RegionPicker from 'vue-region-picker'
import REGION_DATA from 'china-area-data'


import App from './App'
import CkeckCode from "@/components/checkcode/CkeckCode"
import router from './router'
import store from './store'
import * as $http from './requests'

Vue.use(Antd)

Vue.config.productionTip = false;
Vue.prototype.$http = $http;
Vue.use(RegionPicker, {
  region: REGION_DATA
});

// router.beforeEach((to, from, next) => {
//   const token = store.state.token ? store.state.token : window.sessionStorage.getItem('token')
// }),

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, CkeckCode },
  template: '<App/>'
})
