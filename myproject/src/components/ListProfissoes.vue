<template>
    <ul>
        <li v-for="(profissao) in profissao" :key="profissao.id">
            Nome: {{profissao.nome}}    Descrição: {{profissao.descricao}}  Competencias: {{profissao.competencias}}
        </li>
    </ul>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ListProfissoes',
  data: function () {
    return {
      profissao: []
    }
  },
  created: function () {
    axios
      .get('http://127.0.0.1:3000/profissao')
      .then(response => {
        this.profissao = response.data
      })
      .catch(e => {
        console.log('error')
      })
  }
}
</script>
