import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'
import './plugins/VueAwesomeSwiper'

//全局样式
import "./assets/css/reset.css";
//移动端适配
import "./assets/js/phone.js";

//全局接口
import api from "./api/base";
Vue.prototype.$api = api;



Vue.config.productionTip = false;
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
