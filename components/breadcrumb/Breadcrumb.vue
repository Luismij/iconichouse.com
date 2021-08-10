<template>
  <b-row>
    <div class="breadcrumb-header col-12">
      <nuxt-link to="/" class="breadcrumb-item">Inicio</nuxt-link>
      <div class="breadcrumb-separator">
        <v-icon icon="chevron-right" />
      </div>
      <!-- <div class="breadcrumb-item actualItem">{{ actualArea }}</div> -->
      <div v-if="actualArea && !areaSlug" class="breadcrumb-item actualItem">
        {{ actualArea }}
      </div>
      <nuxt-link
        v-if="actualPage && areaSlug"
        :to="areaSlug"
        class="breadcrumb-item actualItem"
        >{{ actualArea }}</nuxt-link
      >
      <div v-if="actualPage" class="breadcrumb-separator">
        <v-icon icon="chevron-right" />
      </div>
      <div v-if="actualPage" class="breadcrumb-item actualItem showMobile">
        {{ actualPage }}
      </div>
    </div>
  </b-row>
</template>

<script>
export default {
  props: ['actualPage', 'actualArea', 'areaSlug']
}
</script>

<style lang="scss">
.breadcrumb-header {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  // margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media only screen and (max-width: $screen-md) {
    padding-top: 30px;
    padding-bottom: 30px;

    max-width: 10000px;
    overflow: hidden;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      display: none;
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
  }

  .breadcrumb-item {
    font-weight: normal;
    font-size: 11px;
    letter-spacing: 0.05em;
    line-height: 12px;
    text-align: left;
    color: black;
    white-space: nowrap;
    padding-left: 0;

    &:before {
      display: none;
    }

    &:last-child {
      padding-right: 30px;
    }
  }

  .breadcrumb-separator {
    margin: -2px 10px 0;
    color: black;

    svg {
      height: 8px;
      vertical-align: 1.5px;
    }
  }
}
</style>
