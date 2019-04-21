<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="#"><b>ADMIN UCAN</b></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-brand href="#"></b-navbar-brand>
            <b-navbar-brand href="#"></b-navbar-brand>
            <b-navbar-brand @click.prevent="logout()">Sair</b-navbar-brand>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-container fluid>
    <b-row>
      <b-col cols="4">
        <b-list-group v-b-scrollspy:listgroup-ex>
          <b-list-group-item href="#list-item-1">Usuários</b-list-group-item>
          <b-list-group-item href="#list-item-2">Profissões</b-list-group-item>
          <b-list-group-item href="#list-item-3">Materiais</b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col cols="8">
        <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:300px">
          <h4 id="list-item-1">Item 1</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-2">Item 2</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-3">Item 3</h4>
        </div>
      </b-col>
    </b-row>
  </b-container>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DashAdmin',
  data: function () {
    return {
      admin: {
        email: ''
      },
      authorized: false
    }
  },
  created: function () {
    const tokenAdmin = localStorage.getItem('tokenAdmin')

    if (tokenAdmin !== null) {
      this.authorized = true
      axios.get('http://127.0.0.1:3000/perfil.admin', {headers: {'x-acess-token': tokenAdmin}})
        .then(response => {
          this.admin.email = response.data.email
        })
        .catch(e => {
          console.log('erro na autorização')
        })
    }
  },
  methods: {
    logout: function () {
      localStorage.removeItem('tokenAdmin')
      this.$router.push({name: 'Admin'})
    }
  }
}
</script>
