<template>
  <nuxt-link to="/room" class="media-card">
    <div class="card-image lazyload" :data-bg="img" />
    <div class="card-text">
      <h5 class="card-label text-primary">{{ label || "" }}</h5>
      <h3>{{ title || "" }}</h3>
      

      <p class="card-description" v-html="description"/>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
  
    img: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" src="./Card.scss" />
