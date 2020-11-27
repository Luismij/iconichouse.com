<template>
  <div class="video-lightbox" v-if="showPlayer">
    <div class="video-lightbox-overlay" @click="closeLightbox()" />
    <div class="video-ligthbox-content">
      <div @click="closeLightbox()" class="video-ligthbox-close">
        <img src="~/static/images/lightbox-close.svg" alt />
      </div>
      <!-- VIDEOPLAYER -->
      <!-- <div class="player-yt"> -->
        <youtube :video-id="id"
          ref="youtube"
          :player-vars="playerVars"
          @ended="onVideoEnded"
        />
      <!-- </div> -->
    <!-- END VIDEOPLAYER -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      closeLightbox: 'video/close'
    }),
    onVideoEnded() {
      // this.showVideoPlayer = false
      this.closeLightbox()
    },
  },
  computed: {
    ...mapState('video',['id', 'showPlayer']),
  },
  data() {
    return {
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        rel: 1,
        showinfo: 1,
        controls: 2
      }
    }
  },
}
</script>

<style lang="scss" src="./VideoLightbox.scss" />
