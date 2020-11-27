<template>
  <div class="big-header">
    <b-container fluid="lg">
      <breadcrumb :actual-area="data.title_page" />
      <b-row>
        <div class="col-md-9">
          <h2>{{ data.title_page || '' }}</h2>
          <h4 class="separator separator-left">
            {{ data.headline_page || '' }}
          </h4>
        </div>
        <div class="col-md-3">
          <select-field v-if="categories" :data="categories" />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SelectField from '~/components/select-field/SelectField'
import Breadcrumb from '~/components/breadcrumb/Breadcrumb'

export default {
  components: {
    SelectField,
    Breadcrumb
  },
  props: ['data', 'categories']
}
</script>

<style lang="scss" src="./BigHeader.scss" />
