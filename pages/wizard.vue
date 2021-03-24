<template>
  <div class="wizard-container">
    <left-panel />
    <view-controller v-show="wizardView == 1" />
    <order-panel v-show="wizardView == 1" />
    <profile-view v-if="wizardView == 2" />
    <order-history-view v-if="wizardView == 3" />
    <rewards-view v-if="wizardView == 4" />
    <delivery-view v-if="wizardView == 7" />
    <weekly-menu-view v-if="wizardView == 8" />
    <!-- popup section -->
    <delete-meal-popup v-if="deleteMealPopup" />
    <filter-popup v-if="filterPopupOpened" :filter-id="filterType" />
    <dish-info-popup v-show="dishInfoPopup" />
    <duplicate-meal-popup v-if="duplicateMeal" />
    <edit-refferal-code-popup v-if="editRefferalPopup" />
    <refferal-share-with-email v-if="shareWithEmail" />
    <refferal-share-with-link v-if="shareWithLink" />
    <gift-card-redeem-popup v-if="redeemGiftCard" />
    <gift-card-buy-popup v-if="giftCardBuy" />
    <change-password-popup v-if="changePassword" />
    <change-email-popup v-if="changeEmailPopup" />
    <add-payment-card-popup v-if="addPaymentMethod" />
    <delete-payment-method v-if="deletePayment" />
  </div>
</template>

<script>
import leftPanel from './../components/wizard/leftPanel.vue'
import orderPanel from './../components/wizard/orderPanel.vue'
import viewController from './../components/wizard/viewController.vue'
import profileView from './../components/wizard/views/profileView.vue'
import deleteMealPopup from './../components/popups/deleteMealPopup.vue'
import orderHistoryView from './../components/wizard/views/ordersHistoryView.vue'
import filterPopup from './../components/popups/filterPopup.vue'
import dishInfoPopup from './../components/popups/dishInfoPopup.vue'
import { setGlobalFilters } from './../components/mealFunctions.js'
import duplicateMealPopup from '@/components/popups/duplicateMealPopup'
import rewardsView from '@/components/wizard/views/rewardsView'
import editRefferalCodePopup from '@/components/popups/editRefferalCodePopup'
import refferalShareWithEmail from '@/components/popups/refferalShareWithEmail'
import refferalShareWithLink from '@/components/popups/refferalShareWithLink'
import giftCardRedeemPopup from '@/components/popups/giftCardRedeemPopup'
import giftCardBuyPopup from '@/components/popups/giftCardBuyPopup'
import changePasswordPopup from '@/components/popups/changePasswordPopup'
import changeEmailPopup from '@/components/popups/changeEmailPopup'
import addPaymentCardPopup from '@/components/popups/addPaymentCardPopup'
import deletePaymentMethod from '@/components/popups/deletePaymentMethod'
import deliveryView from '@/components/wizard/views/deliveryView'
import weeklyMenuView from '@/components/wizard/views/weeklyMenuView'

