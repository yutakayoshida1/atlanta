export const state = () => ({
  selectedMeals: [],
  selectedDishes: [],
  portionIndex: 0,
  selectedBreakfast: [],
  selectedSnacks: [],
  selectedVeganBowl: [],
})

export const mutations = {
  setExplicitMeals(state){
    state.selectedMeals = []
  },
  setExplicitDishes(state){
    state.selectedDishes = []
  },
  // method that generates the meal items
  generateMealItems(state, mealCount) {
    let newMealsArray = []
    for (let i = 0; i < mealCount; i++) {
      // set up the meals for each count
      if (typeof state.selectedMeals[i] === 'undefined') {
        // create new empty object
        newMealsArray[i] = undefined
      } else {
        newMealsArray[i] = state.selectedMeals[i]
      }
    }

    state.selectedMeals = newMealsArray
  },
  // method that generates side dishes
  generateSideDishes(state, dishCount) {
    let dishesArray = []
    for (let i = 0; i < dishCount; i++) {
      if (typeof state.selectedDishes[i] === 'undefined') {
        dishesArray[i] = [[], []]
      } else {
        dishesArray[i] = state.selectedDishes[i]
      }
    }

    state.selectedDishes = dishesArray
  },
  // method that sets the meal object to the cart
  selectMeal(state, values) {
    state.selectedMeals[values.mealNbr - 1] = values.mealProduct
  },

  // method that sets the side dish
  selectSideDish(state, values) {
    state.selectedDishes[values['mealIndex']][values['nbr']] = values['sideDish']
  },
  removeSideDish(state, values) {
    state.selectedDishes[values['mealIndex'] - 1][values['nbr']] = []
  },
  addSelectedDish(state, dish, index) {
    state.selectedDishes[index] = dish
    // returns false
    return true;
  },
  // set the portion size
  selectPortionSize(state, portionValue){
    state.portionIndex = portionValue
  },
  // method that sets the selected breakfast, it does work with 2 items
  setBreakfastItem(state, breakfast) {
    state.selectedBreakfast[breakfast.index] = breakfast.data
  },
  removeBreakfast(state, id) {
    for(let i = 0; i < state.selectedBreakfast.length; i++) {
      if (typeof state.selectedBreakfast[i] !== 'undefined') {
        if (state.selectedBreakfast[i].id === id) {
          delete(state.selectedBreakfast[i])
          let rebasedArr = []
          // reset the array
          for(let a = 0; a < state.selectedBreakfast.length; a++) {
            if (typeof state.selectedBreakfast[a] !== 'undefined') {
              rebasedArr.push(state.selectedBreakfast[a])
            }
          }
          // reasign the array
          state.selectedBreakfast = rebasedArr
        }
      }
    }
  },
  // snacks
  setSnackItem(state, snack) {
    state.selectedSnacks[snack.index] = snack.data
  },
  removeSnack(state, id) {
    for(let i = 0; i < state.selectedSnacks.length; i++) {
      if (typeof state.selectedSnacks[i] !== 'undefined') {
        if (state.selectedSnacks[i].id === id) {
          delete(state.selectedSnacks[i])
          let rebasedArr = []
          // reset the array
          for(let a = 0; a < state.selectedSnacks.length; a++) {
            if (typeof state.selectedSnacks[a] !== 'undefined') {
              rebasedArr.push(state.selectedSnacks[a])
            }
          }
          // reasign the array
          state.selectedSnacks = rebasedArr
        }
      }
    }
  },
  setVeganBowlItem(state, veganBowl){
    state.selectedVeganBowl[veganBowl.index] = veganBowl.data
  },
  removeVeganBowl(state, id) {
    for(let i = 0; i < state.selectedVeganBowl.length; i++) {
      if (typeof state.selectedVeganBowl[i] !== 'undefined') {
        if (state.selectedVeganBowl[i].id === id) {
          delete(state.selectedVeganBowl[i])
          let rebasedArr = []
          // reset the array
          for(let a = 0; a < state.selectedVeganBowl.length; a++) {
            if (typeof state.selectedVeganBowl[a] !== 'undefined') {
              rebasedArr.push(state.selectedVeganBowl[a])
            }
          }
          // reasign the array
          state.selectedVeganBowl = rebasedArr
          break;
        }
      }
    }
  },
}
