import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Perfil from '@/components/Perfil'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Layout from 'bootstrap-vue/es/components/layout'
import Progress from 'bootstrap-vue/es/components/progress'
Vue.use(Progress)
Vue.use(Layout)
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
      path: '/perfil',
      name: 'Perfil',
      component: Perfil
    }
  ]
})
