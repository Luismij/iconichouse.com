<template>
  <div class="blog-posts">
    <b-container>
      <b-row>
        <b-col class="d-flex flex-column align-items-center">
          <h2>rooms</h2>

          <h4 class="separator">
            contamos con las rooms más modernas
          </h4>

          <card
            v-for="(post, index) in postsData.slice(0, 2)"
            :key="index"
            :title="post.nombre"
            :label="post.title || `Room ${index + 1}`"
            :description="post.descripcion"
            :img="
              `https://admin.iconicahouse.com${post.fotos[0].formats.medium.url}`
            "
          />

          <nuxt-link to="/rooms" class="btn-outline"> Ver todas </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Card from '~/components/card/Card.vue'

export default {
  name: 'BlogPosts',
  components: {
    Card
  },
  props: {
    postsData: {
      type: Array,
      required: true
    }
  },
  computed: {
    siteData() {
      return this.$store.state.siteConfigData
    }
  }
}
</script>

<style lang="scss" src="./BlogPosts.scss" />
