<template>
  <b-container fluid="lg">
    <b-row>
      <b-col>
        <h1 v-if="error && error.statusCode === 404">Pagina no encontrada</h1>
        <h1 v-else>An error occurred</h1>
        <nuxt-link to="/">regresar al Inicio</nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ['error'],
  // layout: 'blog'
  head() {
    return {
      title: 'Error 404'
    }
  },
  created() {
    this.$gtm.push({
      event: 'PageNotFoundError'
    })
  },
}
</script>

<style lang="scss" scoped>
.container-lg {
  min-height: 35vh;
  margin-top: 150px;
}
</style>
