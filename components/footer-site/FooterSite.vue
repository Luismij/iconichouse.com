<template>
  <div>

    <footer>
      <b-container fluid="xl">
        <b-row>

          <b-col md="9">
              <nav class="footer-nav">
                <ul>
                  <li >
                    <nuxt-link  to="/"><span>inicio</span></nuxt-link>
                    <!-- <nuxt-link v-if="item.is_anchor[0]!= 'yes'" :to="item.link"><span>{{ item.text || "" }}</span></nuxt-link> -->
                  </li>
                                    <li >
                    <nuxt-link  to="/modelos"><span>modelos</span></nuxt-link>
                    <!-- <nuxt-link v-if="item.is_anchor[0]!= 'yes'" :to="item.link"><span>{{ item.text || "" }}</span></nuxt-link> -->
                  </li>
                                    <li >
                    <nuxt-link  to="/rooms"><span>rooms</span></nuxt-link>
                    <!-- <nuxt-link v-if="item.is_anchor[0]!= 'yes'" :to="item.link"><span>{{ item.text || "" }}</span></nuxt-link> -->
                  </li>
                                    <li >
                    <nuxt-link  to="/nosotros"><span>quienes somos</span></nuxt-link>
                    <!-- <nuxt-link v-if="item.is_anchor[0]!= 'yes'" :to="item.link"><span>{{ item.text || "" }}</span></nuxt-link> -->
                  </li>
                                    <li >
                    <a  href=""><span>contacto</span></a>
                    <!-- <nuxt-link v-if="item.is_anchor[0]!= 'yes'" :to="item.link"><span>{{ item.text || "" }}</span></nuxt-link> -->
                  </li>
                </ul>
              </nav>
              <b-row class="legals legals-desktop">
                <b-col>
                  <ul>
                    <li>
                      <nuxt-link to="/terms-and-conditions"><span>Terminos y condiciones</span></nuxt-link>
                    </li>
                     <li>
                      <nuxt-link to="/privacy-policy"><span>Politica de privacidad</span></nuxt-link>
                    </li>
                  </ul>
                <p>© 2020  Iconica House.  Todos los Derechos Reservados</p>
              </b-col>
            </b-row>
          </b-col>


          <!-- <b-col md="3" >
            <h4 class="social-title separator-black separator-left">Sigamos en contacto</h4>
            <ul class="socialList">
              <li v-for="(social, index) in data.social_icons" :key="`social${index}`">
                <a :href="social.link" target="_blank">
                  <span v-if="social.name === 'facebook'">
                    <v-icon name="brands/facebook-f" :icon="['fab', 'facebook-f']" label="facebook"/>
                  </span>
                  <span v-else-if="social.name === 'pinterest'">
                    <v-icon name="brands/pinterest-p" :icon="['fab', 'pinterest-p']" label="pinterest" />
                  </span>
                  <span v-else-if="social.name === 'snapchat'">
                    <v-icon name="brands/snapchat-ghost" :icon="['fab', 'snapchat-ghost']" label="snapchat"/>
                  </span>
                  <span v-else>
                    <v-icon :name="`brands/${social.name}`" :icon="['fab', social.name]" :label="social.name"/>
                  </span>
                </a>
              </li>
            </ul>
          </b-col> -->

        </b-row>

        <b-row class="legals legals-mobile">
             <b-col>
                  <ul>
                    <li>
                      <nuxt-link to="/terms-and-conditions"><span>Terminos y condiciones</span></nuxt-link>
                    </li>
                     <li>
                      <nuxt-link to="/privacy-policy"><span>Politica de privacidad</span></nuxt-link>
                    </li>
                  </ul>
                <p>© 2020  Iconica House.  Todos los Derechos Reservados</p>
              </b-col>
<!-- 
          <b-col md="auto">
            <nuxt-link to="/">
              <h1>
                <img :src="data.logo_footer.url" :alt="data.brand_content" />
              </h1>
            </nuxt-link>
          </b-col> -->

        </b-row>

      </b-container>
    </footer>
    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>

<script>
export default {
  methods: {
    clickEstilistas() {
      this.menuIsOpen = false
      // this.toggleForm()
      this.$bvModal.show('estilistas-modal')
    }
  },
  computed: {
    data() {
      return this.$store.state.siteConfigData
    }
  }
}
</script>

<style lang="scss" src="./FooterSite.scss" />
