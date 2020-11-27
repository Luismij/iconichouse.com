export const state = () => ({
  showPlayer: false,
  id: null
})

export const mutations = {
  show (state, id) {
    state.id = id
    state.showPlayer = true
  },
  close (state) {
    state.showPlayer = false
    state.id = null
  }
}
