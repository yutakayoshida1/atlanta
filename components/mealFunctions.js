// function that gets the product object by its ID
import {state} from "@/store/filters";

export function getProductById(store, mealId) {
  const products = store.state.wizard.products
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === mealId) {
      return products[i]
    }
  }
}

// helper function that check if some array has filters
export function checkIfContains(values, compareWith) {
  if (compareWith == null)
    return false

  let iterator = Object.keys(values)
  for (const key in iterator) {
    if (typeof values[iterator[key]] !== 'undefined') {
      if (compareWith.includes(values[iterator[key]].key)) {
        if (values[iterator[key]].state) {
          return true
        }
      }
    }
  }
  return false
}

// function that gets the product object by the index
export function getProductByIndex(store, mealIndex) {
  const products = store.state.cart.selectedMeals
  for (let i = 0; i < products.length; i++) {
    if (i === mealIndex - 1) return products[i]
  }
}

// function that gets the product object by the index
export function getSideDishByIndex(store, mealIndex) {
  const products = store.state.wizard.sideDishes
  for (let i = 0; i < products.length; i++) {
    if (i === mealIndex - 1) return products[i]
  }
}

// function that checks if the meal is selected
export function checkIfMealIsSelected(store, mealIndex) {
  if (
    typeof store.state.cart.selectedMeals[mealIndex - 1] !== 'undefined' &&
    store.state.cart.selectedMeals[mealIndex - 1] != null
  )
    return true
  else return false
}

