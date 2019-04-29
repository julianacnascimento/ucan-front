<template>
    <div v-if="authorized">
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="#"><b>ADMIN UCAN</b></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-brand @click.prevent="logout()">Sair</b-navbar-brand>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-container class="fluid" fluid>
    <b-row>
        <b-col class="col-container" cols="3">
          <b-list-group v-b-scrollspy:listgroup-ex>
            <b-list-group-item button>Usuários</b-list-group-item>
            <b-list-group-item button>Profissões</b-list-group-item>
            <b-list-group-item button>Materiais</b-list-group-item>
          </b-list-group>
        </b-col>
      <b-col cols="8">
        <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:300px">
          <b-list-group>
            <b-list-group-item>Profissões</b-list-group-item>
          <b-list-group-item>
              <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2">adicionar</button>
              <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2">remover</button>
          </b-list-group-item>
          </b-list-group>
        </div>
      </b-col>
    </b-row>
  </b-container>
    </div>
    <div v-else>
      <p>Você não está autorizado(a)!</p>
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
<style>
.container{
  margin: 0%;
  display: block;
  /* background-color: grey; */
}
.col-container{
  background-color: #007bff;
}
.btn {
  width: 7em;
  height: 2.5em;
}
</style>
