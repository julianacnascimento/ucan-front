<template>
  <div v-if="authorized">
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand><b>ADMIN UCAN</b></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-brand href="#" @click.prevent="logout()">Sair</b-navbar-brand>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-container fluid>
        <!-- <b-row class="text-center">
          <b-col></b-col>
          <b-col sm="auto"> -->
            <div align="center" class="mt-3">
              <b-tabs content-class="mt-3" align="center">
                <b-tab title="Usuários" active><p></p></b-tab>
                <b-tab title="Profissões"><p></p></b-tab>
                <b-tab title="Materiais"><p></p></b-tab>
              </b-tabs>
            </div>
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
    } else {
      this.$router.push({name: 'Admin'})
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
