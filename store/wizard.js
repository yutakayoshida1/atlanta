export const state = () => ({
  step: 1,
  // amount of meals, based on this number is created the price, etc + iterations like meal 1, 2, 3...
  amountOfMeals: 5,
  totalCalories: 0,
  totalFat: 0,
  totalCarbs: 0,
  totalProtein: 0,
  addons: [],
  totalPrice: 0,
  pointsToReceive: 0,
  wizardStage: 1,
  selectPreparedMenus: 0,
  breakfastMeals: [],
  snackMeals: [],
  veganBowlMeals: [],
  products: [],
  filteredProducts: [],
  sideDishes: [],
  // helper variable for sharing meal from meals selection view
  actualSelectedMeal: null,
  actualSelectedMealIndex: null,
  actualSelectedDishes: null,
  sideDishFreeSlots: 2,
  filters: [],
  // array that holds meal indexes of which meals were duplicated so we can show the warning icon
  duplicatedMeals: [],
  // array that hold indexes of side dishes that were duplicated
  duplicatedDishes: [],
  refferalCode: 'refCode',
  rewardPoints: 0,
  userEmail: '',
  removeCardId: null,
  mealMenus: null,
})

export const mutations = {
  setStep(state, value) {
    state.step = value
  },
  setMealMenus(state, value) {
    state.mealMenus = value
  },
  setCardId(state, value) {
    state.removeCardId = value
  },
  setRefferalCode(state, value) {
    state.refferalCode = value
  },
  setEmail(state, value) {
    state.userEmail = value
  },
  setRewardPoints(state, value) {
    state.rewardPoints = value
  },
  addToDuplicatedMeals(state, id) {
    state.duplicatedMeals.push(id)
  },
  setFilteredProducts(state, arr) {
    state.filteredProducts = arr
  },
  setMealsCount(state, value) {
    state.amountOfMeals = value
  },
  setFilters(state, value) {
    state.filters = value
  },
  setProducts(state, value) {
    state.products = value
  },
  setSideDishes(state, value) {
    state.sideDishes = value
  },
  setTotalPrice(state, value) {
    state.totalPrice = value
  },
  refreshPrice(state, store) {
    // calculates the meal price
    const mealsPrice = store.getters['getPriceByMealCount'](state.amountOfMeals)

    state.totalPrice = mealsPrice
    // count the portion (if exists) price
    if (store.state.cart.portionIndex !== 0){
      if(store.state.cart.portionIndex === 1)
        state.totalPrice += Number(7.6)
      else if(store.state.cart.portionIndex === 2)
        state.totalPrice += Number(11.4)
    }

    // count the addons
    if (store.state.cart.selectedBreakfast.length > 0)
      state.totalPrice += 10

    if (store.state.cart.selectedSnacks.length > 0)
      state.totalPrice += 10

    if (store.state.cart.selectedVeganBowl.length > 0)
      state.totalPrice += 10

    // refresh points to receive
    state.pointsToReceive = state.totalPrice * 10
  },
  setActualSelectedMeal(state, value) {
    state.actualSelectedMeal = value
  },
  setActualSelectedMealIndex(state, value) {
    state.actualSelectedMealIndex = value
  },
  setActualSideDish(state, dish, index) {
    state.actualSelectedDishes[index] = dish
  },
  addDishCount(state, add) {
    state.actualDishCount = state.actualDishCount + add
  },
  decreaseDishCount(state, decrease) {
    state.actualDishCount = state.actualDishCount - decrease
  },
  setFreeSlots(state, value) {
    state.sideDishFreeSlots = value
  },
  setBreakfastMeals(state, value) {
    state.breakfastMeals = value
  },
  setSnackMeals(state, value) {
    state.snackMeals = value
  },
  setVeganBowlMeals(state, value) {
    state.veganBowlMeals = value
  },
}

export const getters = {
  getProductById: (state) => (productId) => {
    // return the shit
    state.products.forEach((meal) => {
      if (meal.id === productId) {
        return meal
      }
    })
  },
}
