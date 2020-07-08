import Vue from 'vue'
import VueRouter from 'vue-router'    //引入vue-Router
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from "./router/router.js"
import Vant from 'vant';
import 'vant/lib/index.css';
import "./assets/iconfont/iconfont.css";

Vue.use(VueRouter);   //全局使用  vue-ROuter

Vue.use(ElementUI);

Vue.use(Vant);
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
new Vue({
  el:'#app',
  router, //注入到根实例中
  render: h => h(App)
})
