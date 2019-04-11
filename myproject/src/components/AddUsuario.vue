<template>
<div>
    <input placeholder="Login" type="text" v-model="user.login">
    <input placeholder="E-mail" type="text" v-model="user.email">
    <input placeholder="Senha" type="password" v-model="user.password">
    <button type="submit" @click.prevent="addUsuario()">Adicionar Usuário</button>
    {{message}}
</div>
</template>

<!-- JavaScript -->

<script>
import axios from 'axios'
export default {
  name: 'AddUsuario',
  data: function () {
    return {
      usuario: {
        email: '',
        password: ''
      },
      message: ''
    }
  },
  methods: {
    addUsuario: function () {
      axios.post('http://127.0.0.1:3000/usuario', this.usuario)
        .then(response => { this.message = 'Usuário adicionado' })
        .catch(e => { this.message = 'erro! NAUs' }) //  na adição de usuário
    }
  }
}
</script>
