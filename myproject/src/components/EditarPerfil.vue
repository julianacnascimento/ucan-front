<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#"></b-navbar-brand>

      <b-navbar-brand href="/perfil"><b>UCAN</b></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <div class="ml-auto">
        <b-dropdown
          split split-href="#foo/bar" text="Opções" class="m-2"
        >
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
          <b-card border-variant="primary" header="Dados Pessoais" align="center">
            <form>
              <div class="form-label-group">
                <p>
                  <label for="inputEmail"> Nome Completo </label>
                  <input type="text" id="inputNome" class="form-control" placeholder="Name" required autofocus v-model="usuario.nome">
                </p>
              </div>
              <div class="form-label-group">
                <p>
                  <label for="inputEmail"> Email </label>
                  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="usuario.email">
                </p>
              </div>
              <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" @click.prevent="editUsuario()">salvar</button>
            </form>
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
  name: 'AddUsuario',
  data: function () {
    return {
      usuario: {},
      nome: '',
      email: ''
    }
  },
  created: function () {
    axios
      .get('http://127.0.0.1:3000/usuario/' + this.$route.params.id).then(response => {
        this.usuario = response.data
        this.nome = this.usuario.nome
        this.email = this.usuario.email
      })
      .catch(e => {
        console.log('erro ao localizar ID de usuário')
      })
  },
  methods: {
    editUsuario: function () {
      const userId = this.$route.params.id
      axios.put('http://127.0.0.1:3000/usuario/' + userId, {nome: this.usuario.nome, email: this.usuario.email})
        .then(response => {
          alert('Editado!')
          this.$router.push({name: 'Perfil'})
        })
        .catch(e => { this.message = 'Erro no update de usuario!' }) //  na adição de usuário
    },
    logout: function () {
      localStorage.removeItem('token')
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped>
.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: .7rem;
  margin-top: 20px;
}
.form-label-group {
  position: relative;
  margin-bottom: 1.5rem;
}
.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: 50px;
  border-radius: .7rem;
  margin-top: 10px
}
.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: .1.5;
  /* color: #495057; */
  color: #969899;
  cursor: text;
  /* Match the input under the label */
  border: .1rem solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
  /* border-block-end-color: #007bff; */
}
.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}
.form-label-group input:-ms-input-placeholder {
  color: transparent;
}
.form-label-group input::-ms-input-placeholder {
  color: transparent;
}
.form-label-group input::-moz-placeholder {
  color: transparent;
}
.form-label-group input::placeholder {
  color: transparent;
}
.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 14px;
}
.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 10px;
  /* color:transparent; */
  color: #007bff;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 20px;
  margin: 1px;
}
</style>