export default {
  components: {
    leftPanel,
    orderPanel,
    viewController,
    profileView,
    deleteMealPopup,
    orderHistoryView,
    filterPopup,
    dishInfoPopup,
    duplicateMealPopup,
    rewardsView,
    editRefferalCodePopup,
    refferalShareWithEmail,
    refferalShareWithLink,
    giftCardRedeemPopup,
    giftCardBuyPopup,
    changePasswordPopup,
    changeEmailPopup,
    addPaymentCardPopup,
    deletePaymentMethod,
    deliveryView,
    weeklyMenuView,
  },
  data() {
    return {
      // 1 => shows view controller
      // 2 => shows profile view
      // 3 => shows order history view
      wizardView: 1,
      // popup variables
      deleteMealPopup: false,
      // filter popup open
      filterPopupOpened: false,
      dishInfoPopup: false,
      filterType: false,
      duplicateMeal: false,
      editRefferalPopup: false,
      shareWithEmail: false,
      shareWithLink: false,
      redeemGiftCard: false,
      giftCardBuy: false,
      changePassword: false,
      changeEmailPopup: false,
      addPaymentMethod: false,
      deletePayment: false,
    }
  },
  created() {
    const self = this
    // subscribe the events for handling the view change
    this.$nuxt.$on('wizard-view-changed', (nbr) => {
      self.wizardView = nbr
    })

    // change email
    this.$nuxt.$on('open-remove-card', (id) => {
      self.deletePayment = true
      $nuxt.$emit('load-card-delete-id', id)
    })

    this.$nuxt.$on('close-remove-card', () => {
      self.deletePayment = false
    })
    // end of change email

    // popups
    this.$nuxt.$on('open-popup-delete', () => {
      self.deleteMealPopup = true
    })

    this.$nuxt.$on('open-gift-card', () => {
      self.giftCardBuy = true
    })

    this.$nuxt.$on('close-gift-card', () => {
      self.giftCardBuy = false
    })

    // change password
    this.$nuxt.$on('open-change-password', () => {
      self.changePassword = true
    })

    this.$nuxt.$on('close-change-password', () => {
      self.changePassword = false
    })
    // end of change password

    // change email
    this.$nuxt.$on('open-change-email', () => {
      self.changeEmailPopup = true
    })

    this.$nuxt.$on('close-change-email', () => {
      self.changeEmailPopup = false
    })
    // end of change email

    // add card
    this.$nuxt.$on('open-add-card', () => {
      self.addPaymentMethod = true
    })

    this.$nuxt.$on('close-add-card', () => {
      self.addPaymentMethod = false
    })
    // end of add card

    this.$nuxt.$on('open-redeem-card', () => {
      self.redeemGiftCard = true
    })

    this.$nuxt.$on('close-redeem-card', () => {
      self.redeemGiftCard = false
    })

    this.$nuxt.$on('open-share-link', () => {
      self.shareWithLink = true
    })

    this.$nuxt.$on('close-share-link', () => {
      self.shareWithLink = false
    })

    this.$nuxt.$on('open-share-email', () => {
      self.shareWithEmail = true
    })

    this.$nuxt.$on('close-share-email', () => {
      self.shareWithEmail = false
    })

    this.$nuxt.$on('open-edit-refferal', () => {
      self.editRefferalPopup = true
    })

    this.$nuxt.$on('close-edit-refferal', () => {
      self.editRefferalPopup = false
    })

    this.$nuxt.$on('open-popup-duplicate', () => {
      self.duplicateMeal = true
    })

    // popups
    this.$nuxt.$on('close-popup-delete', () => {
      self.deleteMealPopup = false
    })

    this.$nuxt.$on('close-popup-duplicate', () => {
      self.duplicateMeal = false
    })

    // open filter popup
    this.$nuxt.$on('toogle-filter-popup', (boolVal, type) => {
      self.filterType = type
      self.filterPopupOpened = boolVal
    })

    //
    this.$nuxt.$on('dish-info-open', (dishId) => {
      this.dishInfoPopup = true
      $nuxt.$emit('nav-bar-toggle', false)
      $nuxt.$emit('dish-info-popup-set-dish', dishId)
    })

    this.$nuxt.$on('dish-info-close', () => {
      $nuxt.$emit('nav-bar-toggle', true)
      this.dishInfoPopup = false
    })
  },
  mounted() {
    if (this.$store.state.cart.selectedMeals.length === 0) {
      this.$store.commit(
        'cart/generateMealItems',
        this.$store.state.cart.amountOfMeals
      )
      this.$store.commit(
        'cart/generateSideDishes',
        this.$store.state.cart.amountOfMeals
      )
      this.$store.commit('wizard/refreshPrice', this.$store)
    }

    document.body.style.overflow = 'hidden'
    document.body.style.height = '100vh'
    // load the products
    this.loadProducts()
    this.loadSideDishes()
    this.loadBreakfast()
    this.loadSnacks()
    this.loadVeganBowl()
    this.loadFilters()
    this.loadStores()

    // check for the redirect
    const queryString = window.location.search
    switch (queryString) {
      case '?order-history':
        $nuxt.$emit('wizard-view-changed', 3)
        break
      case '?link-order-and-menu':
        $nuxt.$emit('wizard-view-changed', 3)
        break
      case '?profile':
        $nuxt.$emit('wizard-view-changed', 2)
        break
      case '?menu':
        $nuxt.$emit('wizard-view-changed', 7)
        break
    }

    // show the mobile nav
    $nuxt.$emit('nav-bar-toggle', true)
  },
  beforeDestroy() {
    document.body.style.overflow = 'scroll'
    document.body.style.height = '100%'
  },
  methods: {
    async loadProducts() {
      const products = await this.$axios.$get(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlProducts
      )
      this.$store.commit('wizard/setProducts', products)
    },
    async loadSideDishes() {
      const dishes = await this.$axios.$get(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlSideDishes
      )
      this.$store.commit('wizard/setSideDishes', dishes)
    },
    async loadBreakfast() {
      const breakfast = await this.$axios.$get(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlBreakfast
      )
      this.$store.commit('wizard/setBreakfastMeals', breakfast)
    },
    async loadStores() {
      // loads the information of stores and pickups
      let stores = await this.$axios.$get(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlGetStores
      )
      stores = stores[0]
      this.$store.commit(
        'generalInformation/setFirstStoreName',
        stores.first_store_name
      )
      this.$store.commit(
        'generalInformation/setSecondStoreName',
        stores.second_store_name
      )
      this.$store.commit(
        'generalInformation/setFirstStore',
        JSON.parse(stores.first_store)
      )
      this.$store.commit(
        'generalInformation/setSecondStore',
        JSON.parse(stores.second_store)
      )
    },
    async loadSnacks() {
      const snacks = await this.$axios.$get(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlSnacks
      )
      this.$store.commit('wizard/setSnackMeals', snacks)
    },
    async loadVeganBowl() {
      const veganBowl = await this.$axios.$get(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlVeganBowl
      )
      this.$store.commit('wizard/setVeganBowlMeals', veganBowl)
    },
    async loadFilters() {
      const filters = await this.$axios.$get(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.filterOptions
      )
      this.$store.commit('wizard/setFilters', filters.data[0].filters)
      setGlobalFilters(filters.data[0].filters, this.$store)
    },
  },
}
</script>

<style scoped>
html {
  overflow: hidden;
}

.wizard-container {
  position: fixed;
  z-index: 30;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #f6f9fc;
}
</style>
