<template>
  <section class="artists">
    <b-container fluid="xl">
      <breadcrumb actualArea="nostros" />

      <b-row>
        <b-col class="col-md-9">
          <h2>¿Quienes somos?</h2>

          <h4 class="separator-black separator-left">
            Conoce aquí las modelos que hacen parte de Iconica House
          </h4>
        </b-col>
      </b-row>

      <b-row class="" style="min-height:90vh; margin: 3vh 0;">
        <p>{{data.Texto}}</p>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Breadcrumb from '~/components/breadcrumb/Breadcrumb'
import SubscribeFooter from '~/components/subscribe-footer/SubscribeFooter'
import CustomBlock from '~/components/custom-block/CustomBlock'

// const API_PATH = '/'

export default {
  name: 'Modelos',
  components: {
    Breadcrumb,
    SubscribeFooter,
    CustomBlock
  },
  async asyncData({ $axios }) {
    try {
      // const { data } = await $axios.get(API_PATH)
      const data = await $axios.$get(
        'https://admin.iconicahouse.com/quienes-somos'
      )

      return {
        data
            }
    } catch (e) {
      console.log('Error loading api/artists')
      console.log(e)
      // redirect to error page
    }
  },
 
  
}
</script>

<style lang="scss" src="./Nosotros.scss" />
