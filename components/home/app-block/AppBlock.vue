<template>
  <div class="app-block">
    <b-container>
      <b-row class="header-app-block">
        <b-col class="d-flex flex-column align-items-center">

          <h2>{{ $store.state.siteConfigData.app_title || '' }}</h2>

          <h4 class="separator-black">
            {{ $store.state.siteConfigData.app_subtitle || '' }}
          </h4>
        </b-col>
      </b-row>

      <div class="app-content">

        <div class="app-texts">
          <h2>{{ $store.state.siteConfigData.app_title_secondary || '' }}</h2>
          <h5>{{ $store.state.siteConfigData.app_text || '' }}</h5>

          <h4>{{ $store.state.siteConfigData.app_text_secondary || '' }}</h4>

          <div class="app-btns">
            <a :href="$store.state.siteConfigData.app_download[0].download_url" target="blank" rel="noopener">
              <img :src="$store.state.siteConfigData.app_download[0].download_icon" alt="android">
            </a>
            <a :href="$store.state.siteConfigData.app_download[1].download_url" target="blank" rel="noopener">
              <img :src="$store.state.siteConfigData.app_download[1].download_icon" alt="android">
            </a>
          </div>

        </div>

        <div class="app-image-container">
          <div class="app-image lazyload" :data-bg="$store.state.siteConfigData.app_image" />
        </div>

      </div>

    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AppBlock',
}
</script>

<style lang="scss" src="./AppBlock.scss" />
