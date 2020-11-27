<template>
  <section class="artists">
    <b-container fluid="xl">
      <breadcrumb actualArea="modelos" />

      <b-row>
        <b-col class="col-md-9">
          <h2>modelos</h2>

          <h4 class="separator-black separator-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, turpis vel consectetur consequat, ipsum nulla pulvinar felis, bibendum consectetur mi nunc nec</h4>
        </b-col>
      </b-row>

      <b-row class="artist-list">
        <div
          v-for="(item, index) in models"
          :key="index"
          class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
        >
          <div class="artist">
            <div class="img-container">
              <div class="img lazyload" :data-bg="`https://admin.iconicahouse.com${item.foto.formats.medium.url}`" />
            </div>
            <div class="texts">
              <h3>{{ item.nombre }}</h3>
              <p>
                <span v-for="(rs, indx) in item.Redes" :key="indx">
                  <strong>{{rs.red_social+' :'}}</strong>
                  <a
                    data-artist-instagram="true"
                    :data-artist="item.nombre"
                    :href="`${rs.url}`"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{{ rs.username }}</a>
                </span>
             
              </p>
              <p><span>
                <strong>Ver :</strong> ir a webcam</span></p>
            </div>
          </div>
        </div>
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
      const modelsData = await $axios.$get('https://admin.iconicahouse.com/modelos')

      return {
        models: modelsData
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
  },
  // head() {
  //   return {
  //     title: this.getPageTitle(),
  //     meta: this.getMeta()
  //   }
  // }
}
</script>

<style lang="scss" src="./Modelos.scss" />

