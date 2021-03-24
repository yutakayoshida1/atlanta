<template>
  <div class="popup-bg">
    <div class="popup-wizard">
      <div class="popup-wizard-content">
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="close-button"
          @click="close"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.5046 16.5665L24.3769 11.6863C25.2077 10.8541 25.2077 9.50903 24.3769 8.67686C23.5461 7.84469 22.2031 7.84469 21.3723 8.67686L16.5 13.5571L11.6277 8.67686C10.7969 7.84469 9.45394 7.84469 8.62312 8.67686C7.79229 9.50903 7.79229 10.8541 8.62312 11.6863L13.4954 16.5665L8.62312 21.4467C7.79229 22.2789 7.79229 23.624 8.62312 24.4562C9.03747 24.8712 9.58143 25.0798 10.1254 25.0798C10.6694 25.0798 11.2133 24.8712 11.6277 24.4562L16.5 19.5759L21.3723 24.4562C21.7867 24.8712 22.3306 25.0798 22.8746 25.0798C23.4186 25.0798 23.9625 24.8712 24.3769 24.4562C25.2077 23.624 25.2077 22.2789 24.3769 21.4467L19.5046 16.5665Z"
            fill="#1A1A1A"
          />
          <mask
            id="mask9988"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="8"
            y="8"
            width="17"
            height="18"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.5046 16.5665L24.3769 11.6863C25.2077 10.8541 25.2077 9.50903 24.3769 8.67686C23.5461 7.84469 22.2031 7.84469 21.3723 8.67686L16.5 13.5571L11.6277 8.67686C10.7969 7.84469 9.45394 7.84469 8.62312 8.67686C7.79229 9.50903 7.79229 10.8541 8.62312 11.6863L13.4954 16.5665L8.62312 21.4467C7.79229 22.2789 7.79229 23.624 8.62312 24.4562C9.03747 24.8712 9.58143 25.0798 10.1254 25.0798C10.6694 25.0798 11.2133 24.8712 11.6277 24.4562L16.5 19.5759L21.3723 24.4562C21.7867 24.8712 22.3306 25.0798 22.8746 25.0798C23.4186 25.0798 23.9625 24.8712 24.3769 24.4562C25.2077 23.624 25.2077 22.2789 24.3769 21.4467L19.5046 16.5665Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask9988)">
            <rect y="0.0390625" width="32" height="32.0509" fill="#3C3C3C" />
          </g>
        </svg>

        <h2>How many meals would you like to order?</h2>
        <div class="meal-selector">
          <p class="little-header">
            <strong>Enter the amount of meals</strong>
          </p>
          <p id="second-p-pp">5 is a minimum amount you can order</p>
          <div class="ext-input-wrp meal-input">
            <input
              v-model.number="mealCount"
              id="meal-count-pp"
              type="number"
              min="5"
              max="999"
              @change="calculatePrice"
            />
          </div>
          <p class="little-header other-option">
            <strong>Or use a shortcut</strong>
          </p>
          <div class="button-row">
            <button
              id="button-meal-popup-5"
              onclick="setActiveButton('meal-btn', 'meal-active', this)"
              @click="setMealCount(5)"
              class="meal-btn wide-btn"
            >
              5 meals
            </button>
            <button
              onclick="setActiveButton('meal-btn', 'meal-active', this)"
              @click="setMealCount(10)"
              class="meal-btn wide-btn"
              id="button-meal-popup-10"
            >
              10 meals
            </button>
            <button
              onclick="setActiveButton('meal-btn', 'meal-active', this)"
              @click="setMealCount(15)"
              class="meal-btn wide-btn"
              id="button-meal-popup-15"
            >
              15 meals
            </button>
          </div>
          <div class="button-row">
            <button
              onclick="setActiveButton('meal-btn', 'meal-active', this)"
              @click="setMealCount(20)"
              class="meal-btn wide-btn"
              id="button-meal-popup-20"
            >
              20 meals
            </button>
            <button
              onclick="setActiveButton('meal-btn', 'meal-active', this)"
              @click="setMealCount(25)"
              class="meal-btn wide-btn"
              id="button-meal-popup-25"
            >
              25 meals
            </button>
            <button
              onclick="setActiveButton('meal-btn', 'meal-active', this)"
              @click="setMealCount(30)"
              class="meal-btn wide-btn"
              id="button-meal-popup-30"
            >
              30 meals
            </button>
          </div>
        </div>
        <div class="total-count">
          <p>Total: ${{ mealPrice }}</p>
        </div>
        <button
          @click="close"
          class="ms-button-wide ms-outlined-button meal-button txt-center"
        >
          Cancel
        </button>
        <button
          id="nxt-stp-pp"
          @click="confirm"
          class="ms-button-wide ms-filled-button meal-button ms-button–arrow ms-button-arrow-right"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      mealCount: 5,
      mealPrice: 0,
    }
  },
  created() {
    $nuxt.$emit('nav-bar-toggle', false)
  },
  beforeDestroy() {
    $nuxt.$emit('nav-bar-toggle', true)
  },
  mounted() {
    this.calculatePrice()
  },
  methods: {
    setMealCount(count) {
      this.mealCount = count
      this.calculatePrice()
    },
    calculatePrice() {
      this.mealPrice = this.$store.getters['getPriceByMealCount'](
        this.mealCount
      )

      let elm
      const mealCount = this.mealCount

      if (mealCount <= 30 && mealCount % 5 === 0) {
        elm = document.getElementById('button-meal-popup-' + mealCount)
        this.setActiveButton('meal-btn', 'meal-active', elm)
      }

      this.checkMealInputError()
    },
    confirm() {
      const oldVal = this.$store.state.wizard.amountOfMeals
      this.$store.commit('wizard/setMealsCount', this.mealCount)
      this.$store.commit('cart/generateMealItems', this.mealCount)
      this.$store.commit('cart/generateSideDishes', this.mealCount)
      this.$store.commit('wizard/refreshPrice', this.$store)

      if (this.mealCount > oldVal) $nuxt.$emit('last-meal-selection-exit')
      $nuxt.$emit('recheck-scrollable-navbar')
      $nuxt.$emit('recheck-cart-availability')
      this.$emit('close-popup')
    },
    setMealCountFromDOM() {
      const count = document.getElementById('meal-count-pp').value
      this.mealCount = count
    },
    close() {
      this.$emit('close-popup')
    },
    checkMealInputError() {
      if (this.mealCount < 5) {
        document
          .getElementById('meal-count-pp')
          .classList.add('meal-count-error')
        document.getElementById('second-p-pp').classList.add('meal-p-error')
        document.getElementById('nxt-stp-pp').setAttribute('disabled', true)
      } else {
        document
          .getElementById('meal-count-pp')
          .classList.remove('meal-count-error')
        document.getElementById('second-p-pp').classList.remove('meal-p-error')
        document.getElementById('nxt-stp-pp').removeAttribute('disabled')
      }
    },
    setActiveButton(classes, classToDeactive, elmToActive) {
      const elements = document.getElementsByClassName(classes)
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(classToDeactive)
      }
      elmToActive.classList.add(classToDeactive)
    },
  },
}
</script>

