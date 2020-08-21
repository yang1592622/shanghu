import Vue from 'vue'
import App from './App.vue'

//引入vue-resource
import VueResource from 'vue-resource';  //安装后引入vue-resource
Vue.use(VueResource);


//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


import './assets/css/index.css';
import './assets/css/date.css';


//引入路由
import router from './router/router.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


//Vue.http.options.emulateJSON = true
//Vue.http.options.headers = {
//  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//}
