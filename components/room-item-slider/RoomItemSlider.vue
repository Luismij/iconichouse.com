<template>
  <div class="hero-slider">
    <div class="hero-container" v-show="showSlider">
      <div v-swiper:heroSlider="swiperOptions" @ready="onSlideReady">
        <!-- ARROWS -->
        <div class="swiper-button-prev" slot="button-prev" />
        <div class="swiper-button-next" slot="button-next" />
        <!-- END ARROWS -->

        <div class="swiper-wrapper">
          <!-- SLIDE -->
          <div v-for="(item, index) in heroData" :key="index" class="swiper-slide hero-slide">
            <!-- <div class="hero-texts">
              <h2 class="hero-title">{{item.title || ""}}</h2>
              <h4 v-if="item.description">{{item.description || ""}}</h4>
              <div v-if="item.url">
                <a
                  v-if="item.external_link[0] === 'Yes'"
                  :href="item.url"
                  class="btn-outline"
                  target="_blank"
                >{{ item.button_text || 'Leer ahora' }}</a>
                <a
                  href="#estilistas"
                  @click.prevent="$bvModal.show('estilistas-modal')"
                  class="btn-outline"
                  v-else-if="item.url === 'estilistas'"
                >{{ item.button_text || 'Leer ahora' }}</a>
                <nuxt-link
                  v-else
                  :to="item.url"
                  class="btn-outline"
                >{{ item.button_text || 'Leer ahora' }}</nuxt-link>
              </div>
            </div> -->
            <!-- <div>{{`https://admin.iconicahouse.com/${item.formats.medium.url}`}}</div> -->
            <div class="hero-img" :style="{ 'background-image': `url('https://admin.iconicahouse.com${item.formats.medium.url}')` }">
              <!-- <img :src="`https://admin.iconicahouse.com${item.formats.medium.url}`" alt="" srcset=""> -->
                
            </div>
            
          </div>
          <!-- END SLIDE -->
        </div>
      </div>
    </div>

    <!-- <div class="bgs-container">
      <swiper class="swiper" ref="swiperBgs" :options="swiperOptionBg">
        <swiper-slide class="slide-1" v-for="(item, index) in heroData" :key="`bg${index}`">
          <div class="bg" :style="{'background-image':`url(${item.background_image})`}" />
        </swiper-slide>
      </swiper>
    </div> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'RoomItemSlider',
  props: {
    heroData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
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

      // const swiperBgs = this.$refs.swiperBgs.$swiper
      // this.heroSlider.controller.control = swiperBgs
      // swiperBgs.controller.control = this.heroSlider
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
    }
  }
}
</script>

<style  lang="scss" src="./RoomItemSlider.scss" />