<style scoped>
.meal-selector {
  width: 516px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 40px;
  padding-bottom: 24px;
  background: #f6f9fc;
  border-radius: 8px;
}

.popup-wizard {
  width: 593px;
}

.txt-center {
  text-align: center;
}

h2 {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 44px;
  line-height: 54px;
  max-width: 516px;
  color: #3c3c3c;
  margin-top: 0;
}

.little-header {
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
  margin-bottom: 4px;
}

.small-header {
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.2px;
  color: #3c3c3c;
}

.meal-input {
  margin-top: 16px;
}

.meal-input input {
  width: 100%;
}

.other-option {
  margin-top: 35px;
}

.meal-btn {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(164, 182, 192, 0.18);
  color: #3c3c3c;
  border-radius: 4px;
  border: none;
  text-transform: none;
  letter-spacing: 0.2px;
  transition: 180ms ease;
}

.meal-btn:hover {
  box-shadow: 0px 4px 8px rgba(164, 182, 192, 0.3);
}

.wide-btn {
  width: 145px;
  margin-left: -4px;
}

.button-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}

.button-row {
  margin-top: 8px;
}

.meal-active {
  background: #34bc89;
  color: white;
}

.total-count {
  width: 516px;
  background: #f6f9fc;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 8px;
}

.total-count p {
  font-weight: 800;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.289412px;
  color: #3c3c3c;
  text-align: center;
  padding-bottom: 12px;
  padding-top: 12px;
}

.meal-button {
  margin-top: 8px;
}

