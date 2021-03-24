<template>
  <div class="side-meal-stepper-box">
    <button
      class="stepper-btn"
      :disabled="decreaseAvailable"
      @click="removeSelectedDishFromStepper()"
    >
      <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="4" rx="2" fill="white" />
      </svg>
    </button>
    <p class="stepper-nbr">{{ stepperValue }}</p>
    <button
      class="stepper-btn plus-btn-vegan"
      @click="addSelectedDishFromStepper()"
      :disabled="!increaseAvailable"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.66667 0C5.74619 0 5 0.746192 5 1.66667V5H1.66667C0.746192 5 0 5.74619 0 6.66667C0 7.58714 0.746192 8.33333 1.66667 8.33333H5V11.6667C5 12.5871 5.74619 13.3333 6.66667 13.3333C7.58714 13.3333 8.33333 12.5871 8.33333 11.6667V8.33333H11.6667C12.5871 8.33333 13.3333 7.58714 13.3333 6.66667C13.3333 5.74619 12.5871 5 11.6667 5H8.33333V1.66667C8.33333 0.746192 7.58714 0 6.66667 0Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import {
  addSelectedDish,
  removeSelectedDish,
  getDishesByIndexAndMealId,
  getBreakfastCount,
  getBreakfastItemsTotalPrice,
  removeBreakfastById,
} from './../../mealFunctions.js'

export default {
  props: ['dish', 'mealIndex', 'stepperIndex', 'selected'],
  mounted() {
    // check if the breakfast is set, if yes, than add the numbers, etc
    for(let i = 0; i < this.$store.state.cart.selectedVeganBowl.length; i++) {
      if (typeof this.$store.state.cart.selectedVeganBowl[i] !== 'undefined') {
        if (this.$store.state.cart.selectedVeganBowl[i].id === this.dish.id)
          this.stepperValue++
      }
    }
    // check if decrease is available
    if (this.stepperValue > 0) this.decreaseAvailable = false
    else this.decreaseAvailable = true

    // check the availabity after commiting a new number
    if (this.$store.state.cart.selectedVeganBowl.length == 2) {
      this.increaseAvailable = false
      let elements = document.querySelectorAll('.plus-btn-vegan')
      for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute('disabled', 'true')
      }
    }
  },
  watch: {
    stepperIndex() {
      let selectedVeganBowl = getBreakfastCount(this.$store, this.dish.id)
      if (this.$store.state.cart.selectedVeganBowl.length == 0) {
        // reset the stepper
        this.decreaseAvailable = false

        if (this.$store.state.cart.selectedVeganBowl.length > 0) {
          this.increaseAvailable = true
        } else {
          this.increaseAvailable = false
        }

        this.stepperValue = 0
      } else {
        // change to foreach so that this will display correct value
        for (let i = 0; i < selectedVeganBowl.length; i++) {
          if (typeof selectedVeganBowl[i] !== 'undefined') {
            this.stepperValue++
          }
        }
      }

      if (selectedVeganBowl == 4) {
        this.increaseAvailable = false
        let elements = document.querySelectorAll('.plus-btn-vegan')
        for (let i = 0; i < elements.length; i++) {
          elements[i].setAttribute('disabled', 'true')
        }
      }

      if (selectedVeganBowl < 4) {
        this.increaseAvailable = true
        let elements = document.querySelectorAll('.plus-btn-vegan')
        for (let i = 0; i < elements.length; i++) {
          elements[i].removeAttribute('disabled')
        }
      }

      // check if decrease is available
      if (this.stepperValue > 0) this.decreaseAvailable = false
      else this.decreaseAvailable = true

      if (this.$store.state.cart.selectedVeganBowl.length > 0) {
        this.increaseAvailable = true
      } else {
        this.increaseAvailable = false
      }
    },
  },
  data() {
    return {
      decreaseAvailable: true,
      increaseAvailable: true,
      stepperValue: 0,
    }
  },
  beforeDestroy() {
    // send event
    $nuxt.$emit('show-and-count-points', false, getBreakfastItemsTotalPrice(this.$store))
  },
  methods: {
    // add selected meal
    addSelectedDishFromStepper() {
      if (this.$store.state.cart.selectedVeganBowl.length < 4) {
        let values = new Object()
        values.index = this.$store.state.cart.selectedVeganBowl.length
        values.data = this.dish
        // add the selected breakfast
        this.$store.commit('cart/setVeganBowlItem', values)

        this.stepperValue++

        // check the availabity after commiting a new number
        if (this.$store.state.cart.selectedVeganBowl.length == 4) {
          this.increaseAvailable = false
          let elements = document.querySelectorAll('.plus-btn-vegan')
          for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute('disabled', 'true')
          }
        }

        // check if decrease is available
        if (this.stepperValue > 0) this.decreaseAvailable = false
        else this.decreaseAvailable = true

        // send event to recalculate the points to be received
        $nuxt.$emit('show-and-count-points', true, this.$store.state.veganBowlPrice)
        $nuxt.$emit('recalc-vegan-bowl-count')
        $nuxt.$emit('check-addons')
        this.$store.commit('wizard/refreshPrice', this.$store)
        $nuxt.$emit('vegan-bowl-values-refresh')
      }
    },
    removeSelectedDishFromStepper() {
      if (this.$store.state.cart.selectedVeganBowl.length > 0) {
        // remove breakfast
        this.$store.commit('cart/removeVeganBowl', this.dish.id)
        this.stepperValue--

        if (this.$store.state.cart.selectedVeganBowl.length < 4) {
          this.increaseAvailable = true
          let elements = document.querySelectorAll('.plus-btn-vegan')
          for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute('disabled')
          }
        }

        if (this.stepperValue === 0) {
          this.decreaseAvailable = true
          $nuxt.$emit('show-and-count-points', true, 0)
        }else {
          $nuxt.$emit('show-and-count-points', true, this.$store.state.veganBowlPrice)
        }

        $nuxt.$emit('recalc-vegan-bowl-count')
        $nuxt.$emit('check-addons')
        this.$store.commit('wizard/refreshPrice', this.$store)
        $nuxt.$emit('vegan-bowl-values-refresh')
      }
    },
  },
}
</script>

<style>
</style>