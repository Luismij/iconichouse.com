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
              <h2>Contacto <br /></h2>
              <!-- @submit="onSubmit($event)" -->
              <!-- @submit.stop.prevent="onSubmit" -->
              <b-form
                id="contact-form"
                @submit.stop.prevent="onSubmit"
                method="post"
                novalidate
              >
                <b-row>
                  <b-col cols="12" lg="12">
                    <div
                      class="f-group"
                      :class="{ error: !nombre && submitClicked }"
                    >
                      <input
                        id="nombre"
                        v-model="nombre"
                        type="text"
                        placeholder="Nombre *"
                        required
                        aria-label="Nombre"
                        maxlength="200"
                        name="nombre"
                      />
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" lg="12">
                    <div
                      class="f-group"
                      :class="{ error: !emailIsValid && submitClicked }"
                    >
                      <input
                        id="email"
                        v-model="email"
                        type="email"
                        placeholder="Email *"
                        required
                        aria-label="Dirección de email"
                        maxlength="200"
                        name="email"
                      />
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="comentarios">
                      <textarea
                        id="comentarios"
                        v-model="comentarios"
                        rows="3"
                        placeholder="Comentarios"
                        aria-label="Comentarios"
                        maxlength="200"
                        name="mensaje"
                      ></textarea>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="8" lg="6">
                    <div class="form-check">
                      <label class="form-check-label" for="defaultCheck1">
                        Acepta términos y condiciones
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="accepted"
                        id="tratamiento-datos"
                        v-model="tratamientoDatos"
                        name="tratamiento-datos"
                      />
                    </div>
                  </b-col>
                </b-row>
                <!-- @click="onSubmit($event)" -->
                <div
                  :class="[isSending ? 'inactive' : '']"
                  class="btn-send-container mt-5"
                >
                  <input
                    class="btn-outline"
                    type="submit"
                    value="Contáctenme pronto"
                    aria-label="Contáctenme pronto"
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
              <h2 class="text-white">
                Gracias por contactarte con Iconica House.
              </h2>
              <h4 class="separator separator-left">
                Nos comunicaremos pronto.
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
      nombre: null,
      comentarios: null,
      tratamientoDatos: null
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

      if (!this.nombre) {
        this.messages = 'Completar campos requeridos'
        event.preventDefault()
        return
      }

      if (!this.tratamientoDatos) {
        this.messages = 'Completar campos requeridos'
        event.preventDefault()
      }
      this.isSending = true
      // setTimeout(() => {
      //   this.isSending = false
      // }, 2500)
      this.$axios
        .post('http://admin.iconicahouse.com/contactos', {
          nombre: this.nombre,
          email: this.email,
          tratamiento_datos: this.tratamientoDatos,
          mensaje: this.comentarios
        })
        .then((response) => {
          this.submitSuccessfully = true
        })
        .catch((error) => {
          this.submitSuccessfully = false
          this.messages = 'Error!'
        })
        .finally(() => {
          setTimeout(() => {
            this.isSending = false
          }, 2500)
        })
    },
    reset() {
      // Reset our form values
      this.email = null
      this.nombre = null
      this.tratamientoDatos = null
      this.comentarios = null

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
  }
}
</script>

<style lang="scss" src="./FormEstilistas.scss" />
