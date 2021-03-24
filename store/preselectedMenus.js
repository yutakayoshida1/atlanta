export const state = () => ({
  selectedMenu: null,
})

export const mutations = {
  setSelectedMenu(state, value) {
    state.selectedMenu = value
  },
}
