import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {};

Vue.use(Toast, options);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// TODO вынести счетчик страниц в миксин