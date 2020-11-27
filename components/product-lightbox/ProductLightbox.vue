<template>
  <div class="product-lightbox" v-if="this.$store.state.productLightbox">
    <div class="product-lightbox-overlay" @click="closeLightbox()" />
    <div class="product-ligthbox-content">
      <div @click="closeLightbox()" class="product-ligthbox-close">
        <img src="~/static/images/lightbox-close.svg" alt />
      </div>
      <div class="product-lightbox-title">Descubre Redken</div>
      <div class="product-lightbox-desc">
        Para obtener más información sobre todas las líneas de productos redken sobre cuidado de cabello y peinado puedes consultar el sitio REDKEN US
      </div>
      <hr />
      <a class="btn-outline" :href="data.fields.product_url" target="_blank">IR A REDKEN US</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeLightbox() {
      this.$store.commit('toggleLightbox', [])
    }
  },
  computed: {
    data() {
      return this.$store.state.productLightboxData
    }
  }
}
</script>

<style lang="scss" src="./ProductLightbox.scss" />
