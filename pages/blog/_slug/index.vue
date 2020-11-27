<template>
  <section class="single">
    <b-container fluid="lg">
      <breadcrumb actual-area="Blog" area-slug="/blog" :actual-page="data.title" />
      <b-row>
        <div class="col-12">
          <div class="header-post">
            <div class="header-post-content">

              <div style="height:100%;">
                <div class="post-category line">{{ data.categories[0].name }}</div>
                <h1 class="header-post-title">{{ data.title }}</h1>
                <div class="header-post-excerpt">{{ data.fields.excerpt }}</div>
                <div class="header-post-share">
                  <div class="share-message">Comparte este artícudiv</div>
                  <share class="post-share post-share-sticky post-share-horizontal" :slug="data.slug" />
                </div>
                
              </div>

            </div>
            <div class="header-post-image">
              <!-- <a
                v-smooth-scroll="{ duration: 1000, offset: -150, updateHistory: false }"
                href="#post-first-text"
                class="scroll-down"
              >
                <v-icon icon="long-arrow-alt-down" />
              </a> -->
              <share :slug="data.slug" />
              <img :src="data.thumbnail" :alt="data.title" :title="data.title" />
            </div>
          </div>
        </div>
      </b-row>

      <b-row>
        <div class="col-xl-3 col-lg-3 col-md-2">
          <share class="post-share post-share-sticky" :slug="data.slug" />
        </div>
        <div class="post-content col-xl-6 col-lg-6 col-md-8">
          <div
            id="post-first-text"
            class="post-first-text"
            v-html="data.fields.text_above_modules"
          />
          <div v-for="(item, index) in data.fields.content" :key="index" class="post-content-item">
            <post-text v-if="item.content_type === 'Text'" :data="item" />
            <post-horizontal
              v-if="item.content_type === 'Horizontal' || item.content_type === 'Vertical' || item.content_type === 'Image'"
              :data="item"
              :class="`item-${item.content_type}`"
            />
            <post-gallery v-if="item.content_type === 'Gallery'" :data="item" />
            <post-video v-if="item.content_type === 'Video'" :data="item" />
          </div>
          <div class="author-container">
            <img :src="author.image" />
            <div class="author-name">
              por
              <span>{{ author.name }}</span>
            </div>
          </div>
        </div>
      </b-row>
      <b-row v-if="related.length > 0">
        <div class="col-12 related-container">
          <span>Quizás te interese este artículo</span>
          <hr />
        </div>
      </b-row>
      <b-row v-if="related.length > 0">
        <div class="col-lg-12">
          <div class="related-container-post">
            <card
              :key="related.slug"
              :title="related.title"
              :label="related.categories[0].name"
              :description="related.fields.excerpt"
              :img="related.thumbnail"
              :date="related.date"
              :slug="related.slug"
            />
          </div>
        </div>
      </b-row>
      <b-row>
        <subscribe-footer />
      </b-row>
    </b-container>
  </section>
</template>

<script>
import breadcrumb from '~/components/breadcrumb/Breadcrumb'
import postText from '~/components/post/post-text/PostText'
import postHorizontal from '~/components/post/post-horizontal/PostHorizontal'
import postGallery from '~/components/post/post-gallery/PostGallery'
import postVideo from '~/components/post/post-video/PostVideo'
import Share from '~/components/share/Share'
import Card from '~/components/card/Card'
import subscribeFooter from '~/components/subscribe-footer/SubscribeFooter'

export default {
  components: {
    breadcrumb,
    postText,
    postGallery,
    postHorizontal,
    postVideo,
    Share,
    Card,
    subscribeFooter
  },
  async asyncData({ $axios, params }) {
    try {
      const { data } = await $axios.get(`/blog/${params.slug}`)
      return {
        data: data.data,
        related: data.related || [],
        author: data.author,
        seo: data.seo
      }
    } catch (e) {
      console.log('Error loading api/single')
      console.log(e)
      // redirect to error page
    }
  },
  methods: {
    scroolTo(div) {
      document.querySelector(`.${div}`).scrollIntoView({
        behavior: 'smooth'
      })
    },
    getPageTitle() {
      return this.seo && this.seo.title ? this.seo.title : 'Kerastase | Blog Kerastase  ' // fallback
    },
    getMeta() {
      // error on load seo data
      if (!this.seo) return []

      const meta = []

      if (this.seo.title) {
        const seoTitle = this.seo.title
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

      if (this.seo.desc) {
        const seoDesc = this.seo.desc
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

      if (this.seo.image) {
        const seoImg = this.seo.image
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
  head() {
    return {
      title: this.getPageTitle(),
      meta: this.getMeta()
    }
  }
}
</script>

<style lang="scss" src="./Single.scss">
