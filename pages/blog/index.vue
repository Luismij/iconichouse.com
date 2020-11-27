<template>
  <section class="blog">
    <big-header :data="data" :categories="categories" />
    <div class="post-list big-header-margin">
      <b-container fluid="lg">
        <b-row class="d-none">
          <div
            v-for="(post, index) in filterPosts.slice(0, postsToShow)"
            :key="index"
            class="post"
            :class="[
              index === 0 || index === 7
                ? 'post-large col-12'
                : 'col-md-4 col-sm-6 col-xs-12 post-small'
            ]"
          >
            <blog-item :data="post" :is-large="index === 0 || index === 7" />
          </div>
        </b-row>

        <blog-list :posts-list="filterPosts.slice(0, postsToShow)"></blog-list>

        <b-row>
          <div class="col-12">
            <div
              v-if="postsToShow < filterPosts.length"
              class="btn-outline"
              @click="loadMorePosts()"
            >
              Ver mas
            </div>
          </div>
        </b-row>
      </b-container>
    </div>
    <product-slider />
    <subscribe-footer />
  </section>
</template>

<script>
import ProductSlider from '~/components/product-slider/ProductSlider'
import BigHeader from '~/components/big-header/BigHeader'
import SubscribeFooter from '~/components/subscribe-footer/SubscribeFooter'
import BlogItem from '~/components/blog-item/BlogItem'
import BlogList from '~/components/blog-list/BlogList'

const API_PATH = '/blog'

export default {
  components: {
    BigHeader,
    SubscribeFooter,
    ProductSlider,
    BlogItem,
    BlogList
  },
  async asyncData({ $axios }) {
    try {
      const { data } = await $axios.get(API_PATH)
      return {
        sectionData: data,
        data: data.data,
        // categories: data.categories,
        categories: data.data.categories_redken,
        posts: data.posts
      }
    } catch (e) {
      console.log('Error loading api/products')
      console.log(e)
      // redirect to error page
    }
  },
  data() {
    return {
      postsToShow: 14
    }
  },
  computed: {
    selectedFilter() {
      return this.$store.state.selectedFilter
    },
    filterPosts() {
      const activeFilter = this.selectedFilter
      if (activeFilter.name === 'Todos' || activeFilter === 'Todos') {
        return this.posts
      } else {
        return this.posts.filter(function(post) {
          return post.categories.find(
            (category) => category.name === activeFilter.name
          )
        })
      }
      // this.$gtm.push({
      //   event: 'Change Category Blog',
      //   label: activeFilter.name
      // })
    }
  },
  beforeDestroy() {
    this.$store.commit('changeFilter', 'Todos')
  },
  methods: {
    getPageTitle() {
      return this.sectionData.seo && this.sectionData.seo.title
        ? this.sectionData.seo.title
        : 'Redken / Blog' // fallback
    },
    getMeta() {
      // error on load seo data
      if (!this.sectionData.seo) return []

      const meta = []

      if (this.sectionData.seo.title) {
        const seoTitle = this.sectionData.seo.title
        meta.push({
          vmid: 'og:title',
          hid: 'og:title',
          property: 'og:title',
          content: seoTitle
        })
        meta.push({
          vmid: 'twitter:title',
          name: 'twitter:title',
          content: seoTitle
        })
      }

      if (this.sectionData.seo.desc) {
        const seoDesc = this.sectionData.seo.desc
        meta.push({
          hid: 'description',
          vmid: 'description',
          name: 'description',
          content: seoDesc
        })
        meta.push({
          vmid: 'og:description',
          hid: 'og:description',
          name: 'og:description',
          content: seoDesc
        })
        meta.push({
          vmid: 'twitter:description',
          name: 'twitter:description',
          content: seoDesc
        })
      }

      if (this.sectionData.seo.image) {
        const seoImg = this.sectionData.seo.image
        meta.push({
          vmid: 'og:image',
          hid: 'og:image',
          property: 'og:image',
          content: seoImg
        })
        meta.push({
          vmid: 'twitter:image',
          name: 'twitter:image',
          content: seoImg
        })
      }

      return meta
    },
    loadMorePosts() {
      this.postsToShow = this.postsToShow + 6
    }
  },
  head() {
    return {
      title: this.getPageTitle(),
      meta: this.getMeta()
    }
  }
}
</script>

<style lang="scss" src="./Blog.scss" />
