<template>
  <div>
    <footer>
      <b-container fluid="xl">
        <b-row>
          <b-col md="9">
            <nav class="footer-nav">
              <ul>
                <li>
                  <nuxt-link to="/"><span>inicio</span></nuxt-link>
                  <!-- <nuxt-link v-if="item.is_anchor[0]!= 'yes'" :to="item.link"><span>{{ item.text || "" }}</span></nuxt-link> -->
                </li>
                <li>
                  <nuxt-link to="/servicios"><span>Servicios</span></nuxt-link>
                  <!-- <nuxt-link v-if="item.is_anchor[0]!= 'yes'" :to="item.link"><span>{{ item.text || "" }}</span></nuxt-link> -->
                </li>
                <li>
                  <nuxt-link to="/proyectos"><span>Proyectos</span></nuxt-link>
                  <!-- <nuxt-link v-if="item.is_anchor[0]!= 'yes'" :to="item.link"><span>{{ item.text || "" }}</span></nuxt-link> -->
                </li>
                <li>
                  <nuxt-link to="/nosotros"
                    ><span>quienes somos</span></nuxt-link
                  >
                  <!-- <nuxt-link v-if="item.is_anchor[0]!= 'yes'" :to="item.link"><span>{{ item.text || "" }}</span></nuxt-link> -->
                </li>
                <li>
                  <a @click.prevent="clickEstilistas"><span>contacto</span></a>
                  <!-- <nuxt-link v-if="item.is_anchor[0]!= 'yes'" :to="item.link"><span>{{ item.text || "" }}</span></nuxt-link> -->
                </li>
              </ul>
            </nav>
            <b-row class="legals legals-desktop">
              <b-col>
                <ul>
                  <li>
                    <nuxt-link to="/terminos-y-condiciones"
                      ><span>Terminos y condiciones</span></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/politica-de-privacidad"
                      ><span>Politica de privacidad</span></nuxt-link
                    >
                  </li>
                </ul>
                <p>© 2020 Iconica House. Todos los Derechos Reservados</p>
              </b-col>
            </b-row>
          </b-col>

          <b-col md="3">
            <h4 class="social-title separator-black separator-left">
              Sigamos en contacto
            </h4>
            <ul class="socialList">
              <li
                v-for="(social, index) in data.socials"
                :key="`social${index}`"
              >
                <a :href="social.url" target="_blank">
                  <span v-if="social.red_social === 'facebook'">
                    <v-icon
                      name="brands/facebook-f"
                      :icon="['fab', 'facebook-f']"
                      label="facebook"
                    />
                  </span>
                  <span v-else-if="social.red_social === 'pinterest'">
                    <v-icon
                      name="brands/pinterest-p"
                      :icon="['fab', 'pinterest-p']"
                      label="pinterest"
                    />
                  </span>
                  <span v-else-if="social.red_social === 'snapchat'">
                    <v-icon
                      name="brands/snapchat-ghost"
                      :icon="['fab', 'snapchat-ghost']"
                      label="snapchat"
                    />
                  </span>
                  <span v-else>
                    <v-icon
                      :name="`brands/${social.red_social}`"
                      :icon="['fab', social.red_social]"
                      :label="social.red_social"
                    />
                  </span>
                </a>
              </li>
            </ul>
          </b-col>
        </b-row>

        <b-row class="legals legals-mobile">
          <b-col>
            <ul>
              <li>
                <nuxt-link to="/terminos-y-condiciones"
                  ><span>Terminos y condiciones</span></nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/politica-de-privacidad"
                  ><span>Politica de privacidad</span></nuxt-link
                >
              </li>
            </ul>
            <p>© 2020 Iconica House. Todos los Derechos Reservados</p>
          </b-col>
        </b-row>
      </b-container>
    </footer>
    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.state.siteConfigData
    }
  },
  methods: {
    clickEstilistas() {
      this.menuIsOpen = false
      // this.toggleForm()
      this.$bvModal.show('estilistas-modal')
    }
  }
}
</script>

<style lang="scss" src="./FooterSite.scss" />
