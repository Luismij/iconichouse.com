<template>
  <div class="product-slider">
    <b-container fluid="xl">
      <b-row>
        <b-col class="d-flex flex-column align-items-center">
          <h4>{{ this.$store.state.siteConfigData.section_title_2 || '' }}</h4>
        </b-col>
      </b-row>

      <b-row class="products">
        <b-col v-show="showSlider">
          <!-- ARROWS -->
          <div class="nav-slider">
            <div slot="button-prev" class="product-prev swiper-button-prev" />
            <div slot="button-next" class="product-next swiper-button-next" />
          </div>
          <!-- END ARROWS -->

          <div v-swiper:myDirectiveSwiper="swiperOptions" @ready="onSlideReady">
            <div class="swiper-wrapper">
              <!-- SLIDE -->
              <product-item
                v-for="(item, index) in models"
                :key="index"
                :data="item"
                class="swiper-slide"
              />
              <!-- END SLIDE -->
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="d-flex justify-content-center">
          <nuxt-link to="/servicios" class="btn-outline">Ver más</nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductItem from '~/components/product-item/ProductItem'

export default {
  name: 'ProductSlider',
  components: {
    ProductItem
  },
  // props: {
  //   productsData: {
  //     type: Array,
  //     required: true
  //   }
  // },
  props: ['models'],
  data() {
    return {
      showSlider: false,
      swiperOptions: {
        loop: true,
        slidesPerView: 2,
        loopedSlides: 2,
        centeredSlides: false,
        spaceBetween: 15,
        navigation: {
          nextEl: '.product-next.swiper-button-next',
          prevEl: '.product-prev.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 15,
            loopedSlides: 2
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            loopedSlides: 2
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
            loopedSlides: 1
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
            loopedSlides: 1
          }
        }
      }
    }
  },

  computed: {
    productsData() {
      return this.$store.state.productsForSlider
    }
  },
  methods: {
    onSlideReady() {
      // console.log('Ready')
      this.showSlider = true
    }
  }
}
</script>

<style lang="scss" src="./ProductSlider.scss" />
