<template>
  <section class="politica-distribuidor-no-autorizado">
    <b-container>
      <b-row>
        <b-col>
          <br/>
          <div v-html="data.fields.content"></div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>

const API_PATH = '/politica-distribuidor-no-autorizado'
export default {
  async asyncData({ $axios }) {
    try {
      const { data } = await $axios.get(API_PATH)
      return {
        sectionData: data,
        data: data.data[0]
      }
    } catch (e) {
      console.log('Error loading api/politica-distribuidor-no-autorizado')
      console.log(e)
      // redirect to error page
    }
  },
}
</script>

<style lang="scss">
  section.politica-distribuidor-no-autorizado {
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
          line-height: 1.2;
        }
      }
    }
    p {
      font-size: .85rem;
      line-height: 1.5;
    }
  }
</style>
