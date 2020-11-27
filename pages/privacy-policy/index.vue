<template>
  <section class="privacy">
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

const API_PATH = '/politica-de-privacidad'
export default {
  async asyncData({ $axios }) {
    try {
      const { data } = await $axios.get("http://admin.iconicahouse.com/politica-de-privacidad")
      return {
        data
      }
    } catch (e) {
      console.log('Error loading api/privacy')
      console.log(e)
      // redirect to error page
    }
  },
}
</script>

<style lang="scss">
  section.privacy {
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
          line-height: 1.1;
        }
      }
    }
    p {
      line-height: 1.1;
    }
  }
</style>
