<template>
  <header>
    <b-container fluid>
      <div class="nav-container">
        <nav class="logo-nav">
          <a
            href="#"
            class="btn-menu"
            :class="[menuIsOpen ? 'open' : '']"
            @click.prevent="clickMenu"
          >
            <img
              class="icon icon-menu"
              src="~static/images/icon-menu.svg"
              alt="buscar"
              width="25px"
              height="25px"
            />
            <img
              class="icon icon-close"
              src="~static/images/lightbox-close.svg"
              alt="cerrar"
              width="25px"
              height="25px"
            />
          </a>
          <nuxt-link to="/">
            <h1>
              <img
                class="logo"
                :src="`https://admin.iconicahouse.com${data.logo.url}`"
                alt="iconica_house"
              />
            </h1>
          </nuxt-link>
          <nuxt-link :to="{ path: '/', hash: '#salones' }" class="btn-map">
            <img
              class="icon icon-salones"
              src="~static/images/icon-salones.svg"
              alt="salones"
            />
          </nuxt-link>
        </nav>
        <nav class="main-nav" :class="[menuIsOpen ? 'open' : 'closed']">
          <ul>
            <li>
              <nuxt-link
                :to="`/${this.$store.state.siteConfigData.section_title_2}`"
                ><span>{{
                  this.$store.state.siteConfigData.section_title_2 || ''
                }}</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="`/${this.$store.state.siteConfigData.section_title_1}`"
                ><span>{{
                  this.$store.state.siteConfigData.section_title_1 || ''
                }}</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/nosotros" class="itemToHide"
                ><span>Nosotros</span>
              </nuxt-link>
            </li>
            <li>
              <a href="" class="itemToHide" @click.prevent="clickEstilistas"
                ><span>Contacto</span>
              </a>
            </li>
          </ul>
          <div class="text-center mb-3 d-md-none">
            © 2020 Iconica House. All Rights Reserved
          </div>
        </nav>
        <nav class="last-nav">
          <ul>
            <li>
              <nuxt-link to="/nosotros" class="itemToHide"
                ><span>Nosotros</span>
              </nuxt-link>
            </li>
            <li>
              <a href="" class="itemToHide" @click.prevent="clickEstilistas"
                ><span>Contacto</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </b-container>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      menuIsOpen: false
    }
  },
  computed: {
    data() {
      return this.$store.state.siteConfigData
    }
  },
  watch: {
    $route() {
      const body = document.getElementsByTagName('body')[0]
      this.menuIsOpen = false
      body.classList.remove('overflow')
      this.closeSearch()
    }
  },
  methods: {
    clickMenu() {
      this.menuIsOpen = !this.menuIsOpen

      const body = document.getElementsByTagName('body')[0]
      if (this.menuIsOpen) {
        body.classList.add('overflow')
      } else {
        body.classList.remove('overflow')
      }
    },
    clickSearchMobile() {
      this.menuIsOpen = false
      this.toggleSearch()
    },
    clickEstilistas() {
      this.menuIsOpen = false
      this.toggleForm()
      this.$bvModal.show('estilistas-modal')
    },
    ...mapMutations({
      toggleSearch: 'search/toggle',
      toggleForm: 'form/toggle',
      closeSearch: 'search/close',
      closeForm: 'form/close'
    })
  }
}
</script>

<style lang="scss" src="./HeaderSite.scss" />
