<template>
  <div class="card-review">
    <div class="card-image lazyload" :data-bg="img">
    <!-- <div class="card-image" :style="{'background-image':`url(${img})`}"> -->
      <share :slug="`/testimonios/${slug}`" />
    </div>

    <div class="card-text">
      <h2>{{title}}</h2>

      <div class="card-description" v-html="desc" />

      <h5 class="card-label">
        <span>POR</span>
        <span class="text-primary">{{author}}</span>
      </h5>
    </div>

  </div>
</template>
<script>
import Share from '~/components/share/Share'

export default {
  components: {
    Share
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: 'rubyredroots'
    },
    img: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss" src="./CardReview.scss" />
