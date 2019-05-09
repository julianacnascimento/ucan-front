<template>
    <ul>
        <li v-for="(usuario, index) in usuario" :key="usuario.id">
            {{usuario.email}} <a href="" @click.prevent="remover(book.id, index)">remover</a>
        </li>
    </ul>
</template>
