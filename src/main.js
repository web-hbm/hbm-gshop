import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/iconfont/iconfont.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Swiper from 'swiper'

Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
