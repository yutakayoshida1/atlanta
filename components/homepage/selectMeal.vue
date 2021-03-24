<template>
  <div class="choose-homepage">
    <h2>How many meals would you like to order?</h2>
    <div class="meal-selector">
      <p class="little-header"><strong>Enter the amount of meals</strong></p>
      <p id="second-p" class="mobile-small">5 is a minimum amount you can order</p>
      <div class="ext-input-wrp meal-input">
        <input
          id="meal-count"
          v-model="mealCount"
          type="number"
          min="5"
          max="999"
          @change="calculatePrice()"
          @keyup="checkMealInputError()"
        />
      </div>
      <p class="little-header other-option">
        <strong>Or use a shortcut</strong>
      </p>
      <div class="button-row">
        <button
          id="button-meal-5"
          class="meal-btn wide-btn"
          @click="setMealCount(5)"
        >
          5 meals
        </button>
        <button
          id="button-meal-10"
          class="meal-btn wide-btn"
          @click="setMealCount(10)"
        >
          10 meals
        </button>
        <button
          id="button-meal-15"
          class="meal-btn wide-btn"
          @click="setMealCount(15)"
        >
          15 meals
        </button>
      </div>
      <div class="button-row">
        <button
          id="button-meal-20"
          class="meal-btn wide-btn"
          @click="setMealCount(20)"
        >
          20 meals
        </button>
        <button
          id="button-meal-25"
          class="meal-btn wide-btn"
          @click="setMealCount(25)"
        >
          25 meals
        </button>
        <button
          id="button-meal-30"
          class="meal-btn wide-btn"
          @click="setMealCount(30)"
        >
          30 meals
        </button>
      </div>
    </div>
    <div class="total-count">
      <p>Total: ${{ mealPrice }}</p>
    </div>
    <button
      class="ms-button-wide ms-outlined-button meal-button ms-button–arrow ms-button-arrow-left mobile-hidden"
      @click="previousStep"
    >
      Back
    </button>
    <button
      id="nxt-stp"
      class="ms-button-wide ms-filled-button meal-button ms-button–arrow ms-button-arrow-right"
      @click="nextStep"
    >
      Proceed
    </button>
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
  mounted() {
    this.calculatePrice()
  },
  methods: {
    setMealCount(count) {
      this.$store.commit('wizard/setMealsCount', count)
      this.mealCount = count
      this.calculatePrice()
    },
    setMealCountStandalone() {
      this.$store.commit('wizard/setMealsCount', this.mealCount)
      this.calculatePrice()
    },
    calculatePrice() {
      this.mealPrice = this.$store.getters.getPriceByMealCount(this.mealCount)
      let elm
      const mealCount = this.mealCount

      if (mealCount <= 30 && mealCount % 5 === 0) {
        elm = document.getElementById('button-meal-' + mealCount)
        this.setActiveButton('meal-btn', 'meal-active', elm)
      }

      this.checkMealInputError()
    },
    checkMealInputError() {
      if (this.mealCount < 5) {
        document.getElementById('meal-count').classList.add('meal-count-error')
        document.getElementById('second-p').classList.add('meal-p-error')
        document.getElementById('nxt-stp').setAttribute('disabled', true)
      } else {
        document
          .getElementById('meal-count')
          .classList.remove('meal-count-error')
        document.getElementById('second-p').classList.remove('meal-p-error')
        document.getElementById('nxt-stp').removeAttribute('disabled')
      }
    },
    previousStep() {
      this.$store.commit('wizard/setStep', 1)
      this.$store.commit('wizard/setMealsCount', this.mealCount)
    },
    setMealCountFromDOM() {
      const count = document.getElementById('meal-count').value
      this.mealCount = count
      this.$store.commit('wizard/setMealsCount', count)
    },
    nextStep() {
      if (this.mealCount >= 5) {
        this.$store.commit('cart/generateMealItems', this.mealCount)
        this.$store.commit('cart/generateSideDishes', this.mealCount)
        this.$store.commit('wizard/refreshPrice', this.$store)
        $nuxt.$emit('base-back-nav-toggle', false)

        if (this.$store.state.logedIn) {
          this.$router.push({
            path: '/wizard',
          })
        } else {
          this.$router.push({
            path: '/wizard',
          })
        }
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

#second-p {
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

  .button-row {
    width: 100%;
  }

  .wide-btn {
    margin-left: 0px;
  }
}
</style>
