<template>
  <b-container id="contact-footer" fluid class="estilistas">
    <!-- <div class="estilistas-lightbox-overlay" @click="closeLightbox()" /> -->
    <b-row class="estilistas-ligthbox-content">
      <b-col
        cols="12"
        md="7"
        lg="6"
        class="footer-links-container  d-flex flex-column justify-content-between"
        ><div class="footer-links">
          <ul>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/blog">Blog kerastase</a></li>
            <li><a href="#suscribe">suscribite</a></li>
          </ul>
        </div>
        <div class="legals pl-0">
          <ul>
            <li
              v-for="(item, index) in dataFooter.insitutional_links"
              :key="`legals-${index}`"
            >
              <nuxt-link :to="item.link_footer"
                ><span>{{ item.title_footer }}</span></nuxt-link
              >
            </li>
          </ul>
        </div>
      </b-col>

      <b-col class="d-flex  justify-content-md-end" cols="12" md="5" lg="6">
        <div>
          <h4 class="social-title">
            {{ dataFooter.social_icons_title }}
          </h4>
          <ul class="social-list">
            <li
              v-for="(social, index) in dataFooter.social_icons"
              :key="`social${index}`"
            >
              <a :href="social.link" target="_blank">
                <span v-if="social.name === 'facebook'">
                  <v-icon
                    name="brands/facebook-f"
                    :icon="['fab', 'facebook-f']"
                    label="facebook"
                  />
                </span>
                <span v-else-if="social.name === 'pinterest'">
                  <v-icon
                    name="brands/pinterest-p"
                    :icon="['fab', 'pinterest-p']"
                    label="pinterest"
                  />
                </span>
                <span v-else-if="social.name === 'snapchat'">
                  <v-icon
                    name="brands/snapchat-ghost"
                    :icon="['fab', 'snapchat-ghost']"
                    label="snapchat"
                  />
                </span>
                <span v-else>
                  <v-icon
                    :name="`brands/${social.name}`"
                    :icon="['fab', social.name]"
                    :label="social.name"
                  />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
    <b-row class="legals ">
      <b-col class="d-flex flex-column justify-content-between flex-md-row">
        <!-- <p
          
          v-html="
            dataFooter.copyright_text +
              ''
          "
        /> -->
        <p class=" mb-0">
          © 2020 Kérastase. <br />
          <span
            >All Rights Reserved This site is intended for US consumers.
            <br />

            Cookies and related technology are used for advertising. To learn
            more or opt-out, visit AdChoices and our Privacy Policy.</span
          >
        </p>
      </b-col>
    </b-row>
    <!-- <b-row class="legals legals-mobile">
      <b-col>
        <ul>
          <li
            v-for="(item, index) in dataFooter.insitutional_links"
            :key="`legals-${index}`"
          >
            <nuxt-link :to="item.link_footer"
              ><span>{{ item.title_footer }}</span></nuxt-link
            >
          </li>
        </ul>
        <div v-html="dataFooter.copyright_text" />
      </b-col>

      <b-col md="auto">
        <nuxt-link to="/">
          <h1>
            <img
              :src="dataFooter.logo_footer.url"
              :alt="dataFooter.brand_content"
            />
          </h1>
        </nuxt-link>
      </b-col>
    </b-row> -->
    <!-- <b-modal id="welcom-msg-container" hide-footer hide-header>
      <welcome-msg
        @closeMsg="
          () => {
            this.$bvModal.hide('welcom-msg-container')
          }
        "
      />
    </b-modal> -->
    <!-- <button v-b-modal="'welcom-msg-container'">Show Modal</button> -->
  </b-container>
</template>

