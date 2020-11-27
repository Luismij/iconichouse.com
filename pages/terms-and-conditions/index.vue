<template>
  <section class="terms">
    <b-container>
      <b-row>
        <b-col>
          <br/>
          <div v-html="data"></div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
const API_PATH = '/terminos-y-condiciones'
export default {
  async asyncData({ $axios }) {
    try {
      const  data  = await $axios.$get("http://admin.iconicahouse.com/terminos-y-condiciones")
      return {
        data
      }
    } catch (e) {
      console.log('Error loading api/terms-and-conditions')
      console.log(e)
      // redirect to error page
    }
  },
}
</script>

<style lang="scss">
  section.terms {
    h4 {
      margin: 25px 0 5px;
    }
    ul {
      list-style-type: disc;
        padding-left: 30px;
        margin-bottom: 20px;
      li {
            font-size: .75rem;
        p {
          margin: 0;

        }
      }
    }
  }
</style>