export function checkIfMealIsDone(store, mealIndex) {
  if (
    typeof store.state.cart.selectedMeals[mealIndex - 1] !== 'undefined' &&
    store.state.cart.selectedMeals[mealIndex - 1] != null
  ) {
    // check the side dishes
    if (typeof store.state.cart.selectedDishes[mealIndex - 1] !== 'undefined') {
      let counter = 0
      for (
        let i = 0;
        i < store.state.cart.selectedDishes[mealIndex - 1].length;
        i++
      ) {
        if (store.state.cart.selectedDishes[mealIndex - 1][i].length !== 0) {
          counter++
        }
      }
      if (counter === 2) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else return false
}

// function that adds dish into cart
export function addSelectedDish(store, dish, index, mealIndex) {
  // add the dish if there is a place for it.
  const values = []
  values.sideDish = dish
  values.nbr = index
  values.mealIndex = mealIndex
  // after the commit
  store.commit('cart/selectSideDish', values)
  store.commit('wizard/addDishCount', 1)
  return true
}

// function that will remove the side dish
export function removeSelectedDish(store, index, mealIndex) {
  const values = []
  values.nbr = index
  values.mealIndex = mealIndex
  store.commit('cart/removeSideDish', values)
  store.commit('wizard/decreaseDishCount', 1)
  return true
}

// function

// function that returns dish count based on index
export function getDishesByIndexAndMealId(store, index, mealId) {
  const returnArray = []
  if (typeof store.state.cart.selectedDishes[index] !== 'undefined') {
    for (let i = 0; i < store.state.cart.selectedDishes[index].length; i++) {
      if (store.state.cart.selectedDishes[index][i] !== 'undefined') {
        if (store.state.cart.selectedDishes[index][i].id === mealId) {
          // we got the product
          returnArray[i] = store.state.cart.selectedDishes[index][i]
        }
      }
    }
  }
  return returnArray
}

// method that gets how many breakfast are selected with the certain id
export function getBreakfastCount(store, breakfastId) {
  let returnCount = 0
  for (let i = 0; i < store.state.cart.selectedBreakfast.length; i++) {
    // loop through the breakfast count
    if (store.state.cart.selectedBreakfast[i].id !== 'undefined') {
      if (store.state.cart.selectedBreakfast[i].id === breakfastId)
        returnCount++
    }
  }

  return returnCount
}

// method get all meals by index
export function getAllMealsByIndex(store, index) {
  let arrCounter = 0
  const returnArray = []
  if (typeof store.state.cart.selectedDishes[index] !== 'undefined') {
    for (let i = 0; i < store.state.cart.selectedDishes[index].length; i++) {
      if (typeof store.state.cart.selectedDishes[index][i] !== 'undefined') {
        if (
          typeof store.state.cart.selectedDishes[index][i].id !== 'undefined'
        ) {
          returnArray[arrCounter] = store.state.cart.selectedDishes[index][i]
          arrCounter++
        }
      }
    }
  }
  return returnArray
}

// function that returns remaining the free dishes
export function getFreeIndexes(store, index) {
  let freeCount = 2
  if (typeof store.state.cart.selectedDishes[index] !== 'undefined') {
    for (let i = 0; i < store.state.cart.selectedDishes[index].length; i++) {
      if (typeof store.state.cart.selectedDishes[index][i] !== 'undefined') {
        if (typeof store.state.cart.selectedDishes[index][i].id !== 'undefined')
          freeCount--
      }
    }
  }
  return freeCount
}

// check if the side meal is selected
export function checkIfSideDishIsSelected(store, id, index) {
  let counter = 0
  for (let i = 0; i < store.state.cart.selectedDishes[index].length; i++) {
    if (typeof store.state.cart.selectedDishes[index].id !== 'undefined') {
      if (store.state.cart.selectedDishes[index].id === id) {
        counter++
      }
    }
  }
  return counter
}

export function changePortionSize(store, index) {
  // send it to the store
  store.commit('cart/selectPortionSize', index)
  // calculate the price
  store.commit('wizard/refreshPrice', store)
}

// method that gets the price of all breakfasts items
export function getBreakfastItemsTotalPrice(store) {
  return store.state.cart.selectedBreakfast.length * store.state.priceOfEachMeal
}

// method that removes breakfast by ID
export function removeBreakfastById(store, id) {}

// functionts related to the values of the meals
export function getWholeMealCalories(store, mealIndex) {
  if (typeof store.state.cart.selectedMeals[mealIndex] !== 'undefined') {
    let calories = Number(store.state.cart.selectedMeals[mealIndex].calories)
    for (
      let i = 0;
      i < store.state.cart.selectedDishes[mealIndex].length;
      i++
    ) {
      if (
        typeof store.state.cart.selectedDishes[mealIndex][i] !== 'undefined'
      ) {
        if (
          typeof store.state.cart.selectedDishes[mealIndex][i].calories !==
          'undefined'
        )
          calories += Number(
            store.state.cart.selectedDishes[mealIndex][i].calories
          )
      }
    }

    return calories
  }
}

// functionts related to the values of the meals
export function getWholeMealFat(store, mealIndex) {
  if (typeof store.state.cart.selectedMeals[mealIndex] !== 'undefined') {
    let fat = Number(store.state.cart.selectedMeals[mealIndex].fat)
    for (
      let i = 0;
      i < store.state.cart.selectedDishes[mealIndex].length;
      i++
    ) {
      if (
        typeof store.state.cart.selectedDishes[mealIndex][i] !== 'undefined'
      ) {
        if (
          typeof store.state.cart.selectedDishes[mealIndex][i].fat !==
          'undefined'
        )
          fat += Number(store.state.cart.selectedDishes[mealIndex][i].fat)
      }
    }

    return fat
  }
}

// functionts related to the values of the meals
export function getWholeMealCarbs(store, mealIndex) {
  if (typeof store.state.cart.selectedMeals[mealIndex] !== 'undefined') {
    let carbs = Number(store.state.cart.selectedMeals[mealIndex].carbs)
    for (
      let i = 0;
      i < store.state.cart.selectedDishes[mealIndex].length;
      i++
    ) {
      if (
        typeof store.state.cart.selectedDishes[mealIndex][i] !== 'undefined'
      ) {
        if (
          typeof store.state.cart.selectedDishes[mealIndex][i].carbs !==
          'undefined'
        )
          carbs += Number(store.state.cart.selectedDishes[mealIndex][i].carbs)
      }
    }

    return carbs
  }
}

// functionts related to the values of the meals
export function getWholeMealProtein(store, mealIndex) {
  if (typeof store.state.cart.selectedMeals[mealIndex] !== 'undefined') {
    let protein = Number(store.state.cart.selectedMeals[mealIndex].protein)
    for (
      let i = 0;
      i < store.state.cart.selectedDishes[mealIndex].length;
      i++
    ) {
      if (typeof store.state.cart.selectedDishes[mealIndex][i] !== 'undefined')
        if (
          typeof store.state.cart.selectedDishes[mealIndex][i].protein !==
          'undefined'
        )
          protein += Number(
            store.state.cart.selectedDishes[mealIndex][i].protein
          )
    }

    return protein
  }
}

/*
  Section with functions for breakfast
*/
export function getWholeBreakfastProtein(store, breakfastIndex) {
  let protein = 0
  if (typeof store.state.cart.selectedBreakfast[breakfastIndex] !== 'undefined')
    protein += Number(
      store.state.cart.selectedBreakfast[breakfastIndex].protein
    )
  return protein
}

export function getWholeBreakfastCarbs(store, breakfastIndex) {
  let carbs = 0
  if (typeof store.state.cart.selectedBreakfast[breakfastIndex] !== 'undefined')
    carbs += Number(store.state.cart.selectedBreakfast[breakfastIndex].carbs)
  return carbs
}

export function getWholeBreakfastFat(store, breakfastIndex) {
  let fat = 0
  if (typeof store.state.cart.selectedBreakfast[breakfastIndex] !== 'undefined')
    fat += Number(store.state.cart.selectedBreakfast[breakfastIndex].fat)
  return fat
}

export function getWholeBreakfastCalories(store, breakfastIndex) {
  let calories = 0
  if (typeof store.state.cart.selectedBreakfast[breakfastIndex] !== 'undefined')
    calories += Number(
      store.state.cart.selectedBreakfast[breakfastIndex].calories
    )
  return calories
}

// function that returns the cout of all
export function getMealsCount(store) {
  // loop through it
  let counter = 0
  for (let i = 0; i < store.state.cart.selectedMeals.length; i++) {
    if (typeof store.state.cart.selectedMeals[i] !== 'undefined') {
      counter++
    }
  }
  return counter
}

export function getVeganBowlInOneItem(store) {
  const veganBowl = new Object()
  let counter = 0
  for (let i = 0; i < store.state.cart.selectedVeganBowl.length; i++) {
    if (typeof store.state.cart.selectedVeganBowl[i] !== 'undefined') {
      // add the name
      if (counter === 0) {

        veganBowl.name = store.state.cart.selectedVeganBowl[i].name

        veganBowl.protein = Number(
          store.state.cart.selectedVeganBowl[i].protein
        )
        veganBowl.carbs = Number(store.state.cart.selectedVeganBowl[i].carbs)
        veganBowl.fat = Number(store.state.cart.selectedVeganBowl[i].fat)
        veganBowl.calories = Number(
          store.state.cart.selectedVeganBowl[i].calories
        )
      } else {
        veganBowl.name += ' &' + store.state.cart.selectedVeganBowl[i].name

        veganBowl.protein += Number(
          store.state.cart.selectedVeganBowl[i].protein
        )
        veganBowl.carbs += Number(store.state.cart.selectedVeganBowl[i].carbs)
        veganBowl.fat += Number(store.state.cart.selectedVeganBowl[i].fat)
        veganBowl.calories += Number(
          store.state.cart.selectedVeganBowl[i].calories
        )
      }
      counter++
    }
  }

  return veganBowl
}

export function getWholeBreakfastValues(store) {
  let breakfast = new Object
  breakfast.calories = 0
  breakfast.fat = 0
  breakfast.carbs = 0
  breakfast.protein = 0

  if (typeof store.state.cart.selectedBreakfast !== 'undefined') {
    for (let i = 0; i < store.state.cart.selectedBreakfast.length; i++) {
      // loop throught the breakfast items
      if (typeof store.state.cart.selectedBreakfast[i]) {
        breakfast.calories += Number(store.state.cart.selectedBreakfast[i].calories)
        breakfast.fat += Number(store.state.cart.selectedBreakfast[i].fat)
        breakfast.carbs += Number(store.state.cart.selectedBreakfast[i].carbs)
        breakfast.protein += Number(store.state.cart.selectedBreakfast[i].protein)
      }
    }
  }

  return breakfast
}

export function getWholeSnackValues(store) {
  let snack = new Object
  snack.calories = 0
  snack.fat = 0
  snack.carbs = 0
  snack.protein = 0

  if (typeof store.state.cart.selectedSnacks !== 'undefined') {
    for (let i = 0; i < store.state.cart.selectedSnacks.length; i++) {
      // loop throught the breakfast items
      if (typeof store.state.cart.selectedSnacks[i]) {
        snack.calories += Number(store.state.cart.selectedSnacks[i].calories)
        snack.fat += Number(store.state.cart.selectedSnacks[i].fat)
        snack.carbs += Number(store.state.cart.selectedSnacks[i].carbs)
        snack.protein += Number(store.state.cart.selectedSnacks[i].protein)
      }
    }
  }

  return snack
}

export function sortArray(arrayToSort, sortType) {
  let sortedArray = []

  switch (sortType) {
    case 'Less calories':
      sortedArray = arrayToSort.sort((a, b) =>
        a.calories > b.calories ? 1 : -1
      )
      break

    case 'More calories':
      sortedArray = arrayToSort.sort((a, b) =>
        a.calories < b.calories ? 1 : -1
      )
      break

    case 'Lower price':
      sortedArray = arrayToSort.sort((a, b) =>
        a.additional_price > b.additional_price ? 1 : -1
      )
      break

    case 'Higher price':
      sortedArray = arrayToSort.sort((a, b) =>
        a.additional_price < b.additional_price ? 1 : -1
      )
      break

    case null:
      sortedArray = arrayToSort
      break
  }

  return sortedArray
}

// function that deletes the whole meal selection
export function deleteMealMenu(store) {
  // clear the meals and dishes
  store.commit('cart/setExplicitDishes')
  store.commit('cart/setExplicitMeals')
  // regenerate the meals and dishes
  store.commit('cart/generateSideDishes', store.state.wizard.amountOfMeals)
  store.commit('cart/generateMealItems', store.state.wizard.amountOfMeals)
}

export function setGlobalFilters(filters, store) {
  // eslint-disable-next-line prefer-const
  let mlFilter = {}
  let sdFilter = {}
  let brFilter = {}
  let snFilter = {}
  filters.forEach(function (elm) {
    mlFilter[elm] = { key: elm, state: true }
    sdFilter[elm] = { key: elm, state: true }
    brFilter[elm] = { key: elm, state: true }
    snFilter[elm] = { key: elm, state: true }
  })
  store.commit('filters/setMealFilters', mlFilter)
  store.commit('filters/setBreakfastFilters', brFilter)
  store.commit('filters/setSnackFilters', snFilter)
  store.commit('filters/setDishesFilters', sdFilter)
}