<script>
// const URL_SERVICE = 'contact-form'
import WelcomMsg from '~/components/welcome-msg/WelcomeMsg'
export default {
  name: 'FooterForm',
  components: { WelcomMsg },
  data() {
    return {
      formData: {},
      submitClicked: false,
      isSending: false,
      messages: '',
      submitSuccessfully: false,
      email: null,
      name: null,
      lastname: null,
      address: null,
      phone: null,
      city: null,
      salon: null,
      brandInterest: null,
      comments: null,
      optionsRadio: [
        { text: 'Soy dueño', value: 'dueño', selected: true },
        { text: 'Soy estilista', value: 'estilista', disabled: false }
      ],
      radioSelected: null
    }
  },
  computed: {
    emailIsValid() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.email)
    },
    dataFooter() {
      return this.$store.state.siteConfigData
    }
  },
  mounted() {
    this.isSuccessful()
  },

  methods: {
    isSuccessful() {
      if (this.$route.query.successful === '1') {
        this.$bvModal.show('welcom-msg-container')
        // this.$router.push('/')
      }
    },
    onSubmit(event) {
      this.submitClicked = true
      this.messages = ''
      if (!this.emailIsValid) {
        this.messages = 'Completar campos requeridos'
        event.preventDefault()
        return
      }

      if (!this.name) {
        this.messages = 'Completar campos requeridos'
        event.preventDefault()
        return
      }

      if (!this.phone) {
        this.messages = 'Completar campos requeridos'
        event.preventDefault()
        return
      }

      if (!this.address) {
        this.messages = 'Completar campos requeridos'
        event.preventDefault()
        return
      }

      if (!this.city) {
        this.messages = 'Completar campos requeridos'
        event.preventDefault()
        return
      }

      if (!this.salon) {
        this.messages = 'Completar campos requeridos'
        event.preventDefault()
        return
      }

      if (!this.radioSelected) {
        this.messages = 'Completar campos requeridos'
        event.preventDefault()
      }
      this.isSending = true
      // setTimeout(() => {
      //   this.isSending = false
      // }, 2500)
    },

    //   const formData = new FormData()
    //   formData.append('email', this.email)
    //   formData.append('name', this.name)
    //   formData.append('phone', this.phone)
    //   formData.append('address', this.address)
    //   formData.append('city', this.city)
    //   formData.append('salon', this.salon)
    //   formData.append('optionSalon', this.radioSelected)
    //   formData.append('brandInterest', this.brandInterest || '')
    //   formData.append('comments', this.comments || '')

    //   try {
    //     this.isSending = true

    //     this.$gtm.push({
    //       event: 'Form Submission',
    //       label: 'Estilistas Hablamemos'
    //     })

    //     const { data } = await this.$axios.post(URL_SERVICE, formData, {
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //       }
    //     })

    //     if (data.status === 'ok') {
    //       this.messages = 'Gracias. Los datos fueron enviados correctamente.'
    //       this.submitSuccessfully = true

    //       this.$gtm.push({
    //         event: 'Form Submission Success',
    //         label: 'Estilistas Hablamemos'
    //       })
    //     } else {
    //       this.messages = data.message
    //       this.showSubmitBtn = true
    //       this.isSending = false

    //       this.$gtm.push({
    //         event: 'ErrorJS',
    //         action: 'Form Submision error',
    //         label: data.message
    //       })
    //     }

    //     this.reset()
    //     // setTimeout(() => {
    //     //   this.reset()
    //     // }, 15000)
    //   } catch (e) {
    //     // console.log(e)
    //     this.messages = 'Error.'
    //     this.showSubmitBtn = true
    //     this.isSending = false

    //     this.$gtm.push({
    //       event: 'ErrorJS',
    //       action: 'Form Submision error',
    //       label: 'Error try/catch in estilistas hablemos form'
    //     })
    //   }
    // },
    reset() {
      // Reset our form values
      this.email = null
      this.name = null
      this.address = null
      this.city = null
      this.salon = null
      this.phone = null
      this.brandInterest = null
      this.comments = null
      this.isSending = false
      this.messages = ''
      this.submitClicked = false
      // this.submitSuccessfully = false
    }
    // closeLightbox() {
    //   // this.$store.commit('form/close')
    //   this.$bvModal.hide('estilistas-modal')
    //   this.reset()
    // }
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

<style lang="scss" src="./FooterForm.scss" />
