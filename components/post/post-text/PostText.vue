<template>
  <div class="item-text-container">
    <div v-if="data.title" class="item-title" v-html="data.title" />
    <div class="item-text" v-html="data.text" />
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>