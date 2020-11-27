<template>
<transition name="fade" v-if="isOpen">
  <div class="search-lightbox" :class="{ 'is-open' : isOpen}">
    <div class="search-lightbox-overlay" @click="closeSearch()" />

    <div class="search-ligthbox-content">
      <div @click="closeSearch()" class="search-ligthbox-close">
        <img src="~/static/images/lightbox-close.svg" alt />
      </div>
      <div class="search-lightbox-title">Buscar</div>
      <form no-validate class="search-form" @submit.prevent="submitSearch">

        <div class="form-group">
          <input ref="inputsearch" type="text" v-model="searchParams">
        </div>
        <a class="btn-outline" href="#" @click.prevent="submitSearch">
          <span>
            Enviar
          </span>
        </a>
      </form>
    </div>
  </div>



  </div>
</transition>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      searchParams: null
    }
  },
  computed: {
    ...mapState('search',['isOpen']),
  },
  watch: {
    isOpen(newValue, oldValue) {
      const el = document.body;
      if (newValue===true) {
        el.classList.add('search-open');
        this.$nextTick(() => this.$refs.inputsearch.focus())
      }else{
        el.classList.remove('search-open');
      }
    },
  },
  methods: {
    ...mapMutations({
      toggleSearch: 'search/toggle',
      closeSearch: 'search/close'
    }),
    submitSearch() {
      if (this.searchParams) {
        this.$router.push({
          // path: '/search',
          path: `/search/${this.searchParams}`,
          // query: {
            // s: this.searchParams
          // }
        })
        this.searchParams = null
        //

        this.$gtm.push({
          event: 'Palabras Buscadas',
          label: this.searchParams
        })
        // this.closeSearch()
        this.$nextTick(() => this.closeSearch())
      }
    }
  }
}
</script>

<style lang="scss" src="./Search.scss" />
