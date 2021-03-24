<template>
  <div class="order-info-wrapper">
    <strong>Increase portion size:</strong>
    <div class="portions center-hor-margin center-mult-flx">
      <div class="portion-btn-wrapper" @click="selectPortion(0)">
        <button class="portion-btn">5oz</button>
        <p class="portion-price center-hor-margin">$0.00</p>
      </div>
      <div class="portion-btn-wrapper" @click="selectPortion(1)">
        <button class="portion-btn">6oz</button>
        <p class="portion-price center-hor-margin">$7.60</p>
      </div>
      <div class="portion-btn-wrapper" @click="selectPortion(2)">
        <button class="portion-btn">8oz</button>
        <p class="portion-price center-hor-margin">$11.40</p>
      </div>
    </div>
  </div>
</template>

<script>
import { changePortionSize } from './../mealFunctions.js'

export default {
  methods: {
    selectPortion(index) {
      // remove the active active classes from all
      let portions = document.querySelectorAll('.portion-btn-wrapper')
      portions.forEach((element) => {
        element.classList.remove('portion-selected')
      })

      // add the class to certain element
      portions[index].classList.add('portion-selected')

      // send it to the cart js
      changePortionSize(this.$store, index)
    }
  }
}
</script>

<style scoped>
.order-info-wrapper {
  background: #f6f9fc;
  border-radius: 4px;
  width: calc(100% - 32px);
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 16px !important;
  padding-top: 16px !important;
  padding-left: 12px !important;
  padding-right: 12px !important;
  margin-top: 16px;
}

.portion-btn-wrapper {
  width: max-content;
  margin-top: 8px;
  display: inline-block;
}

.portions {
  display: block;
  width: calc(100%);
}

.portion-price {
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #3c3c3c;
  width: max-content;
  margin-top: 4px;
  margin-bottom: 0px;
  transition: 200ms ease;
}

.portion-selected button {
  color: white;
  background-color: #34BC89;
}

.portion-selected p {
  font-weight: 800;
}
@media only screen and (max-width: 1282px) {
  .portion-btn {
    width: 100%;
  }
  .portion-btn-wrapper {
    width: 32%;
  }
}
</style>