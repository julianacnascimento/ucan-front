<template>
    <div class="wraprer">
        <form class="form-signin">
            <h2 class="form-signin-heading text-center"> ÁREA RESTRITA <p>UCAN</p> </h2>
            <input type="text" class="form-control" name="email" placeholder="Email" required autofocus v-model="admin.email">
            <input type="password" class="form-control" name="password" placeholder="Senha" required autofocus v-model="admin.senha">
            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" @click.prevent="login()">entrar</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Admin',
  data: function () {
    return {
      admin: {
        email: '',
        senha: ''
      }
    }
  },
  methods: {
    login: function () {
      axios.post('http://127.0.0.1:3000/auth.admin', this.admin)
        .then(response => {
          console.log(response.data)
          if (response.data.tokenAdmin) {
            localStorage.setItem('tokenAdmin', response.data.tokenAdmin)
            this.message = response.data.message
            this.$router.push({name: 'DashAdmin'})
          }
        })
        .catch(e => { this.message = 'Erro' })
    }
  }
}
</script>

<style scoped>
:root {
    --input-padding-x: 1.5rem;
    --input-padding-y: 0.75rem;
}
.btn-lg {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    padding: 0.75rem 1rem;
    border-radius: .3rem;
    margin-top: 20px;
    /* font- */
}
.wrapper {
    position: relative;
    margin: 80%;
}
.form-signin {
    position: relative;
    max-width: 380px;
    margin: 0 auto;
    background-color: #fff;
    padding: 15px 40px 50px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
}
.form-signin .form-signin-heading {
    margin-bottom: 30px;
    font-family: Impact;
    color: #007bff;
}
.form-signin input {
    margin-bottom: 20px;
}
.form-signin .form-control {
    padding: 10px;
}
</style>
