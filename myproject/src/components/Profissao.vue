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
              <div class="container">
                <div class="alert" :class="{'alert-warning':alerta.tipo == 'warning','alert-success':alerta.tipo == 'success'}"
                v-if="showAlerta">{{alerta.message}}
                <button type="button" @click.prevent="closeAlerta" class="close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div class="text-right">
                <a href @click.prevent="add" class="btn btn-info btn-sm">Adicionar</a>
              </div>
              <table class="table mt-2">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Competências</th>
          <!-- <th></th>
          <th></th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-if="!cadastros || cadastros.length == 0 ">
          <td colspan="7" class="text-center">Sem profissões cadastradas</td>
        </tr>
        <tr v-else v-for-key="(c,k) in cadastros">
          <td>{{k+1}}</td>
          <td>{{c.name}}</td>
          <td>{{c.fullname}}</td>
          <td>{{c.email}}</td>
          <td>
            <a href @click.prevent="edit(c,k)" class="btn btn-warning text-danger btn-sm">Editar</a>
          </td>
          <td>
            <a href @click.prevent="deletar(k)" class="btn btn-danger btn-sm">Excluir</a>
          </td>
        </tr>
      </tbody>
    </table>
              </div>
            </div>
            <!-- # modal form -->
<div v-if="modal" ref="modal" class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="modalFormLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalFormLabel">{{modal.title}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form v-on:submit.prevent="save">
      <div class="modal-body">
          <div class="form-group row">
            <label class="col-form-label col-3">Nome</label>
            <div class="col-5">
              <input v-model="modal.data.name" class="form-control" required>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-form-label col-3">Descrição</label>
            <div class="col-5">
              <input v-model="modal.data.fullname" class="form-control" required>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-form-label col-3">Competências</label>
            <div class="col-5">
              <input type="email" v-model="modal.data.email" class="form-control" required>
            </div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        <button type="submit" class="btn btn-primary">Salvar</button>
      </div>
    </form>
          <!-- </b-col>
          <b-col></b-col>
        </b-row> -->
    </div></div></div>
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
