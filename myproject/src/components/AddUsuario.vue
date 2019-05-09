<template>
  <div class="container-fluid">
  <div class="row no-gutter">
    <!-- <div class="d-none d-md-flex col-md-4 col-lg-6 bg-color"></div> -->
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4">{{msg}}</h3>
              <form>
                <div class="form-label-group">
                  <input type="text" id="inputNome" class="form-control" placeholder="Name" required autofocus v-model="usuario.nome">
                  <label for="inputNome">Nome Completo </label>
                </div>

                <div class="form-label-group">
                  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="usuario.email">
                  <label for="inputEmail">Email </label>
                </div>

                <div class="form-label-group">
                  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="usuario.senha">
                  <label for="inputPassword">Senha</label>
                </div>
                <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" @click.prevent="addUsuario()">Cadastrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<!-- JavaScript -->

<script>
import axios from 'axios'
export default {
  name: 'AddUsuario',
  data: function () {
    return {
      msg: 'cadastrar usuário',
      usuario: {
        nome: '',
        email: '',
        senha: ''
      },
      message: ''
    }
  },
  methods: {
    addUsuario: function () {
      axios.post('http://127.0.0.1:3000/usuario', this.usuario)
        .then(response => {
          this.usuarioAdd = true
          alert('Usuário cadastrado')
          this.$router.push({name: 'Home'})
        })
        .catch(e => { this.message = 'erro! NAUs' }) //  na adição de usuário
    },
    home: function (event) {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped>
  :root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.login-heading{
  color: #007bff;
  font-family:Impact;
  font-size: 45px;
}

.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-size: cover;
  background-position: center;
  background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/disp/54513064384865.5ad04aa41636c.jpg');
}

.login-heading {
  font-weight: 300;
}

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
  font-size: 20px;
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
