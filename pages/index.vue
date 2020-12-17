<template>
  <section class="home">
    <hero-home :hero-data="heroData" />
    <product-slider :models="models" />
    <blog-posts :posts-data="rooms" />
    <subscribe
      :titulo="homeData.site_title"
      :nosotros="homeData.quienes_somos"
      :background-image="homeData.subscribeBackground || ''"
    />
    <!-- mapEmbedUrl(homeData.map)|| -->
    <div id="salones">
      <LazySalonFinder
        v-if="showDelayedComponents && map"
        :direccion="homeData.direccion"
        :mapurl="map"
      />
    </div>
  </section>
</template>

<script>
import HeroHome from '~/components/home/hero/HeroHome'
import BlogPosts from '~/components/home/blog/BlogPosts'
import ProductSlider from '~/components/product-slider/ProductSlider'
// import LastReviews from '~/components/home/reviews/LastReviews'
// import AppBlock from '~/components/home/app-block/AppBlock'
import Subscribe from '~/components/home/subscribe/Subscribe'
// import SubscribeFooter from '~/components/subscribe-footer/SubscribeFooter'

const SalonFinder = () => ({
  component: import('~/components/home/salon-finder/SalonFinder.vue')
})
// import SalonFinder from '~/components/home/salon-finder/SalonFinder'

export default {
  name: 'Home',
  components: {
    HeroHome,
    BlogPosts,
    ProductSlider,
    // LastReviews,
    // AppBlock,
    Subscribe,
    // SubscribeFooter,
    SalonFinder
  },
  async asyncData({ $axios }) {
    try {
      const homeData = await $axios.$get(
        'http://admin.iconicahouse.com/homepage'
      )
      const modelsData = await $axios.$get(
        'https://admin.iconicahouse.com/modelos'
      )
      const rooms = await $axios.$get('https://admin.iconicahouse.com/rooms')
      return {
        homeData,
        heroData: homeData.slider,
        models: modelsData,
        rooms
      }
    } catch (e) {
      console.log('Error loading api/home')
      console.log(e)
      // redirect to error page
    }
  },
  data() {
    return {
      showDelayedComponents: false
    }
  },
  computed: {
    getTitlePage() {
      return this.$store.state.siteConfigData.site_title
    },
    map() {
      return this.$store.state.siteConfigData.mapaEmbed
        ? this.$store.state.siteConfigData.mapaEmbed
            .match(/src=".*"/)[0]
            .slice(5, -1)
        : undefined
    }
  },
  mounted() {
    setTimeout(() => {
      this.showDelayedComponents = true
    }, 3000)

    const getHash = this.$route

    if (getHash.hash === '#estilistas') {
      this.$bvModal.show('estilistas-modal')
    }

    if (getHash.hash === '#salones') {
      this.showDelayedComponents = true
      this.$scrollTo(`#salones`, 500, { offset: -80 })
    }
  },
  methods: {
    getPageTitle() {
      return this.$store.state.siteConfigData.site_title
      // fallback
    },
    getMeta() {
      // error on load seo data
      if (!this.sectionData.seo) return []

      const meta = []

      // console.log(this.$route.fullPath)
      const currentUrl = `${this.$store.state.siteUrl}${this.$route.path}`
      meta.push({
        vmid: 'og:url',
        hid: 'og:url',
        property: 'og:url',
        content: currentUrl
      })

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
    }
  }
  // head() {
  //   return {
  //     title: this.getPageTitle(),
  //     meta: this.getMeta()
  //     // meta: [
  //     //   { hid: 'description', vmid: 'description', name: 'description', content: seoDesc },
  //     //   { vmid: 'og:title', hid: 'og:title', property: 'og:title', content: seoTitle },
  //     //   { vmid: 'og:description', hid: 'og:description', name: 'og:description', content: seoDesc },
  //     //   { vmid: 'og:image', hid: 'og:image',  property: 'og:image', content: seoImg },
  //     //   { vmid: 'og:url', hid: 'og:url', property: 'og:url', content: '/' },
  //     //   { vmid: 'twitter:title', name: 'twitter:title', content: seoTitle },
  //     //   { vmid: 'twitter:description', name: 'twitter:description', content: seoDesc },
  //     //   { vmid: 'twitter:image', name: 'twitter:image', content: seoImg }
  //     // ]
  //   }
  // }
}
</script>

<style lang="scss" scoped>
// #salones {
//   min-height: 85vh;
//   background-color: $black;
// }

// @media only screen and (min-width: $screen-md) {
//   #salones {
//     min-height: 480px;
//   }
// }
</style>
