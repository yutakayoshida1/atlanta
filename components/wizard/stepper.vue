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
      class="stepper-btn plus-btn"
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
} from './../mealFunctions.js'

export default {
  props: ['dish', 'mealIndex', 'stepperIndex', 'selected'],
  watch: {
    stepperIndex() {
      let selectedSideDishes = getDishesByIndexAndMealId(
        this.$store,
        this.stepperIndex,
        this.dish.id
      )
      if (selectedSideDishes.length == 0) {
        // reset the stepper
        this.decreaseAvailable = false

        if (this.$store.state.wizard.sideDishFreeSlots > 0) {
          this.increaseAvailable = true
        } else {
          this.increaseAvailable = false
        }

        this.stepperValue = 0
      } else {
        // change to foreach so that this will display correct value
        for (let i = 0; i < selectedSideDishes.length; i++) {
          if (typeof selectedSideDishes[i] !== 'undefined') {
            this.stepperValue++
          }
        }
      }

      if (this.$store.state.wizard.sideDishFreeSlots == 0) {
        this.increaseAvailable = false
        let elements = document.querySelectorAll('.plus-btn')
        for (let i = 0; i < elements.length; i++) {
          elements[i].setAttribute('disabled', 'true')
        }
      }

      if (this.$store.state.wizard.sideDishFreeSlots > 0) {
        this.increaseAvailable = true
        let elements = document.querySelectorAll('.plus-btn')
        for (let i = 0; i < elements.length; i++) {
          elements[i].removeAttribute('disabled')
        }
      }

      // check if decrease is available
      if (this.stepperValue > 0) this.decreaseAvailable = false
      else this.decreaseAvailable = true

      if (this.stepperValue === 0) this.decreaseAvailable = true

      $nuxt.$emit('realoadSideDish')
    },
  },
  data() {
    return {
      decreaseAvailable: true,
      increaseAvailable: true,
      stepperValue: 0,
      lastAddedIndex: 0,
    }
  },
  created() {
    this.$nuxt.$on('meal-view-changed', () => {})
  },
  methods: {
    // add selected meal
    addSelectedDishFromStepper() {
      if (this.$store.state.wizard.sideDishFreeSlots > 0) {
        // set the stuff
        addSelectedDish(
          this.$store,
          this.dish,
          2 - this.$store.state.wizard.sideDishFreeSlots,
          this.mealIndex - 1
        )
        this.lastAddedIndex = 2 - this.$store.state.wizard.sideDishFreeSlots
        this.$store.commit(
          'wizard/setFreeSlots',
          this.$store.state.wizard.sideDishFreeSlots - 1
        )
        this.stepperValue++
        // check the availabity after commiting a new number
        if (this.$store.state.wizard.sideDishFreeSlots == 0) {
          this.increaseAvailable = false
          let elements = document.querySelectorAll('.plus-btn')
          for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute('disabled', 'true')
          }
        }

        // check if decrease is available
        if (this.stepperValue > 0) this.decreaseAvailable = false
        else this.decreaseAvailable = true

        // send event to update the order panel
        $nuxt.$emit('side-dish-updated')
        $nuxt.$emit('mobile-confirmation-check')
        $nuxt.$emit('recheck-cart-availability')
      }
    },
    removeSelectedDishFromStepper() {
      if (this.$store.state.wizard.sideDishFreeSlots < 2) {
        removeSelectedDish(this.$store, this.lastAddedIndex, this.mealIndex)
        this.lastAddedIndex--
        this.$store.commit(
          'wizard/setFreeSlots',
          this.$store.state.wizard.sideDishFreeSlots + 1
        )
        this.stepperValue--

        if (this.$store.state.wizard.sideDishFreeSlots > 0) {
          this.increaseAvailable = true
          let elements = document.querySelectorAll('.plus-btn')
          for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute('disabled')
          }
        }

        if (this.stepperValue === 0) this.decreaseAvailable = true
        // TODO COMPLETE THE + sign disabled
        // TODO COMPLETE the ORDER PANEL DISH PREVIEW

        $nuxt.$emit('side-dish-updated')
      }
      $nuxt.$emit('mobile-confirmation-check')
      $nuxt.$emit('recheck-cart-availability')
    },
  },
}
</script>

<style>
</style>
