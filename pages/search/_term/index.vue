<template>
  <section class="page-search">

    <div class="search-header">
      <b-container fluid="lg">
        <breadcrumb actualArea="Busqueda" />
        <b-row>
          <div class="col-md-9">
            <h2>Busqueda:</h2>
            <h4 class="separator separator-left">{{searchParams}}</h4>
          </div>

        </b-row>
      </b-container>
    </div>


    <div class="post-list" v-if="posts">
      <b-container fluid="lg">
        <b-row>
          <div
            class="post col-md-4 col-sm-6 col-xs-12 post-small"
            v-for="(post, index) in posts"
            :key="index"
          >
          <!-- <h3>{{post.title}}</h3> -->
           <blog-item :data="post" :index="index" />
          </div>
        </b-row>
        <b-row>
          <div class="col-12">
            <div class="btn-outline" v-if="postsToShow < posts.length" @click="loadMorePosts()">Ver mas</div>
          </div>
        </b-row>
      </b-container>
    </div>

    <div class="post-list" v-else>
      <b-container fluid="lg">
        <b-row>
          <b-col>
            <p>No se encontraron resultados.</p>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <product-slider />
    <subscribe-footer />
  </section>
</template>

<script>
import Breadcrumb from '~/components/breadcrumb/Breadcrumb'
import ProductSlider from '~/components/product-slider/ProductSlider'
import SubscribeFooter from '~/components/subscribe-footer/SubscribeFooter'
import BlogItem from '~/components/blog-item/BlogItem'

const API_PATH = '/search'
export default {
  name: 'Search',
  components: {
    Breadcrumb,
    SubscribeFooter,
    ProductSlider,
    BlogItem
  },
  data() {
    return {
      postsToShow: 14
    }
  },
  async asyncData({ $axios, params }) {
    try {
      const searchParams = params.term
      const api = await $axios.get(`${API_PATH}/${searchParams}`)

      // console.log(api.data.results)
      return {
        // posts: [],
        posts: api.data.results,
        searchParams: searchParams
      }
    } catch (e) {
      // console.log(e)
      return { posts: false,  searchParams}
    }
  },
  methods: {
    loadMorePosts() {
      this.postsToShow = this.postsToShow + 6
    }
  },
  head() {
    return {
      title: 'Redken | Búsqueda'
    }
  }
}
</script>

<style lang="scss" src="./Search.scss" />
