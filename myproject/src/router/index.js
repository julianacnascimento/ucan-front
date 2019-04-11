import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddUsuario from '@/components/AddUsuario'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Button from 'bootstrap-vue/es/components/button'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(Button)
Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/usuarios/add',
      name: 'AddUsuario',
      component: AddUsuario
    }
  ]
})
