// function that logins the customer from the login page
export async function login(email, password, axios, store) {
  // call the axios
  const request = await axios.$post(
    store.state.apiConfiguration.baseUrl +
      store.state.apiConfiguration.urlLogin,
    {
      email,
      password,
      mode: store.state.apiConfiguration.loginMode,
    }
  )

  if (request.data.user.status === 'active') {
    store.commit('setLogedIn', true)
    return true
  } else {
    return false
  }
}

// function that logs the
export async function loginAndGetJwt(email, password, axios, store) {
  // call the axios
  const request = await axios.$post(
    store.state.apiConfiguration.baseUrl +
      store.state.apiConfiguration.urlLogin,
    {
      email,
      password,
    }
  )

  if (request.data.user.status === 'active') {
    console.log(request.data.token)
    store.commit('setJwt', request.data.token)
    store.commit('setLogedIn', true)
    return true
  } else {
    return false
  }
}

// function that calls URL and also checks the JWT
export async function callUrlWithJwt(axios, store, url, method, body = null) {
  // check the JWT toke
  if (store.state.token !== null) {
    if (body == null) {
      body = {}
      body.jwt = store.state.token
    } else {
      body.jwt = store.state.token
    }

    let result = ''

    if (method === 'POST') {
      // GET CALL
      result = await axios.$post(url, body)
    }

    return result
  }
}

// function that loads the cart ID
export async function createOrLoadCart(axios, store) {
  // check the local storage for the items
  if (localStorage.getItem('cartId') != null) {
    // check the date
    const cartTimestamp = localStorage.getItem('cartTimestamp')
    const date = new Date()
    const dayPlus = date.setDate(date.getDate() + 1)

    if (dayPlus <= cartTimestamp) {
      // generate new token
      const cartId = await axios.$get(
        store.state.apiConfiguration.baseUrl +
          store.state.apiConfiguration.getCartId
      )
      // set local storage item
      localStorage.setItem('cartId', cartId.id)
      // set the todays date
      localStorage.setItem('cartTimestamp', new Date().getTime())
    }
  } else {
    // create it
    const cartId = await axios.$get(
      store.state.apiConfiguration.baseUrl +
        store.state.apiConfiguration.getCartId
    )
    // set local storage item
    localStorage.setItem('cartId', cartId.id)
    // set the todays date
    localStorage.setItem('cartTimestamp', new Date().getTime())
  }
}

// method that saves the actual cart content into the database
export async function saveCartContent(axios, store) {
  let uuid = localStorage.getItem('cartId')

  let response = await axios.$post(
    store.state.apiConfiguration.baseUrl +
      store.state.apiConfiguration.saveCartContent,
    {
      cartObject: {
        meals: store.state.cart.selectedMeals,
        dishes: store.state.cart.selectedDishes,
        breakfast: store.state.cart.selectedBreakfast,
        snacks: store.state.cart.selectedSnacks,
        bowl: store.state.cart.selectedVeganBowl
      },
      id: uuid,
    }
  )
}
