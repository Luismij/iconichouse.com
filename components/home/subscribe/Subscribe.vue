<template>
  <div
    id="subscribe"
    class="subscribe lazyload"
    
  >
    <!-- <div id="subscribe" class="subscribe" :style="{'background-image':`url(${textsData.content_background})`}"> -->
    <b-container fluid="xl">
      <b-row>
        <div class="subscribe-box">
          <!-- <img src="~/static/images/r-icon.svg" alt="subscribe"> -->

          <h2 class="text-white">{{titulo}}</h2>

          <h4 class="text-white">
            {{nosotros}}
          </h4>


          <nuxt-link
          to="/nosotros"
            class="btn-outline border-white"
          
            >Saber más</nuxt-link
          >

          <!-- <div v-if="messages" class="messages-container">
            <p v-if="!submitSuccessfully" class="msg-error">{{ messages }}</p>
            <p v-if="submitSuccessfully" class="msg-success">
              Te has suscrito correctamente.
            </p>
          </div> -->
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Subscribe',
  props:['titulo','nosotros'],
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
      submitSuccessfully: false
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
    // async submit() {
    //   this.submitClicked = true
    //   this.messages = ''

    //   if (!this.emailIsValid) {
    //     this.messages = 'Ingresa un e-mail válido.'
    //     return
    //   }

    //   const formData = new FormData()
    //   formData.append('email', this.email)
    //   formData.append('consumidor_estilista', this.radioSelected)

    //   try {
    //     this.$gtm.push({
    //       event: 'Form Submission',
    //       label: 'Email - Subscribete Home'
    //     })

    //     const { data } = await this.$axios.post('subscribe', formData, {
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //       }
    //     })

    //     if (data.status === 'ok') {
    //       this.messages = 'ok'
    //       this.submitSuccessfully = true

    //       this.$gtm.push({
    //         event: 'Form Submission Success',
    //         label: 'Email - Subscribete Home'
    //       })
    //     } else {
    //       this.messages = data.message
    //       this.showSubmitBtn = true

    //       this.$gtm.push({
    //         event: 'ErrorJS',
    //         action: 'Form Submision error',
    //         label: data.message
    //       })
    //     }

    //     setTimeout(() => {
    //       this.messages = ''
    //     }, 5000)
    //   } catch (e) {
    //     // console.log(e)
    //     this.messages = 'Error.'
    //     this.showSubmitBtn = true

    //     this.$gtm.push({
    //       event: 'ErrorJS',
    //       action: 'Form Submision error',
    //       label: 'Error try/catch in Email Subscribete Home form'
    //     })
    //   }
    // }
  }
}
</script>

<style lang="scss" src="./Subscribe.scss" />
