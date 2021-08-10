<template>
  <div class="blog-posts">
    <b-container>
      <b-row>
        <b-col class="d-flex flex-column align-items-center">
          <h2>{{ this.$store.state.siteConfigData.section_title_1 || '' }}</h2>

          <h4 class="separator">
            {{ this.$store.state.siteConfigData.section_desc_1 || '' }}
          </h4>
          <!-- .sort((fse, sce) => {
                if (fse.id < sce.id) {
                  return -1
                }
                return 1
              }) -->
          <card
            v-for="(post, index) in postsData.slice(0, 2)"
            :key="index"
            :title="''"
            :label="post.nombre || ``"
            :description="post.descripcion"
            :img="`https://admin.iconicahouse.com${post.fotos[0].url}`"
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
