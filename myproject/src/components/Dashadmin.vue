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
<div class="mt-3">
    <b-container class="bv-example-row">
  <b-tabs content-class="mt-3">
    <b-tab title="Usuários" active>
      <b-table striped hover small :items="items1" :fields="fields1"></b-table>
      <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table">
    </b-pagination>
    </b-tab>

    <b-tab title="Profissões">
      <!-- <div class="col-md-3"></div> -->
      <b-table striped hover small :items="items2" :fields="fields2">
      </b-table>
      <div align="right"><div>
  <b-button variant="success" v-b-modal.modal-1>Adicionar</b-button>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table">
    </b-pagination>
  <b-modal id="modal-1" title="Adicione uma nova profissão!" ok-title="Salvar" ok-variant="primary" cancel-variant="danger" cancel-title="Cancelar" >
    <div class="my-4">
      <b-row class="my-1" v-for="type in types1" :key="type" >
      <b-col sm="3" align="left">
        <label :for="`type-${type}`">{{ type }}:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
    </div>
  </b-modal>
</div>
</div>
</b-tab>
    <b-tab title="Materiais">
      <b-table striped hover small :items="items3" :fields="fields3"></b-table>
      <div align="right"><div>
  <b-button variant="success" v-b-modal.modal-1>Adicionar</b-button>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table">
    </b-pagination>
  <b-modal id="modal-1" title="Adicione um novo material!" ok-title="Salvar" ok-variant="primary" cancel-variant="danger" cancel-title="Cancelar" >
    <div class="my-4">
      <b-row class="my-1" v-for="type in types2" :key="type" >
      <b-col sm="3" align="left">
        <label :for="`type-${type}`">{{ type }}:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
    </div>
  </b-modal>
</div>
</div>
    </b-tab>
  </b-tabs>
    </b-container>
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      types1: [
        'Nome',
        'Descrição',
        'Competências'
      ],
      types2: [
        'Título',
        'Descrição',
        'Link'
      ],
      // Note 'isActive' is left out and will not appear in the rendered table
      fields1: [
        {
          key: 'Nome',
          sortable: true
        },
        {
          key: 'Faculdade',
          sortable: true
        },
        {
          key: 'Matrícula',
          sortable: true
        },
        {
          key: 'Curso',
          sortable: true
          // Variant applies to the whole column, including the header and footer
        },
        {
          key: 'Ações',
          sortable: false
        }
      ],
      items1: [
        {isActive: true, Matrícula: 40097408, Nome: 'Maria', Faculdade: 'UFPE', Curso: 'SI'},
        { isActive: false, Matrícula: 21653423, Nome: 'João', Faculdade: 'UFPB', Curso: 'SI' },
        { isActive: false, Matrícula: 89867565, Nome: 'Pedro', Faculdade: 'UFRN', Curso: 'SI' },
        { isActive: true, Matrícula: 38674367, Nome: 'Luiza', Faculdade: 'UFCG', Curso: 'LCC' }
      ],
      fields2: [
        {
          key: 'Nome',
          sortable: true
        },
        {
          key: 'Descrição',
          sortable: true
        },
        {
          key: 'Competências',
          sortable: true
        },
        {
          key: 'Ações',
          sortable: false
        }
      ],
      items2: [
        {isActive: true, Nome: 'Engenheiro de software', Descrição: 'É só isso não tem mais jeito acabou, boa sorte...', Competências: '...Não tenho o que dizer e o que sinto não mudará!'},
        {isActive: false, Nome: 'Desenvolvedor', Descrição: 'É só isso não tem mais jeito acabou, boa sorte...', Competências: '...Não tenho o que dizer e o que sinto não mudará!'},
        {isActive: false, Nome: 'Gerente de projeto', Descrição: 'É só isso não tem mais jeito acabou, boa sorte...', Competências: '...Não tenho o que dizer e o que sinto não mudará!'},
        {isActive: true, Nome: 'Desenvolvedor', Descrição: 'É só isso não tem mais jeito acabou, boa sorte...', Competências: '...Não tenho o que dizer e o que sinto não mudará!'}
      ],
      fields3: [
        {
          key: 'Título',
          sortable: true
        },
        {
          key: 'Descrição',
          sortable: true
        },
        {
          key: 'Link',
          sortable: true
        },
        {
          key: 'Ações',
          sortable: false
        }
      ],
      items3: [
        {isActive: true, Título: 'Título', Descrição: 'Descrição', Link: 'Link'},
        {isActive: false, Título: 'Título', Descrição: 'Descrição', Link: 'Link'},
        {isActive: false, Título: 'Título', Descrição: 'Descrição', Link: 'Link'},
        {isActive: true, Título: 'Título', Descrição: 'Descrição', Link: 'Link'}
      ]
    }
  }
}
</script>
