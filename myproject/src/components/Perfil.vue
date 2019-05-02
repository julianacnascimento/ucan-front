<template>
  <div v-if="authorized">
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#"></b-navbar-brand>

    <b-navbar-brand href="/perfil"><b>UCAN</b></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <div class="ml-auto">
      <b-dropdown
        split split-href="" text="Opções" class="m-2"
      >
        <b-dropdown-item href="/perfil/editar/">Editar Perfil</b-dropdown-item>
        <b-dropdown-item @click.prevent="logout()">Sair</b-dropdown-item>
      </b-dropdown>
    </div>
  </b-navbar>
<b-container class="bv-example-row">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <b-row>
    <b-col cols="12" md="4">
        <div class="mt-3">
  <b-card
    border-variant="primary"
    no-body
    style="max-width: 20rem;"
    img-src="https://1cfrbv1cz8j13t7nr4n67ss1-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/CX-Superhero-preview.png"
    img-alt="Image"
    img-top
  >
    <h4 slot="header">{{usuario.nome}}</h4>

    <b-card-body>
        <!-- <b-list-group flush> -->
        <b-list-group-item>Faculdade: Universidade Federal da Paraíba</b-list-group-item>
        <b-list-group-item>Curso: Sistemas de Informação</b-list-group-item>
        <b-list-group-item>Matrícula: 123456</b-list-group-item>
    </b-card-body>
  </b-card>
</div>
    </b-col>
    <b-col cols="12" md="8">
        <div class="mt-3">
    <b-card-group deck>
        <b-card border-variant="primary" header="Personalidade" align="center">
        <!-- <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text> -->
      </b-card>
      <b-card border-variant="primary" header="Conquistas" align="center">
        <!-- <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text> -->
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card border-variant="primary" header="Profissões" align="center">
        <h6>Profissão A</h6>
        <div><b-progress :value="value" class="mb-3"></b-progress></div>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card border-variant="primary" header="Materiais" align="center">
          <h6>Material A</h6>
          <div><b-progress :value="value" class="mb-3"></b-progress></div>
      </b-card>
    </b-card-group>
  </div>
</b-col>
</b-row>
</b-container>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Perfil',
  data: function () {
    return {
      usuario: {
        nome: '',
        email: ''
      },
      authorized: false
    }
  },
  created: function () {
    const token = localStorage.getItem('token')
    if (token !== null) {
      this.authorized = true
      axios
        .get('http://127.0.0.1:3000/perfil', {headers: {'x-access-token': token}})
        .then(response => {
          this.usuario.nome = response.data.nome
          this.usuario.email = response.data.email
        })
        .catch(e => {
          console.log('erro na autorização')
        })
    } else {
      this.$router.push({name: 'Home'})
    }
  },
  methods: {
    logout: function () {
      localStorage.removeItem('token')
      this.$router.push({name: 'Home'})
    }
  }
}
</script>
