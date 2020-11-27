<template>
  <div class="custom-block">
    <b-container fluid="lg">
      <b-row>
        <div class="custom-block-content ">
          <div class="custom-block-texts">
            <div class="custom-block-title">
              {{ title }}
            </div>
            <p class="custom-block-description">
              {{ desc }}
            </p>
          </div>
          <nuxt-link to="/blog" class="btn">{{ btn }}</nuxt-link>
          <div class="custom-block-image">
            <img :src="img" alt="" />
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    desc: {
      type: String,
      default: 'Desc'
    },
    img: {
      type: String,
      default: ''
    },
    btn: {
      type: String,
      default: 'Text button'
    }
  }
}
</script>

<style lang="scss" src="./CustomBlock.scss" />
