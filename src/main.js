import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'materialize-css/dist/js/materialize.min';
// import 'materialize-css/dist/css/materialize.min.css';
import './styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// TODO вынести счетчик страниц в миксин