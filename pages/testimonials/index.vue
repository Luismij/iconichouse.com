<template>
  <section class="testimonials">
    <big-header :data="sectionData.data[0].fields" />

    <b-container fluid="lg">
      <b-row>
        <b-col>
          <card-review
            :title="featuredData.title"
            :img="featuredData.thumbnail"
            :desc="featuredData.content"
            :author="featuredData.author"
            :slug="featuredData.slug"
            class="featured"
            :id="featuredData.slug"
            />
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid="lg" class="testimonials-list">
      <b-row v-for="(item, index) in testimonialsData.slice(0, testimonialToShow)" :key="index">
        <b-col>
          <card-review
            :title="item.title"
            :img="item.thumbnail"
            :desc="item.content"
            :author="item.author"
            :class="{'invert': index % 2 === 0 }"
            :slug="item.slug"
            :id="item.slug"
            class="in-section"/>
        </b-col>
      </b-row>
       <b-row>
          <div class="col-12 text-center">
            <div class="btn-outline" v-if="testimonialToShow < testimonialsData.length" @click="loadMore()">Ver mas</div>
          </div>
        </b-row>
    </b-container>

    <product-slider />
    <subscribe-footer />
  </section>
</template>

<script>
import ProductSlider from '~/components/product-slider/ProductSlider'
import SubscribeFooter from '~/components/subscribe-footer/SubscribeFooter'
import CardReview from '~/components/card-review/CardReview'
import BigHeader from '~/components/big-header/BigHeader'

const API_PATH = '/testimonios'

export default {
  name: 'Testimonials',
  components: {
    ProductSlider,
    SubscribeFooter,
    CardReview,
    BigHeader
  },
  async asyncData({ $axios , route}) {
    try {
      const { data } = await $axios.get(API_PATH)
      // console.log('Slug')
      // console.log(route.params.id)
      return {
        sectionData: data,
        testimonialsData: data.testimonials,
        featuredData: data.featured,
        slugSelected: route.params.id || null

      }
    } catch (e) {
      console.log('Error loading api/testimonios')
      console.log(e)
      // redirect to error page
    }
  },
  data() {
    return {
      testimonialToShow: 12
    }
  },
  computed: {
    testimonialSelected() {
      return this.testimonialsData.find(item => item.slug == slug)
    }
  },
  methods: {
    loadMore() {
      this.testimonialToShow = this.testimonialToShow + 3
    },
    getTestimonialBySlug() {
      try {
        if(this.featuredData.slug === this.slugSelected) {
          return this.featuredData
        }

        return this.testimonialsData.find(item => item.slug == this.slugSelected)
      } catch (e) {
        return false
      }
    },
    getPageImage() {
      let img = (this.sectionData.seo && this.sectionData.seo.image) ?
        this.sectionData.seo.image : null

      if (this.slugSelected && this.getTestimonialBySlug()) {
        img = this.getTestimonialBySlug().thumbnail
      }
      return img

    },
    getPageTitle() {
      let title = (this.sectionData.seo && this.sectionData.seo.title) ?
        this.sectionData.seo.title : 'Redken / Testimonios' // fallback

      if (this.slugSelected && this.getTestimonialBySlug()) {
        title = `${title} - ${this.getTestimonialBySlug().title}`
      }
      return title
    },
    getPageDesc() {
      let desc = (this.sectionData.seo && this.sectionData.seo.desc) ?
        this.sectionData.seo.desc : false // fallback

      if (this.slugSelected && this.getTestimonialBySlug()) {
        desc = this.getTestimonialBySlug().content
      }
      return desc
    },
    getMeta() {
      // error on load seo data
      if (!this.sectionData.seo) return []

      const meta = []

      // console.log(this.$route.fullPath)
      let currentUrl = `${this.$store.state.siteUrl}${ this.$route.path }`
      // if (this.slugSelected) currentUrl = `${ currentUrl }/${ this.slugSelected }`
      meta.push({ vmid: 'og:url', hid: 'og:url', property: 'og:url', content: currentUrl },)

      let seoTitle = this.getPageTitle()
      meta.push({ vmid: 'og:title', hid: 'og:title', property: 'og:title', content: seoTitle })
      meta.push({ vmid: 'twitter:title', name: 'twitter:title', content: seoTitle })

      let seoDesc = this.getPageDesc()
      if (seoDesc) {
        meta.push({ hid: 'description', vmid: 'description', name: 'description', content: seoDesc })
        meta.push({ vmid: 'og:description', hid: 'og:description', name: 'og:description', content: seoDesc })
        meta.push({ vmid: 'twitter:description', name: 'twitter:description', content: seoDesc })
      }

      let seoImg = this.getPageImage()
      if (seoImg) {
        meta.push({ vmid: 'og:image', hid: 'og:image',  property: 'og:image', content: seoImg })
        meta.push({ vmid: 'twitter:image', name: 'twitter:image', content: seoImg })
      }

      return meta
    }
  },
  mounted() {
    if(this.slugSelected) {
      setTimeout(()=>{
        this.$scrollTo(`#${this.slugSelected}`, 500, { offset: -120 })
      }, 1000);
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

<style lang="scss" src="./Testimonials.scss" />
