// state
export const state = () => ({
  mealFilters: [],
  sideDishesFilters: [],
  breakfastFilters: [],
  snackFilters: [],
})

// mutations
export const mutations = {
  setMealFilters(state, value) {
    state.mealFilters = value
  },
  setDishesFilters(state, value) {
    state.sideDishesFilters = value
  },
  setBreakfastFilters(state, value) {
    state.breakfastFilters = value
  },
  setSnackFilters(state, value) {
    state.snackFilters = value
  },
}
