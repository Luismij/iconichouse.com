<template>
  <div class="post-gallery">
    <div v-swiper:gallerySwiper="swiperOptions" class="slides-container" @ready="onSlideReady">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image, index) in data.gallery" :key="index">
          <img :src="image" />
          <!-- <div class="image" :style="{'background-image':`url(${image})`}"/> -->
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <!-- <div class="post-gallery">
    <swiper class="swiper" :options="swiperOptions">
      <swiper-slide v-for="(image, index) in data.gallery" :key="index">
        <img :src="image" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>-->
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    onSlideReady() {
      console.log('Ready Gallery')
    }
  }
}
</script>
