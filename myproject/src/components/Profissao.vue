<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#"></b-navbar-brand>

    <b-navbar-brand><b>UCAN</b></b-navbar-brand>
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
            <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" @click.prevent="userUpdate()">salvar</button>
          </form>
      </b-card>
    </b-card-group>
  </div>
</b-col>
</b-container>
</div>
</template>
