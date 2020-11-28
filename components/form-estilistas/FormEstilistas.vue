<template>
  <div>
    <b-modal id="estilistas-modal" size="lg" hide-footer hide-header>
      <div class="estilistas">
        <!-- <div class="estilistas-lightbox-overlay" @click="closeLightbox()" /> -->
        <div class="estilistas-ligthbox-content">
          <div class="estilistas-ligthbox-close" @click="closeLightbox()">
            <img src="~/static/images/lightbox-close-white.svg" alt />
          </div>
          <transition name="fade" mode="out-in">
            <div v-show="!submitSuccessfully" key="forminput">
              <h2>
                Estilista <br />
                Estamos para ti
              </h2>
              <!-- @submit="onSubmit($event)" -->
              <!-- @submit.stop.prevent="onSubmit" -->
              <b-form
                id="subForm"
                novalidate
                autocomplete="on"
                class="js-cm-form footer-form"
                action="https://www.createsend.com/t/subscribeerror?description="
                method="post"
                data-id="2BE4EF332AA2E32596E38B640E90561992B881B3B2DEA66232398CC7A0F61D060C685BA8D87A50276D43D4A5307DB20E853F6C859440443D7AC6770A28CB2368"
              >
                <b-row>
                  <b-col cols="12" lg="12">
                    <div
                      class="f-group"
                      :class="{ error: !name && submitClicked }"
                    >
                      <input
                        id="fieldName"
                        v-model="name"
                        type="text"
                        placeholder="Nombre *"
                        required
                        aria-label="Nombre"
                        maxlength="200"
                        name="cm-name"
                      />
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" lg="6">
                    <div
                      class="f-group"
                      :class="{ error: !emailIsValid && submitClicked }"
                    >
                      <input
                        id="fieldEmail"
                        v-model="email"
                        type="email"
                        placeholder="Email *"
                        required
                        autocomplete="Email"
                        aria-label="Dirección de email"
                        class="js-cm-email-input qa-input-email"
                        maxlength="200"
                        name="cm-ykuljdu-ykuljdu"
                      />
                    </div>
                  </b-col>
                  <b-col cols="12" lg="6">
                    <div
                      class="f-group"
                      :class="{ error: !phone && submitClicked }"
                    >
                      <input
                        id="fieldjjtkjjh"
                        v-model="phone"
                        type="text"
                        placeholder="Teléfono *"
                        required
                        aria-label="Phone"
                        maxlength="200"
                        name="cm-f-jjtkjjh"
                      />
                    </div>
                  </b-col>
                </b-row>

                <!-- <div class="f-group" :class="{ error: !lastname && submitClicked }">
                <input aria-label="lastname" id="lastname" name="lastname"
                  type="text" v-model="lastname" placeholder="Apellido *" required />
              </div> -->
                <b-row>
                  <b-col cols="12" lg="6">
                    <div
                      class="f-group"
                      :class="{ error: !salon && submitClicked }"
                    >
                      <input
                        id="fieldjjtkjtr"
                        v-model="salon"
                        type="text"
                        placeholder="Nombre del salón *"
                        required
                        aria-label="Salon"
                        maxlength="200"
                        name="cm-f-jjtkjtr"
                      />
                    </div>
                  </b-col>
                  <b-col cols="12" lg="6">
                    <b-form-radio-group
                      id="fieldjjtkjty"
                      v-model="radioSelected"
                      :options="optionsRadio"
                      class="mt-0 mb-2"
                      required
                      aria-label="Dueño_Estilista"
                      maxlength="200"
                      name="cm-f-jjtkjty"
                    ></b-form-radio-group>
                    <!-- <div class="personalized-checkbox-container">
                  <label for="cm-f-jjtkjtr"> Soy dueño*</label>
                  <div
                    class="f-group personalized-checkbox"
                    :class="{ error: !address && submitClicked }"
                  >
                    <input
                      id="fieldjjtkjtr"
                      aria-label="Salon"
                      maxlength="200"
                      name="cm-f-jjtkjtr"
                      type="radio"
                    />
                  </div>
                </div>
                <div class="personalized-checkbox-container">
                  <label for="cm-f-jjtkjty">Soy estilista*</label>
                  <div
                    class="f-group personalized-checkbox"
                    :class="{ error: !address && submitClicked }"
                  >
                    <input
                      id="fieldjjtkjty"
                      aria-label="Dueño_Estilista"
                      maxlength="200"
                      name="cm-f-jjtkjty"
                      type="radio"
                    />
                  </div>
                </div> -->
                  </b-col>
                </b-row>

                <b-row>
                  <b-col cols="12" lg="6">
                    <div
                      class="f-group"
                      :class="{ error: !address && submitClicked }"
                    >
                      <input
                        id="fieldjjtkjju"
                        v-model="address"
                        type="text"
                        placeholder="Dirección *"
                        required
                        aria-label="Address"
                        maxlength="200"
                        name="cm-f-jjtkjju"
                      />
                    </div>
                  </b-col>
                  <b-col cols="12" lg="6">
                    <div
                      class="f-group"
                      :class="{ error: !city && submitClicked }"
                    >
                      <input
                        id="fieldjjtkjtl"
                        v-model="city"
                        type="text"
                        placeholder="Pueblo *"
                        required
                        aria-label="Pueblo"
                        maxlength="200"
                        name="cm-f-jjtkjtl"
                      />
                    </div>
                  </b-col>
                </b-row>

                <!-- <b-form-group name="radio-inline">
                  <b-form-radio value="first" size="sm">Soy dueño*</b-form-radio>
                  <b-form-radio value="estilista" size="sm">Soy estilista*</b-form-radio>
              </b-form-group> -->
                <b-row>
                  <b-col>
                    <div class="f-group">
                      <input
                        id="fieldjjtkjtj"
                        v-model="brandInterest"
                        type="text"
                        placeholder="¿Qué otra marca de la familia L’Oréal te interesa?"
                        aria-label="Otra Marca"
                        maxlength="200"
                        name="cm-f-jjtkjtj"
                      />
                    </div>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <div class="comments">
                      <textarea
                        id="fieldjjtkjjk"
                        v-model="comments"
                        rows="1"
                        placeholder="Comentarios"
                        aria-label="Comments"
                        maxlength="200"
                        name="cm-f-jjtkjjk"
                      ></textarea>
                    </div>
                  </b-col>
                </b-row>
                <!-- @click="onSubmit($event)" -->
                <div
                  :class="[isSending ? 'inactive' : '']"
                  class="btn-send-container"
                >
                  <input
                    class="btn-outline"
                    type="submit"
                    value="Contáctenme pronto"
                    aria-label="Contáctenme pronto"
                    @click="onSubmit($event)"
                  />
                  <div v-if="isSending && !submitSuccessfully" class="sending">
                    <v-icon icon="spinner" spin />
                    <!-- <half-circle-spinner :animation-duration="1000" :size="26" color="#000" class="spinner" /> -->
                  </div>
                </div>
                <p v-if="!isSending">(*) Campos obligatorios</p>
              </b-form>

              <div v-if="messages" class="messages-container">
                <p v-if="!submitSuccessfully" class="msg-error">
                  {{ messages }}
                </p>
                <p v-if="submitSuccessfully" class="msg-success">
                  Datos enviados correctamente.
                </p>
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div
              v-show="submitSuccessfully"
              key="formok"
              class="msg-successfully"
            >
              <h2 class="text-white">Gracias por contactarte con redken.</h2>
              <h4 class="separator separator-left">
                Nos comunicaremos pronto para poner los productos que amas en
                tus manos y las de tus clientes.
              </h4>
            </div>
          </transition>
        </div>
      </div>
    </b-modal>
   
  </div>
</template>

<script>


const URL_SERVICE = 'contact-form'
export default {
  data() {
    return {
      formData: {},
      submitClicked: false,
      isSending: false,
      messages: '',
      submitSuccessfully: false,
      email: null,
      name: null,
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
    },
    closeLightbox() {
      // this.$store.commit('form/close')
      this.$bvModal.hide('estilistas-modal')
      this.reset()
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

<style lang="scss" src="./FormEstilistas.scss" />
