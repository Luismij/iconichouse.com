<template>
  <b-container fluid>
    <b-row>
      <div
        v-for="(post, index) in postsList"
        :key="index"
        class="post "
        :class="[
          index === 0 && !allSmall
            ? 'post-large col-12'
            : 'col-md-4 col-sm-6 col-12 post-small '
        ]"
      >
        <blog-item :data="post" :is-large="index === 0" />
      </div>
    </b-row>
  </b-container>
</template>
<script>
import BlogItem from '~/components/blog-item/BlogItem'

export default {
  components: { BlogItem },
  props: {
    postsList: {
      type: Array,
      required: true
    },
    allSmall: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>
