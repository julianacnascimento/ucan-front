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
          <th>Editar</th>
          <th>Deletar</th>
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
// import axios from 'axios'
export default({
  el: '#app',
  data () {
    return {
      cadastros: [],
      showAlerta: false,
      alerta: {
        tipo: '',
        message: ''
      },
      modal: {
        title: '',
        id: null,
        data: {}
      }
    }
  },
  methods: {
    closeAlerta () {
      this.showAlerta = false
    },
    edit (row, id) {
      this.modal.title = 'Editar'
      this.modal.id = id
      this.modal.data = (row)(this.$refs.modal).modal('show')
    },
    add () {
      this.modal.title = 'Novo'
      this.modal.id = null
      this.modal.data = {}(this.$refs.modal).modal('show')
    },
    deletar (k) {
      this.$delete(this.cadastros, k)
      window.localStorage.setItem('cadastros', JSON.stringify(this.cadastros))
      this.alerta.tipo = 'warning'
      this.alerta.message = 'Usuario removido com sucesso'
      this.showAlerta = true
    },
    save () {
      if (this.modal.id || this.modal.id === 0) {
        this.cadastros[this.modal.id] = this.modal.data
      } else {
        this.cadastros.push(this.modal.data)
      }
      window.localStorage.setItem('cadastros', JSON.stringify(this.cadastros))
      this.alerta.tipo = 'success'
      this.alerta.message = 'Usuario alterado com sucesso'
      this.showAlerta = true
      this.$refs.modal.modal('hide')
    }
  },
  created () {
    if (window.localStorage.getItem('cadastros') === null) {
      window.localStorage.setItem('cadastros', JSON.stringify([
      // {name : "Mariana", fullname : "Aguiar Souza", email : "mariana@mail.com"},
      // {name : "Fabiana", fullname : "Bueno", email : "fabiana@mail.com"},
        // {name : "Renata", fullname : "Costa Barros", email : "renata@mail.com"}
      ]))
    }
    this.cadastros = JSON.parse(window.localStorage.getItem('cadastros'))
  }
})
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
