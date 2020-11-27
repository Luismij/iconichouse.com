export const state = () => ({
  siteConfigData: [],
  productsForSlider: [],
  productLightbox: false,
  productLightboxData: [],
  selectedFilter: { name: 'Todos' },
  siteUrl: ''
})

export const actions = {
  async nuxtServerInit({ commit }, { env }) {
    const { data } = await this.$axios.get('/opciones')
    this.state.siteConfigData = data
    // this.state.productsForSlider = data.products
    commit('setSiteUrl', env.siteUrl)
    // console.log(`site url env: ${env.siteUrl}`)
  }
}

export const mutations = {
  toggleLightbox(state, data) {
    state.productLightbox = !state.productLightbox
    state.productLightboxData = data
  },
  changeFilter(state, data) {
    state.selectedFilter = data
  },
  setSiteUrl(state, data) {
    state.siteUrl = data
  }
}
