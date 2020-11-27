<template>
  <div class="select-field" :class="[fieldStatus ? 'active' : '']" @click="fieldToggle">
    <div class="select-option">
      {{ activeFilter || "Mostrar" }}
      <v-icon icon="chevron-down" size="lg" />
    </div>
    <div
      class="select-option"
      :class="[$store.state.selectedFilter === cat ? 'active' : '']"
      @click="changeFilter(cat)"
      v-for="cat in data"
      :key="cat.slug"
    >{{ cat.name }}</div>
    <div
      :class="[$store.state.selectedFilter.name === 'Todos' ? 'active' : '']"
      @click="changeFilter({name:'Todos'})"
      class="select-option"
    >Todos</div>
  </div>
</template>

<script>
export default {
  props: ['data', 'isProductSection'],
  data() {
    return {
      fieldStatus: false
    }
  },
  methods: {
    changeFilter(data) {
      this.$store.commit('changeFilter', data)
      // ProductCategoryChange
      let categoryEvent = 'BlogCategoryChange'
      if (this.isProductSection) {
        categoryEvent = 'ProductCategoryChange'
      }
      this.$gtm.push({
        event: categoryEvent,
        label: data.name
      })
    },
    fieldToggle() {
      this.fieldStatus = !this.fieldStatus
    }
  },
  computed: {
    activeFilter() {
      return this.$store.state.selectedFilter.name
    }
  }
}
</script>

<style lang="scss" src="./SelectField.scss">
