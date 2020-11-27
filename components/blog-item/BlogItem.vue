<template>
  <div class="container-post">
    <div class="post-content">
      <div v-if="!isInHome" class="post-category">
        {{ data.categories[0].name || '' }}
      </div>
      <div class="post-title">{{ data.fields.small_title || data.title }}</div>
      <div class="post-excerpt">
        {{ data.fields.excerpt || '' }}
      </div>

      <nuxt-link :to="data.slug" class="post-link"> Me interesa</nuxt-link>
    </div>
    <div class="post-image">
      <share :slug="`${data.slug}`" />
      <img :src="data.thumbnail || ''" />
    </div>
  </div>
</template>

<script>
import Share from '~/components/share/Share'

export default {
  components: {
    Share
  },
  // props: ['data', 'index', ],
  props: {
    data: {
      type: Object,
      require: true
    },
    isLarge: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isInHome() {
      return this.$route.path === '/'
    }
  }
}
</script>

<style lang="scss" src="./BlogItem.scss" />
