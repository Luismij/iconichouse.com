<template>
  <div class="last-reviews">
    <b-container>
      <b-row class="header-last-reviews">
        <b-col class="d-flex flex-column align-items-center">

          <h2>{{ sectionTexts.resenas_y_testimonios_title || 'Lo probaron, lo amaron' }}</h2>

          <h4 class="separator-black">
            {{ sectionTexts.resenas_y_testimonios_subtitle || 'Descubre inspiración, reseñas y tips por #RedkenLovers' }}
          </h4>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="reviews-slider">
          <!-- ARROWS -->
          <div class="nav-slider">
            <div class="swiper-button-prev" slot="button-prev" />
            <div class="swiper-button-next" slot="button-next" />
          </div>
          <!-- END ARROWS -->

          <div v-swiper:reviewsSwiper="swiperOptions"
            @ready="onSlideReady" class="slides-container">
            <div class="swiper-wrapper">
              <!-- SLIDE -->
              <card-review v-for="(review, index) in reviewsData"
                :title="review.title"
                :img="review.thumbnail"
                :desc="review.content"
                :author="review.author"
                :slug="review.slug"
                :key="index"
                class="swiper-slide"
              />
              <!-- END SLIDE -->

            </div>
          </div>

        </b-col>
      </b-row>

      <b-row>
        <b-col class="btn-container">
          <nuxt-link to="/testimonials" class="btn-outline">Quiero saber más</nuxt-link>
        </b-col>
      </b-row>

    </b-container>

  </div>
</template>

<script>
import CardReview from '~/components/card-review/CardReview'

export default {
  name: 'LastReviews',
  components: {
    CardReview
  },
  props: {
    reviewsData: {
      type: Array,
      required: true
    },
    sectionTexts: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showSlider: false,
      swiperOptions: {
        loop: false,
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 15,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    onSlideReady () {
      console.log('Ready Testimonials')
      this.showSlider = true
    }
  }
}
</script>

<style lang="scss" src="./LastReviews.scss" />
