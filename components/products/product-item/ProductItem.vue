<template>
  <!-- <article @click.stop="openProduct(data)" class="product-item"> -->
  <article class="product-item">
    <h3 >{{ data.nombre }}</h3>
    <room-item-slider :hero-data="data.fotos"/>

    <div class="texts">

      <h3 v-html="$md.render(data.palabra_clave)"></h3>
      <p  v-html="$md.render(data.descripcion)"></p>
    </div>
    <!-- <div  @click.stop="openProduct(data)" class="btn-outline invert">Saber más</div> -->
  </article>
</template>

<script>

import RoomItemSlider from '~/components/room-item-slider/RoomItemSlider.vue'
export default {
  name: 'ProductItemSection',
  components:{RoomItemSlider},
  props: ['data'],
  methods: {
    // openProduct(data) {
    //   this.$store.commit('toggleLightbox', data)
    // }
  }
}

</script>

<style lang="scss" src="./ProductItem.scss" />
