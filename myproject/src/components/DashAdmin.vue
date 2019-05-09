<template>
  <div>
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
                <b-tab title="Usuários" active>
                <b-container align="center">
                  <div>
                    <template>
                      <div>
                        <table border="1">
                          <tr>
                              <th>  ID  </th>
                              <th>  Nome  </th>
                              <th>  Email  </th>
                              <th>  Senha  </th>
                            </tr>
                            <tr v-for="(usuario) in usuario" :key="usuario.id">
                              <td>  {{usuario.id}}  </td>
                              <td>  {{usuario.nome}}  </td>
                              <td>  {{usuario.email}}  </td>
                              <td>  {{usuario.senha}}  </td>
                              <b-button v-b-modal.modal-lg variant="danger" size="sm" @click.prevent="deletar(usuario.id, index)"> del </b-button>
                            </tr>
                        </table>
                      </div>
                    </template>
                  </div>
                </b-container>
                </b-tab>
                <b-tab title="Profissões">
                  <b-container align="center">
                    <div>
                      <template>
                        <div>
                        <table border="1">
                          <tr>
                              <th>  ID  </th>
                              <th>  Nome  </th>
                              <th>  Descrição  </th>
                              <th>  Competências  </th>
                            </tr>
                            <tr block v-for="(profissao) in profissao" :key="profissao.id">
                              <td>  {{profissao.id}}  </td>
                              <td>  {{profissao.nome}}  </td>
                              <td>  {{profissao.descricao}}  </td>
                              <td>  {{profissao.competencias}}  </td>
                              <b-button variant="danger" size="sm">delete</b-button>
                              <b-button variant="primary" size="sm">edit</b-button>
                            </tr>
                        </table>
                        </div>
                      </template>
                      <b-modal id="modal-lg" size="xl" slot="" title="Adicione uma nova profissão!" hide-footer>
                      <b-row class="my-3" >
                        <b-col sm="2" align="right">
                          <label for="input-default">Nome:</label>
                        </b-col>
                        <b-col sm="8">
                          <b-form-input id="input-default" placeholder="Nome da profissão" v-model="profissao.nome"></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-3">
                        <b-col sm="2" align="right">
                          <label for="textearea-default">Descrição:</label>
                        </b-col>
                        <b-col sm="8">
                          <b-form-textarea id="textearea-default" placeholder="Descrição da profissão" v-model="profissao.descricao"></b-form-textarea>
                        </b-col>
                      </b-row>
                      <b-row class="my-2">
                        <b-col sm="2" align="right">
                          <label for="textearea-default">Competências:</label>
                        </b-col>
                        <b-col sm="8">
                          <b-form-textarea id="textearea-default" placeholder="Competências necessárias" v-model="profissao.competencias"></b-form-textarea>
                        </b-col>
                      </b-row>
                      <b-button class="mt-3" variant="success" type="submit" @click.prevent="addProfissao()">Adicionar Profissão</b-button>
                      </b-modal>
                      <b-button v-b-modal.modal-lg variant="success">Adicionar</b-button>
                    </div>
                  </b-container>
                </b-tab>
              </b-tabs>
            </div>
      </b-container>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  nome: 'AddProfissoes',
  data: function () {
    return {
      profissao: {
        nome: '',
        descricao: '',
        competencias: ''
      }
    }
  },
  created: function () {
    axios.get('http://127.0.0.1:3000/usuario')
      .then(response => {
        this.usuario = response.data
      })
      .catch(e => {
        console.log('erro')
      })
  },
  methods: {
    addProfissao: function () {
      axios.post('http://127.0.0.1:3000/profissao/', this.profissao)
        .then(response => { console.log('foi porra!') })
        .catch(e => { console.log('deu merda') })
    },
    deletar: function (id, index) {
      axios.delete('http://127.0.0.1:3000/usuario/' + id)
        .then(response => {
          this.usuario.splice(index, 1)
          alert('Usuário deletado!')
        })
        .catch(e => { console.log('erro na exclusão') })
    },
    logout: function () {
      localStorage.removeItem('token')
      this.$router.push({name: 'Admin'})
    }
  }
}
</script>