@media only screen and (max-width: 1282px) {
  .nav-item {
    width: 90px;
    font-size: 14px;
    line-height: 19px;
  }
  h2 {
    font-size: 24px;
    line-height: 32px;
    margin-top: 40px;
  }
  .popup-wizard {
    width: 100%;
  }
  .nav-item::after {
    width: 60%;
  }
  .meal-nav {
    height: 48px;
  }
  .desktop-only-not-mobile {
    display: none;
  }
  .meal-values {
    display: none;
  }
  .buttons-wrapper {
    display: block;
    position: static;
    transform: none;
    margin-top: 4px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .buttons-wrapper button:first-child {
    margin-right: 4px;
  }
  .meal-item-icon-wrapper {
    width: 56px;
    height: 56px;
  }
  .ms-outlined-button {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .select-btn {
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .meal-info-wrapper {
    vertical-align: top;
    margin-left: 4px;
    max-width: 70%;
  }
  .select-meals-dishes p {
    font-size: 14px;
    line-height: 19px;
  }
  .select-meals-dishes .arrow-dp-box {
    height: 16px;
  }
  .w-meals-view-card {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .select-entry-meal {
    padding-top: 2px;
  }
  .finalize-order {
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px -6px 8px rgba(164, 182, 192, 0.15);
  }
  .add-btn {
    margin-top: 6px;
  }
    .choose-homepage h2 {
    font-size: 24px;
    line-height: 32px;
    margin-top: 0px;
    margin-bottom: 4px;
  }

  .long-btn-wide {
    width: 100%;
    padding: 12px;
  }

  .right-arrow {
    display: none;
  }

  .choose-homepage {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    width: calc(100% - 48px);
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index: 20;
    margin-top: 24vh;
  }

  .text-wrapper p:nth-child(2) {
    font-size: 12px;
    line-height: 16px;
  }

  .fruit-icon {
    vertical-align: middle;
    border-radius: 50%;
  }

  .text-wrapper {
    vertical-align: middle;
  }

  .meal-selector {
    width: 100%;
    padding-top: 24px;
  }

  .mobile-small {
    font-size: 12px;
    line-height: 16px;
  }

  .other-option {
    margin-top: 16px;
  }

  .wide-btn {
    width: 30%;
  }

  .meal-btn {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: 14px;
    line-height: 19px;
  }

  .total-count {
    width: 100%;
  }

  .meal-button {
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .meal-button {
    width: calc(50% - 4px);
    display: inline-block;
    padding-left: 0px;
    padding-right: 0px;
    text-align: center;
  }
}

p {
  margin-bottom: 0;
  margin-top: 0;
}

.choose-homepage {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 580px;
}

.choose-homepage h2 {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 44px;
  line-height: 54px;
  max-width: 516px;
  color: #3c3c3c;
}

.meal-selector {
  width: 516px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 40px;
  padding-bottom: 24px;
  background: #f6f9fc;
  border-radius: 8px;
}

.little-header {
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
  margin-bottom: 4px;
}

.small-header {
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.2px;
  color: #3c3c3c;
}

.meal-input {
  margin-top: 16px;
}

.meal-input input {
  width: 100%;
}

.other-option {
  margin-top: 35px;
  margin-left: 12px;
}

.meal-btn {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(164, 182, 192, 0.18);
  color: #3c3c3c;
  border-radius: 4px;
  border: none;
  text-transform: none;
  letter-spacing: 0.2px;
  transition: 180ms ease;
  margin-right: 8px;
}

.meal-btn:last-child {
  margin-right: 0px;
}

.meal-btn:hover {
  box-shadow: 0px 4px 8px rgba(164, 182, 192, 0.3);
}

.wide-btn {
  width: 145px;
  margin-left: -4px;
}

.button-row {
  width: max-content;
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}

.button-row {
  margin-top: 8px;
}

.meal-active {
  background: #34bc89;
  color: white;
}

.total-count {
  width: 516px;
  background: #f6f9fc;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 8px;
}

.total-count p {
  font-weight: 800;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.289412px;
  color: #3c3c3c;
  text-align: center;
  padding-bottom: 12px;
  padding-top: 12px;
}

.meal-button {
  margin-top: 8px;
}

.meal-count-error {
  border: 2px solid #fc7f7f;
}

.meal-count-error:focus {
  border: 2px solid #fc7f7f;
}

.meal-p-error {
  color: #fc7f7f;
}

#second-p-pp {
  font-weight: bold;
  transition: 250ms ease;
}

@media only screen and (max-width: 1282px) {
  .choose-homepage h2 {
    font-size: 24px;
    line-height: 32px;
    margin-top: 0px;
    margin-bottom: 4px;
  }

  .long-btn-wide {
    width: 100%;
    padding: 12px;
  }

  .right-arrow {
    display: none;
  }

  .choose-homepage {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    width: calc(100% - 48px);
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index: 20;
    margin-top: 24vh;
  }

  .text-wrapper p:nth-child(2) {
    font-size: 12px;
    line-height: 16px;
  }

  .fruit-icon {
    vertical-align: middle;
    border-radius: 50%;
  }

  .text-wrapper {
    vertical-align: middle;
  }

  .meal-selector {
    width: 100%;
    padding-top: 24px;
  }

  .mobile-small {
    font-size: 12px;
    line-height: 16px;
  }

  .other-option {
    margin-top: 16px;
  }

  .wide-btn {
    width: 30%;
  }

  .meal-btn {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: 14px;
    line-height: 19px;
  }

  .total-count {
    width: 100%;
  }

  .meal-button {
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
  }
}
</style>
