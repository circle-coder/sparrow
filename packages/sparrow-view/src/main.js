import Vue from 'vue'
import App from './App.vue'
import router from './router'
import box from '@sparrow/box'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/base.scss';

Vue.config.productionTip = false
Vue.use(box)
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')