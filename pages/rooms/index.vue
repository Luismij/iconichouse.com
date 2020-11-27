<template>
  <section class="products">
    <b-container fluid="lg">
      <breadcrumb actualArea="Rooms" />
      <b-row>
        <div class="col-md-9">
          <h2>Rooms</h2>
          <h4 class="separator-black">Conoce aquí las Rooms de Iconica House</h4>
        </div>
        <!-- <div class="col-md-3 align-items-end">
          <select-field :data="categories" :is-product-section="true" />
        </div> -->
      </b-row>

      <b-row class="product-list">
        <product-item
          v-for="(item, index) in data"
          :key="index"
          :data="item"
          class="col-xs-12 col-sm-6 col-md-6"
        />
      </b-row>
 
    </b-container>
<!-- 
    <custom-block
      :title="data.fields.testimonials_title"
      :desc="data.fields.testimonials_description"
      :img="data.fields.testimonials_image"
      :btn="data.fields.testimonials_button_text"
    /> -->

  </section>
</template>

<script>
import ProductItem from '~/components/products/product-item/ProductItem'
import SelectField from '~/components/select-field/SelectField'
import SubscribeFooter from '~/components/subscribe-footer/SubscribeFooter'
import Breadcrumb from '~/components/breadcrumb/Breadcrumb'
import CustomBlock from '~/components/custom-block/CustomBlock'


export default {
  name: 'Products',
  components: {
    ProductItem,
    SelectField,
    Breadcrumb,
    SubscribeFooter,
    CustomBlock
  },
  async asyncData({ $axios }) {
    try {

      const info = await $axios.$get('https://admin.iconicahouse.com/rooms')
      return {
      
        data:info,
      
    
      }
    } catch (e) {
      console.log('Error loading api/products')
      console.log(e)
      // redirect to error page
    }
    
  },
  // computed: {
  //   selectedFilter() {
  //     return this.$store.state.selectedFilter
  //   },
  //   filterProducts() {
  //     const activeFilter = this.selectedFilter
  //     if (activeFilter.name === 'Todos' || activeFilter === 'Todos') {
  //       return this.products
  //     } else {
  //       return this.products.filter(function(product) {
  //         return product.fields.product_category.find(
  //           (category) => category.name === activeFilter.name
  //         )
  //       })
  //     }
  //   }
  // },
  // beforeDestroy() {
  //   this.$store.commit('changeFilter', 'Todos')
  // },
  methods: {
    getPageTitle() {
      return this.sectionData.seo && this.sectionData.seo.title
        ? this.sectionData.seo.title
        : 'Redken / Productos' // fallback
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

<style lang="scss" src="./Rooms.scss" />
