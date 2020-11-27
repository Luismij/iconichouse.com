<template>
  <section class="artists">
    <b-container fluid="xl">
      <breadcrumb actualArea="nostros" />

      <b-row>
        <b-col class="col-md-9">
          <h2>¿Quienes somos?</h2>

          <h4 class="separator-black separator-left">
            Conoce aquí las modelos que hacen parte de Iconica House
          </h4>
        </b-col>
      </b-row>

      <b-row class="" style="min-height:90vh; margin: 3vh 0;">
        <p>{{data.Texto}}</p>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Breadcrumb from '~/components/breadcrumb/Breadcrumb'
import SubscribeFooter from '~/components/subscribe-footer/SubscribeFooter'
import CustomBlock from '~/components/custom-block/CustomBlock'

// const API_PATH = '/'

export default {
  name: 'Modelos',
  components: {
    Breadcrumb,
    SubscribeFooter,
    CustomBlock
  },
  async asyncData({ $axios }) {
    try {
      // const { data } = await $axios.get(API_PATH)
      const data = await $axios.$get(
        'https://admin.iconicahouse.com/quienes-somos'
      )

      return {
        data
            }
    } catch (e) {
      console.log('Error loading api/artists')
      console.log(e)
      // redirect to error page
    }
  },
  methods: {
    getPageTitle() {
      return this.sectionData.seo && this.sectionData.seo.title
        ? this.sectionData.seo.title
        : 'Redken | Redken Artists' // fallback
    },
    getMeta() {
      // error on load seo data
      if (!this.sectionData.seo) return []

      const meta = []

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
  //   }
  // }
}
</script>

<style lang="scss" src="./Nosotros.scss" />
