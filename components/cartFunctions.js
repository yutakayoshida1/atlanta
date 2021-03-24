// method that checks if the cart is empty or not
export function isCartEmpty(store) {
  let cartEmpty = true

  // check the meals
  for (let i = 0; i < store.state.cart.selectedMeals.length; i++) {
    if (typeof store.state.cart.selectedMeals[i] !== 'undefined') {
      cartEmpty = false
    }
  }

  return cartEmpty
}

// check if the order is ready to be placed
export function isReadyToBePlacedOrder(store) {
  let setMeals = 0
  // if the meals are selected
  for (let i = 0; i < store.state.cart.selectedMeals.length; i++) {
    // check if every meal is not undefined
    if (typeof store.state.cart.selectedMeals[i] !== 'undefined')
      setMeals++
  }

  if (setMeals !== store.state.wizard.amountOfMeals) {
    return false
  }

  let setDishes = 0
  // check if the side dishes are selected
  for (let i = 0; i < store.state.cart.selectedDishes.length; i++) {
    if (typeof store.state.cart.selectedDishes[i] !== 'undefined') {
      // loop through the shit
      if (typeof store.state.cart.selectedDishes[i][0] !== 'undefined' && typeof store.state.cart.selectedDishes[i][1] !== 'undefined') {
        setDishes++
      }
    } else {
      return false
    }
  }

  if (setDishes === store.state.cart.selectedDishes.length) {
    return true
  } else {
    return false
  }
}

// todo function that gets total meal price
export function getTotalMealPrice(store, includeAdditionalPrice = false) {
  let totalPrice = 0
  if (typeof store.state.cart.selectedMeals !== 'undefined') {
    // loop through it
    for (let i = 0; i < store.state.wizard.amountOfMeals; i++) {

      if (typeof store.state.cart.selectedMeals[i] !== 'undefined') {
        // add the price to the total price
        totalPrice += Number(store.state.priceOfEachMeal)

        if (
          includeAdditionalPrice &&
          store.state.cart.selectedMeals[i].additional_price != 0
        )
          totalPrice += Number(
            store.state.cart.selectedMeals[i].additional_price
          )
      }
    }
  }
  return totalPrice
}

// todo function that gets total price of breakfast
export function getTotalBreakfastPrice(store) {
  let totalPrice = store.state.breakfastPrice

  // todo loop through the bowls so you can check out the additional prices
  if (store.state.cart.selectedBreakfast.length > 0) {
    for (let i = 0; i < store.state.cart.selectedBreakfast; i++) {
      if (typeof store.state.cart.selectedBreakfast[i] !== 'undefined' && store.state.cart.selectedBreakfast[i].additional_price !== 0) {
        totalPrice += Number(
          store.state.cart.selectedBreakfast[i].additional_price
        )
      }
    }
  }

  return totalPrice
}

// todo function that gets total price of breakfast
export function getSnackPrice(store) {
  let totalPrice = store.state.snackPrice

  // todo loop through the bowls so you can check out the additional prices
  if (store.state.cart.selectedSnacks.length > 0) {
    for (let i = 0; i < store.state.cart.selectedSnacks; i++) {
      if (typeof store.state.cart.selectedSnacks[i] !== 'undefined' && store.state.cart.selectedSnacks[i].additional_price !== 0) {
        totalPrice += Number(
          store.state.cart.selectedSnacks[i].additional_price
        )
      }
    }
  }

  return totalPrice
}

// todo function that gets total price of breakfast
export function getVeganBowlPrice(store) {
  let totalPrice = store.state.veganBowlPrice

  // todo loop through the bowls so you can check out the additional prices
  if (store.state.cart.selectedVeganBowl.length > 0) {
    for (let i = 0; i < store.state.cart.selectedVeganBowl; i++) {
      if (typeof store.state.cart.selectedVeganBowl[i] !== 'undefined' && store.state.cart.selectedVeganBowl[i].additional_price !== 0) {
        totalPrice += Number(
          store.state.cart.selectedVeganBowl[i].additional_price
        )
      }
    }
  }

  return totalPrice
}
