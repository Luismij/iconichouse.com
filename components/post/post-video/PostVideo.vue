<template>
  <div class="item-video-container">
    <div v-if="data.title" class="item-title" v-html="data.title" />
    <div class="item-video">
      <div v-html="data.video" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>