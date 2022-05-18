import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import './assets/js/phone.js'
// 引入路由
import router from './router/index'
// 引入仓库
import store from './store/index'

// 引入 Vant 库
import './plugins/vant.js'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts;
import echarts from './plugins/echarts'
Vue.use(echarts)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this;
    document.querySelector('body').setAttribute('style','margin:0 auto');
  }
}).$mount('#app')
