<template>
  <section class="artists">
    <b-container fluid="xl">
      <breadcrumb actual-area="servicios" />

      <b-row>
        <b-col class="col-md-9">
          <h2>{{ this.$store.state.siteConfigData.section_title_2 || '' }}</h2>

          <h4 class="separator-black separator-left">
            {{ this.$store.state.siteConfigData.section_desc_2 || '' }}
          </h4>
        </b-col>
      </b-row>

      <b-row class="artist-list">
        <div
          v-for="(item, index) in models"
          :key="index"
          class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
        >
          <div class="artist">
            <div class="img-container">
              <div
                class="img lazyload"
                :data-bg="`https://admin.iconicahouse.com${item.foto.url}`"
              />
            </div>
            <div class="texts">
              <h3>{{ item.nombre }}</h3>
              <p>{{ item.descripcion || '' }}</p>
              <div>
                <p v-for="(rs, indx) in item.Redes" :key="indx" class="my-2">
                  <strong>{{ rs.red_social + ' :' }}</strong>
                  <a
                    data-artist-instagram="true"
                    :data-artist="item.nombre"
                    :href="`${rs.url}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ rs.username }}</a
                  >
                </p>
              </div>
              <!-- <p>
                <span> <strong>Ver :</strong> ir a webcam</span>
              </p> -->
            </div>
          </div>
        </div>
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
      const modelsData = await $axios.$get(
        'https://admin.iconicahouse.com/modelos'
      )

      return {
        models: modelsData
      }
    } catch (e) {
      console.log('Error loading api/artists')
      console.log(e)
      // redirect to error page
    }
  }
}
</script>

<style lang="scss" src="./Modelos.scss" />
