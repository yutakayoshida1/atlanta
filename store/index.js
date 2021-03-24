export const state = () => ({
  logedIn: false,
  priceOfEachMeal: 10,
  quantitySales: [],
  breakfastPrice: 10,
  snackPrice: 10,
  veganBowlPrice: 10,
  token: null,
})

export const mutations = {
  setLogedIn(state, value) {
    state.logedIn = value
  },
  setPriceAndSales(state, object) {
    state.priceOfEachMeal = object.price_of_each_item
    state.quantitySales = object.sales
  },
  setJwt(state, value) {
    state.token = value
  },
}

export const getters = {
  getPriceByMealCount: (state) => (mealsCount) => {
    // todo, check if there is a sale price
    return state.priceOfEachMeal * mealsCount
  },
}
