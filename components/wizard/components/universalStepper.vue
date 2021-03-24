<template>
  <div class="side-meal-stepper-box">
    <button class="stepper-btn" :disabled="decreaseAvailable" @click="stepperRemove()">
      <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="4" rx="2" fill="white" />
      </svg>
    </button>
    <p class="stepper-nbr">{{ stepperValue }}</p>
    <button class="stepper-btn plus-btn" :disabled="!increaseAvailable" @click="stepperAdd()">
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
    <input type="hidden" :value="stepperValue" :name="customId" :id="customId" />
  </div>
</template>

<script>
import {
  addSelectedDish,
  removeSelectedDish,
  getDishesByIndexAndMealId,
} from './../../mealFunctions.js'

export default {
  props: ['customId', 'maxValue', 'defaultValue', 'eventName'],
  watch: {},
  data() {
    return {
      decreaseAvailable: true,
      increaseAvailable: true,
      stepperValue: 0,
      lastAddedIndex: 0,
    }
  },
  methods: {
    stepperAdd() {
      if (this.stepperValue + 1 <= this.maxValue) {
        this.stepperValue++
      }
      this.checkState()

      // emit dynamic event
      if (this.eventName !== null || typeof this.eventName !== 'undefined')
        $nuxt.$emit(this.eventName, this.stepperValue)
    },
    stepperRemove() {
      if (this.stepperValue > 0) this.stepperValue--
      this.checkState()

      // emit dynamic event
      if (this.eventName !== null || typeof this.eventName !== 'undefined')
          $nuxt.$emit(this.eventName, this.stepperValue)
    },
    checkState() {
      // check if decrease is available
      if (this.stepperValue > 0) this.decreaseAvailable = false
      else this.decreaseAvailable = true

      // check if increase is available
      if (this.stepperValue < this.maxValue) this.increaseAvailable = true
      else this.increaseAvailable = false
    },
  },
  mounted() {
    for (let i = 0; i < this.defaultValue; i++) {
      this.stepperAdd()
    }
  },
}
</script>

<style>
.side-meal-stepper-box {
  padding: 8px;
  background: #f6f9fc;
  border-radius: 8px;
  display: inline-block;
  vertical-align: middle;
}
</style>