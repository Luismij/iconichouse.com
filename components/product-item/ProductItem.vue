<template>
  <article class="product-item">
    <div class="img-container">
      <div class="img lazyload" :data-bg="`https://admin.iconicahouse.com${data.foto.formats.medium.url}`" />
    </div>

    <div class="texts">
      <!-- <div
        v-if="data.fields.ribbon && data.fields.ribbon.slug !== 'none'"
        class="label d-none"
      >
        <span class="">{{ data.fields.ribbon.name || '' }} </span>
      </div> -->

      <h6>{{ data.nombre || '' }}</h6>
      <p></p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['data'],

  methods: {
  
  }
}
</script>

<style lang="scss" src="./ProductItem.scss" />
