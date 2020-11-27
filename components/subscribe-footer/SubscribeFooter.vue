<template>
  <div class="custom-block">
    <div id="subscribe" class="subscribe-footer container-lg">
      <b-container fluid>
        <b-row>
          <div class="subscribe-box">
            <h2 class="text-dark">{{ textsData.content_title }}</h2>

            <!-- <h4 class="text-white">{{ textsData.content_description }}</h4> -->
            <h4 class="text-dark">
              Conoce de primera mano las novedades, rutinas y recomendaciones de
              expertos para el cuidado de tu cabello.
            </h4>
            <!-- @submit.stop.prevent="onSubmit" -->
            <b-form
              id="subForm"
              novalidate
              autocomplete="on"
              class="js-cm-form"
              action="https://www.createsend.com/t/subscribeerror?description="
              method="post"
              data-id="2BE4EF332AA2E32596E38B640E905619E401843974FFD50299417EA4AEB36BD5A731F23FF37DA2D1568583A0231264DB5AD391456A12F807EC9E0FEFEEEEA5A2"
            >
              <div class="inputs-group">
                <input
                  id="fieldEmail"
                  v-model="email"
                  aria-label="email"
                  :placeholder="textsData.content_input_text"
                  autocomplete="Email"
                  class="js-cm-email-input qa-input-email"
                  maxlength="200"
                  name="cm-ykuljdi-ykuljdi"
                  required=""
                  type="email"
                />

                <b-form-radio-group
                  id="fieldjjdkxl"
                  v-model="radioSelected"
                  :options="optionsRadio"
                  class="mt-0 mb-2"
                  required
                  aria-label="Dueño_Estilista"
                  maxlength="200"
                  name="cm-f-jjdkxl"
                />
                <button class="btn-outline" aria-label="Submit" type="submit">
                  {{ textsData.content_button_text }}
                </button>
              </div>
            </b-form>
            <div class="container-message">
              <div
                v-if="showErrorMessage"
                class="error-message"
                :class="[submitSuccessfully ? 'success' : 'error']"
              >
                <p v-if="!submitSuccessfully">{{ messages }}</p>
                <p v-else>Te has suscrito correctamente.</p>
              </div>
            </div>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscribe',
  data() {
    return {
      submitClicked: false,
      email: null,
      messages: '',
      optionsRadio: [
        { text: 'Consumidor', value: 'consumidor' },
        { text: 'Estilista', value: 'estilista' }
      ],
      radioSelected: 'consumidor',
      submitSuccessfully: false,
      showErrorMessage: false
    }
  },
  computed: {
    textsData() {
      return this.$store.state.siteConfigData.content_repeat.find(
        (element) => element.content_type == 'newsletter'
      )
    },
    emailIsValid() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.email)
    }
  },
  methods: {
    async submit() {
      this.submitClicked = true
      this.messages = ''
      this.showErrorMessage = true

      setTimeout(() => {
        this.showErrorMessage = false
      }, 5000)

      if (!this.emailIsValid) {
        this.messages = 'Ingresa un e-mail válido.'
        return
      }

      const formData = new FormData()
      formData.append('email', this.email)
      formData.append('consumidor_estilista', this.radioSelected)

      try {
        this.$gtm.push({
          event: 'Form Submission',
          label: 'Email - Subscribete'
        })

        const { data } = await this.$axios.post('subscribe', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        })

        if (data.status === 'ok') {
          this.messages = 'ok'
          this.submitSuccessfully = true

          this.$gtm.push({
            event: 'Form Submission Success',
            label: 'Email - Subscribete'
          })
        } else {
          this.messages = data.message
          this.showSubmitBtn = true

          this.$gtm.push({
            event: 'ErrorJS',
            action: 'Form Submision error',
            label: data.message
          })
        }

        setTimeout(() => {
          this.messages = ''
        }, 5000)
      } catch (e) {
        // console.log(e)
        this.messages = 'Error.'
        this.showSubmitBtn = true

        this.$gtm.push({
          event: 'ErrorJS',
          action: 'Form Submision error',
          label: 'Error try/catch in Email Subscribete form'
        })
      }
    }
  },
  head() {
    return {
      script: [
        {
          src:
            'https://js.createsend1.com/javascript/copypastesubscribeformlogic.js'
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="./SubscribeFooter.scss" />
