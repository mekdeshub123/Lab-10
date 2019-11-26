import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import StudentApiService from '@/services/StudentServices'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.prototype.$student_api = StudentApiService

new Vue({
  render: h => h(App),
}).$mount('#app')
