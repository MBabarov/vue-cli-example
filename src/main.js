import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import VeeValidate from 'vee-validate'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(VeeValidate)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
