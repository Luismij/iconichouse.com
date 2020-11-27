<template>
  <div class="item-text-container">
    <div v-if="data.title" class="item-title" v-html="data.title" />
    <div class="item-flex">
      <div
        v-if="data.content_type !== 'Image'"
        class="item-text"
        v-html="data.text"
      />
      <div class="item-image">
        <img
          :class="[data.content_type !== 'Horizontal' ? 'image-big' : '']"
          :src="data.image.url"
          alt=""
        />
        <small>{{ data.image.caption }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>
