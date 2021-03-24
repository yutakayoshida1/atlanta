export const state = () => ({
  generalInfo: [],
  companyName: '',
  companyAddress: '',
  companyCity: '',
  companyNumber: '',
  companyEmail: '',
  refundPolicy: '',
  mealPrice: 20,
  firstStore: {},
  secondStore: {},
  firstStoreName: '',
  secondStoreName: '',
})

export const mutations = {
  setCompanyInfo(state, elm) {
    // parse the elm object and set the properties
    elm.data.forEach((element) => {
      switch (element.name) {
        case 'Company name':
          state.companyName = element.value
          break

        case 'Company address':
          state.companyAddress = element.value
          break

        case 'Company city and state':
          state.companyCity = element.value
          break

        case 'Company phone':
          state.companyNumber = element.value
          break

        case 'Refund policy':
          state.refundPolicy = element.value
          break

        case 'Company e-mail':
          state.companyEmail = element.value
          break

        case 'Meal price':
          state.mealPrice = element.value
          break
      }
    })
  },
  setFirstStore(state, val) {
    state.firstStore = val
  },
  setSecondStore(state, val) {
    state.secondStore = val
  },
  setFirstStoreName(state, val) {
    state.firstStoreName = val
  },
  setSecondStoreName(state, val) {
    state.secondStoreName = val
  },
}
