<template>
  <div class="hero-slider">
    <b-container v-show="showSlider" fluid="xl" class="hero-container">
      <div v-swiper:heroSlider="swiperOptions" @ready="onSlideReady">
        <!-- ARROWS -->
        <div slot="button-prev" class="swiper-button-prev" />
        <div slot="button-next" class="swiper-button-next" />
        <!-- END ARROWS -->

        <div class="swiper-wrapper">
          <!-- SLIDE -->
          <div
            v-for="(item, index) in heroData"
            :key="index"
            class="swiper-slide hero-slide"
          >
            <div class="hero-texts">
              <h2 class="hero-title">{{ item.texto || '' }}</h2>
              <h4 v-if="item.description">{{ item.description || '' }}</h4>
              <div v-if="item.link">
                <a
                  v-if="item.link === '/contacto'"
                  href=""
                  class="btn-outline border-white "
                  @click.prevent="clickEstilistas"
                  >{{ item.texto_boton || 'DESEO UNIRME' }}</a
                >
                <nuxt-link
                  v-else
                  :to="item.link"
                  class="btn-outline border-white "
                  >{{ item.texto_boton || 'DESEO UNIRME' }}</nuxt-link
                >
              </div>
            </div>
            <div
              class="hero-img"
              :style="
                `background-image: url('http://admin.iconicahouse.com${item.imagen.formats.medium.url}')`
              "
            ></div>
          </div>
          <!-- END SLIDE -->
        </div>
      </div>
    </b-container>

    <div class="bgs-container">
      <swiper ref="swiperBgs" class="swiper" :options="swiperOptionBg">
        <swiper-slide
          v-for="(item, index) in heroData"
          :key="`bg${index}`"
          class="slide-1"
        >
          <div
            class="bg"
            :style="{ 'background-image': `url(${item.background_image})` }"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'HeroHome',
  props: {
    heroData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      menuIsOpen: false,
      currentBg: 0,
      // currentIndex: null,
      showSlider: false,
      sliderData: null,
      swiperOptionBg: {
        loop: true,
        slidesPerView: 1,
        loopedSlides: 1,
        loopPreventsSlide: true,
        effect: 'fade'
        // fadeEffect: {
        //   crossFade: true,
        //   speed: 1500
        // },
        // speed: 1500
      },
      swiperOptions: {
        loop: true,
        slidesPerView: 1,
        loopedSlides: 1,
        loopPreventsSlide: true,
        centeredSlides: true,
        // spaceBetween: 10,
        // speed: 600,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      showVideoPlayer: false
    }
  },
  created() {
    // this.sliderData = [this.heroData[0]]
    this.sliderData = this.heroData
  },
  mounted() {
    this.$nextTick(() => {
      // console.log('Current Swiper instance object', this.heroSlider)
      // this.currentBg = `bg-${this.heroSlider.activeIndex}`
      // this.heroSlider.on('loopFix', this.onLoopFix)

      const swiperBgs = this.$refs.swiperBgs.$swiper
      this.heroSlider.controller.control = swiperBgs
      swiperBgs.controller.control = this.heroSlider
    })
  },
  methods: {
    ...mapMutations({
      showVideo: 'video/show'
    }),
    setCurrentBg(index) {
      this.currentBg = index
    },
    getImage(item) {
      let image = item.image
      if (!item.image && item.video_id) {
        image = `https://img.youtube.com/vi/${item.video_id}/maxresdefault.jpg`
      }

      return { 'background-image': `url(${image})` }
    },
    onSlideChangeTransitionStart() {
      console.log('onSlideChangeTransitionStart')
      this.currentBg = null
    },
    onSlideChangeTransitionEnd() {
      console.log('onSlideChangeTransitionEnd')
      console.log(this.heroSlider.realIndex)
      // console.log(this.heroSlider.activeIndex)
      // if (this.heroSlider.realIndex === 1) {
      //   this.currentIndex = 1
      // } else {
      //   this.currentIndex = 0
      // }
      // this.currentBg = this.heroSlider.realIndex
    },
    onLoopFix() {
      console.log('loop fix')
      console.log(`realindex ${this.heroSlider.realIndex}`)
      // this.currentBg = this.heroSlider.realIndex
    },
    onSlideReady() {
      console.log('Ready')
      this.showSlider = true

      // setTimeout(() => {
      //   this.sliderData = this.heroData
      // }, 3000)
    },

    onClickShowVideo(id) {
      // this.idVideo = id
      this.showVideo(id)
    },
    clickEstilistas() {
      this.menuIsOpen = false
      this.toggleForm()
      this.$bvModal.show('estilistas-modal')
    },
    ...mapMutations({
      toggleSearch: 'search/toggle',
      toggleForm: 'form/toggle',
      closeSearch: 'search/close',
      closeForm: 'form/close'
    })
  }
}
</script>

<style scoped lang="scss" src="./HeroHome.scss" />
