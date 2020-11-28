<template>
  <div id="app" :class="'page-' + $route.name">
    <search />
    <video-lightbox v-if="loadDelayedComponents" />
    <header-site />
    <product-lightbox />

    <form-estilistas />
    <div class="main">
      <nuxt />
    </div>
    <footer-site />
 
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import HeaderSite from '~/components/header-site/HeaderSite'
// import FooterSite from '~/components/footer-site/FooterSite'
import ProductLightbox from '~/components/product-lightbox/ProductLightbox'
// import VideoLightbox from '~/components/video-lightbox/VideoLightbox'
import FormEstilistas from '~/components/form-estilistas/FormEstilistas'
import Search from '~/components/search/Search'

const VideoLightbox = () => ({
  component: import('~/components/video-lightbox/VideoLightbox')
})

const FooterSite = () => ({
  component: import('~/components/footer-site/FooterSite')
})
// import '~/styles/custom-bootstrap.scss'

export default {
  components: {
    ProductLightbox,
    VideoLightbox,
    Search,
    FormEstilistas,
    HeaderSite,
    FooterSite,
 
  },
  data() {
    return {
      loadDelayedComponents: false
    }
  },
  mounted() {
    document.addEventListener('lazybeforeunveil', function(e) {
      const bg = e.target.getAttribute('data-bg')
      if (bg) {
        e.target.style.backgroundImage = 'url(' + bg + ')'
      }
    })

    setTimeout(() => {
      this.loadDelayedComponents = true
    }, 3000)

    const getHash = this.$route
    if (getHash.hash === '#salones') {
      this.showDelayedComponents = true
    }

    // document.onreadystatechange = () => {
    //   if (document.readyState == "complete") {
    //     this.loadDelayedComponents = true
    //     this.setDocumentReady(true)
    //   }
    // }
  },
  methods: {
    ...mapMutations({
      setDocumentReady: 'setDocumentReady'
    })
  }
}
</script>

<style lang="scss" src="./default.scss" />
