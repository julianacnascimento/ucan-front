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
<div class="mt-3">
    <b-container class="bv-example-row">
  <b-tabs content-class="mt-3">
    <b-tab title="Usuários" active>
      <b-table striped hover small :items="items1" :fields="fields1"></b-table>
      <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table">
    </b-pagination>
    </b-tab>

    <b-tab title="Profissões">
      <!-- <div class="col-md-3"></div> -->
      <b-table striped hover small :items="items2" :fields="fields2">
      </b-table>
      <div align="right"><div>
  <b-button variant="success" v-b-modal.modal-1>Adicionar</b-button>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table">
    </b-pagination>
  <b-modal id="modal-1" title="Adicione uma nova profissão!" ok-title="Salvar" ok-variant="primary" cancel-variant="danger" cancel-title="Cancelar" >
    <div class="my-4">
      <b-row class="my-1" v-for="type in types2" :key="type" >
      <b-col sm="3" align="left">
        <label :for="`type-${type}`">{{ type }}:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
    </div>
  </b-modal>
</div>
</div>
</b-tab>
    <b-tab title="Materiais">
      <b-table striped hover small :items="items3" :fields="fields3"></b-table>
      <div align="right"><div>
  <b-button variant="success" v-b-modal.modal-1>Adicionar</b-button>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table">
    </b-pagination>
  <b-modal id="modal-1" title="Adicione um novo material!" ok-title="Salvar" ok-variant="primary" cancel-variant="danger" cancel-title="Cancelar" >
    <div class="my-4">
      <b-row class="my-1" v-for="type in types3" :key="type" >
      <b-col sm="3" align="left">
        <label :for="`type-${type}`">{{ type }}:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
    </div>
  </b-modal>
</div>
</div>
    </b-tab>
  </b-tabs>
    </b-container>
</div>
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
      authorized: false,
      types2: [
        'Nome',
        'Descrição',
        'Competências'
      ],
      types3: [
        'Título',
        'Descrição',
        'Link'
      ]
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
