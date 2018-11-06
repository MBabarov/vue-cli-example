import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import VeeValidate from 'vee-validate'
import App from '@/App'
import router from '@/router'

Vue.config.productionTip = false

Vue.use(VeeValidate)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
