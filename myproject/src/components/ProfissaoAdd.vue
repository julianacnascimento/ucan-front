<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#"></b-navbar-brand>

    <b-navbar-brand href="#"><b>UCAN</b></b-navbar-brand>
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

    <b-col cols="12" active>
    <div class="mt-3">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Alunos">
          <input type="text" v-model="nome">
          <input type="text" v-model="faculdade">
          <input type="text" v-model="matricula">
          <input type="text" v-model="curso">
          <button type="submit" @click.prevent="addProfissao()">Adicionar Profissão</button>
          </b-tab>
          <b-tab title="Profissões">
          <input type="text" v-model="nome">
          <input type="text" v-model="descrição">
          <input type="text" v-model="competencias">
          <button type="submit" @click.prevent="addProfissao()">Adicionar Profissão</button>
          </b-tab>
          <b-tab title="Materiais">
          <input type="text" v-model="titulo">
          <input type="text" v-model="descrição">
          <input type="text" v-model="link">
          <button type="submit" @click.prevent="addProfissao()">Adicionar Profissão</button>
          </b-tab>
        </b-tabs>
        <ul>
          <li v-for="(profissao, index) in profissoes" :key="profissao.id">
            {{profissao.nome}} <a href="" @click.prevent="removeProfissao(profissao.id, index)">remover</a></li>
          </ul>
      </b-card>
    </div>
    </b-col>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ProfissaoAdd',
  data: function () {
    return {
      nome: '',
      descrição: '',
      competencias: ''
    }
  },
  methodsAdd: {
    addProfissao: function () {
      axios.post('http://127.0.0.1:3000/profissao', {nome: this.nome, descrição: this.descrição, competencias: this.competencias})
        .then(Response => { this.message = 'foi porra!' })
        .catch(e => { this.message = 'deu merda' })
    }
  },
  methodsDel: {
    removeProfissao: function (id, index) {
      axios.delete('http://127.0.0.1:3000/profissao' + id)
        .then(response => { this.profissoes.splice(index, 1) })
        .catch(e => { this.message = 'error' })
    }
  }
}
</script>
