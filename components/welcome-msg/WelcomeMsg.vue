<template>
  <div class="msg-container container">
    <div class="msg-container__header">
      <img class="logo" :src="data.logo" :alt="data.brand_content || ''" />
      <div @click.prevent="clickClose">
        <img
          class="icon icon-close"
          src="~static/images/lightbox-close.svg"
          alt="cerrar"
        />
      </div>
    </div>
    <hr class="msg__hr" />
    <div class="msg-container__main">
      <h2>Te damos la bienvenida</h2>
      <h4>
        Este es solo el comienzo para lograr resultados increíbles en tu
        cabello.
      </h4>
      <p class="my-3">
        Mantente pendiente a las novedades, consejos e inspiración que te
        estaremos enviando.
      </p>
      <nuxt-link to="/" class="btn-outline my-2">
        Visita Kérastase
      </nuxt-link>
    </div>
    <hr class="msg__hr" />
    <div class="msg-container__footer">
      <div class="footer__social">
        <span>EN LAS REDES SOCIALES</span>
        <div>
          <ul class="social-list">
            <li
              v-for="(social, index) in data.social_icons"
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
        <div class=" mt-auto" v-html="data.copyright_text"></div>
      </div>
      <img
        src="~/static/images/welcom-msg__footer.png"
        alt="kerastase-brown-light"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'WelcomeMsg',
  computed: {
    data() {
      return this.$store.state.siteConfigData
    }
  },
  methods: {
    clickClose() {
      this.$emit('closeMsg')
    }
  }
}
</script>
<style lang="scss" src="./WelcomeMsg.scss" scoped />
