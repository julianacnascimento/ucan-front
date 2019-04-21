<template>
    <div v-if="authorized">
        <p> Hello! </p>
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
      authorized: false
    }
  },
  created: function () {
    const token = localStorage.getItem('token')
    if (token !== null) {
      this.authorized = true
      axios.get('http://127.0.0.1:3000/perfil.admin', {headers: {'x-access-token': token}})
        .then(response => {
          this.admin.email = response.data.email
        })
        .catch(e => {
          console.log('erro na autorização')
        })
    }
  }
}
</script>
