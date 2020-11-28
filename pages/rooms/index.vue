<template>
  <section class="products">
    <b-container fluid="lg">
      <breadcrumb actualArea="Rooms" />
      <b-row>
        <div class="col-md-9">
          <h2>Rooms</h2>
          <h4 class="separator-black">Conoce aquí las Rooms de Iconica House</h4>
        </div>
        <!-- <div class="col-md-3 align-items-end">
          <select-field :data="categories" :is-product-section="true" />
        </div> -->
      </b-row>

      <b-row class="product-list">
        <product-item
          v-for="(item, index) in data"
          :key="index"
          :data="item"
          class="col-xs-12 col-sm-6 col-md-6"
        />
      </b-row>
 
    </b-container>
<!-- 
    <custom-block
      :title="data.fields.testimonials_title"
      :desc="data.fields.testimonials_description"
      :img="data.fields.testimonials_image"
      :btn="data.fields.testimonials_button_text"
    /> -->

  </section>
</template>

<script>
import ProductItem from '~/components/products/product-item/ProductItem'
import SelectField from '~/components/select-field/SelectField'
import SubscribeFooter from '~/components/subscribe-footer/SubscribeFooter'
import Breadcrumb from '~/components/breadcrumb/Breadcrumb'
import CustomBlock from '~/components/custom-block/CustomBlock'


export default {
  name: 'Products',
  components: {
    ProductItem,
    SelectField,
    Breadcrumb,
    SubscribeFooter,
    CustomBlock
  },
  async asyncData({ $axios }) {
    try {

      const info = await $axios.$get('https://admin.iconicahouse.com/rooms')
      return {
      
        data:info,
      
    
      }
    } catch (e) {
      console.log('Error loading api/products')
      console.log(e)
      // redirect to error page
    }
    
  },

  
}
</script>

<style lang="scss" src="./Rooms.scss" />
