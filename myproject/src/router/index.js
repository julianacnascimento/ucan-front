import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Perfil from '@/components/Perfil'
import AddUsuario from '@/components/AddUsuario'
import Admin from '@/components/Admin'
import Teste from '@/components/Teste'
import EditarPerfil from '@/components/EditarPerfil'
import DashAdmin from '@/components/DashAdmin'
// import Profissao from '@/components/Profissao'
import ListProfissoes from '@/components/ListProfissoes'
import AddProfissoes from '@/components/AddProfissoes'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Button from 'bootstrap-vue/es/components/button'
import axios from 'axios'
import Layout from 'bootstrap-vue/es/components/layout'
import Progress from 'bootstrap-vue/es/components/progress'
import ListGroup from 'bootstrap-vue/es/components/list-group'

Vue.use(ListGroup)
Vue.use(Progress)
Vue.use(Layout)

Vue.prototype.$http = axios
Vue.use(Button)
Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/teste',
      name: 'Teste',
      component: Teste
    },
    {
      path: '/usuario/add',
      name: 'AddUsuario',
      component: AddUsuario
    },
    {
      path: '/perfil/',
      name: 'Perfil',
      component: Perfil
    },
    {
      path: '/perfil/editar/:id',
      name: 'EditarPerfil',
      component: EditarPerfil
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/dashboard',
      name: 'DashAdmin',
      component: DashAdmin
    },
    {
      // path: 'dashboard/add/profissoes',
      path: '/add/profissoes',
      name: 'AddProfissoes',
      component: AddProfissoes
    },
    {
      path: '/list/profissoes',
      name: 'ListProfissoes',
      component: ListProfissoes
    }
  ]
})
