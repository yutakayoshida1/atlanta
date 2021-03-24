<template>
  <div>
    <div
      v-if="show"
      class="w-meals-view-card meal-item"
    >
      <div class="meal-item-icon-wrapper">
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9421 21.208C15.1731 21.208 13.7338 19.7687 13.7338 17.9993C13.7338 17.6589 13.7878 17.3315 13.8865 17.023C14.4084 17.2447 14.9634 17.4209 15.5516 17.5464C15.6164 17.5605 15.6808 17.5669 15.7441 17.5669C16.1673 17.5669 16.5476 17.2722 16.6396 16.842C16.7458 16.347 16.4303 15.8597 15.9352 15.7536C15.5955 15.6809 15.2726 15.5886 14.9641 15.4783C15.5098 15.0492 16.1956 14.7911 16.9421 14.7911C18.711 14.7911 20.1507 16.2304 20.1507 17.9993C20.1507 19.7687 18.711 21.208 16.9421 21.208ZM18.749 10.2057C18.1366 9.87274 17.4933 9.59188 16.8604 9.31586C14.6896 8.36862 12.626 7.46868 11.5942 4.64966C15.2688 5.0363 17.9522 7.1502 18.749 10.2057ZM8.0015 16.3091C8.45296 17.0373 8.59377 17.8982 8.39821 18.7326C8.20228 19.5669 7.69345 20.275 6.96486 20.7265C6.45641 21.042 5.87309 21.2085 5.27859 21.2085C4.15776 21.2085 3.13713 20.6412 2.54748 19.6902C2.09602 18.9616 1.95522 18.1012 2.15077 17.2668C2.3467 16.4324 2.85553 15.7243 3.58412 15.2725C3.87876 15.09 4.19873 14.9588 4.531 14.8795C4.5973 15.4107 4.7232 15.9687 4.92025 16.5594C5.04802 16.9438 5.40561 17.1871 5.78965 17.1871C5.88575 17.1871 5.98334 17.1718 6.07945 17.1398C6.55959 16.9796 6.81959 16.4607 6.65942 15.9802C6.54543 15.6375 6.462 15.3108 6.40463 14.9961C7.05761 15.2404 7.62007 15.6938 8.0015 16.3091ZM16.9412 12.9578C15.4889 12.9578 14.1788 13.5758 13.2577 14.5617C12.5935 14.0533 12.0474 13.4096 11.6273 12.6307C10.8167 11.1285 10.5061 9.13007 10.6823 6.94391C12.1204 9.24629 14.288 10.1943 16.1262 10.9963C17.3327 11.5226 18.4722 12.0199 19.2611 12.8088C19.4366 12.9842 19.6709 13.0774 19.9093 13.0774H19.9182C20.4222 13.0744 20.8297 12.665 20.8297 12.1603C20.8297 12.1312 20.8282 12.1026 20.8256 12.0739C20.7824 7.05492 16.996 3.32367 11.6254 2.8141C11.7241 2.49301 11.8157 2.16224 11.8969 1.81843C11.8996 1.80874 11.8988 1.79943 11.901 1.79012C11.9078 1.75734 11.9107 1.72493 11.9137 1.69252C11.9167 1.66421 11.9197 1.6359 11.9197 1.60797C11.9197 1.57705 11.9167 1.54688 11.9133 1.51633C11.9107 1.48691 11.9081 1.45785 11.9025 1.42954C11.8966 1.40049 11.888 1.37293 11.8794 1.34499C11.8709 1.31668 11.8631 1.28837 11.8519 1.26081C11.8407 1.23361 11.8269 1.20828 11.8131 1.18221C11.7994 1.15651 11.7867 1.13081 11.7707 1.10659C11.7543 1.08164 11.7353 1.05854 11.7167 1.03545C11.6984 1.01273 11.6809 0.990004 11.6608 0.969144C11.6403 0.948285 11.6176 0.92966 11.5949 0.910291C11.5718 0.890548 11.5487 0.871179 11.5237 0.853672C11.5002 0.837655 11.4749 0.824245 11.45 0.81009C11.4216 0.794446 11.3933 0.778801 11.3632 0.765764C11.3539 0.762039 11.3464 0.756451 11.3371 0.752726C11.317 0.744904 11.2961 0.741924 11.2756 0.735592C11.2555 0.72926 11.2373 0.72032 11.2164 0.715105C11.2067 0.71287 11.1974 0.713242 11.1881 0.71138C11.1553 0.704675 11.1233 0.701695 11.0905 0.698343C11.0622 0.695735 11.0339 0.692383 11.0056 0.692383C10.975 0.692383 10.9452 0.695735 10.9147 0.698715C10.8853 0.701695 10.8558 0.704303 10.8272 0.70989C10.7985 0.715477 10.7713 0.724045 10.7437 0.732612C10.715 0.741179 10.6863 0.749374 10.6588 0.760549C10.632 0.771724 10.6066 0.785506 10.5806 0.798915C10.5549 0.812698 10.5288 0.825735 10.5042 0.841752C10.4792 0.858142 10.4565 0.876766 10.4334 0.895391C10.4107 0.913643 10.388 0.93115 10.3671 0.951637C10.3459 0.972124 10.3276 0.994846 10.3083 1.0172C10.2885 1.04066 10.2692 1.06338 10.2517 1.08871C10.2356 1.11218 10.2222 1.13714 10.2081 1.16247C10.1924 1.19078 10.1768 1.21909 10.1637 1.24926C10.16 1.25857 10.1541 1.26602 10.1507 1.27533C9.85458 2.03745 9.61097 2.79994 9.41131 3.55685C8.74939 5.15186 7.8759 6.46377 7.02177 7.74291C5.89946 9.42434 4.81848 11.0462 4.54209 13.0111C3.86304 13.1109 3.20783 13.3485 2.61743 13.7143C1.47276 14.4239 0.673021 15.5369 0.365715 16.8477C0.0580365 18.1589 0.279297 19.5114 0.988894 20.6561C1.91491 22.1502 3.51849 23.0419 5.27814 23.0419C6.21421 23.0419 7.13166 22.78 7.93065 22.2846C9.07532 21.5754 9.87506 20.4624 10.1827 19.1512C10.4904 17.84 10.2688 16.4875 9.55919 15.3432C8.83395 14.1729 7.69226 13.3746 6.38667 13.0826C6.64258 11.6138 7.50378 10.3235 8.54676 8.76093C8.62945 8.63652 8.71326 8.51136 8.79744 8.38471C8.83432 10.3038 9.23624 12.0601 10.0136 13.5013C10.5821 14.5547 11.3423 15.43 12.2683 16.1094C12.031 16.6935 11.8996 17.3312 11.8996 17.9995C11.8996 20.7798 14.161 23.0415 16.9412 23.0415C19.7215 23.0415 21.9833 20.7798 21.9833 17.9995C21.9833 15.2196 19.7215 12.9578 16.9412 12.9578Z"
            fill="#293F94"
          />
        </svg>
      </div>
      <div class="meal-info-wrapper">
        <p class="meal-item-name">
          Addons (snack):
          <span class="thin-text">{{ this.$store.state.cart.selectedSnacks[0].name }} w/ {{ this.$store.state.cart.selectedSnacks[1].name }}</span>
        </p>
        <div class="meal-values">
          <div class="value-pair">
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.38761 13.0226C9.00438 13.3174 8.50324 13.5975 7.92841 13.8038C7.81049 13.848 7.69258 13.7301 7.72206 13.6122C7.81049 13.2437 7.86945 12.8605 7.86945 12.4625C7.86945 10.4137 6.42499 8.6745 5.92385 8.11441C5.82068 8.01123 5.65854 8.01123 5.57011 8.11441C5.06897 8.65976 3.62451 10.399 3.62451 12.4625C3.62451 12.9194 3.69821 13.3764 3.81612 13.7891C3.8456 13.907 3.74243 14.0249 3.62451 13.9954C2.63697 13.7301 1.84105 13.3027 1.54626 13.0668C-0.856261 11.0328 -0.0161164 7.83436 1.10408 6.15407C2.34218 4.25269 3.81612 2.63136 3.74242 0.361494C3.72769 0.0961853 4.02247 -0.0806873 4.2583 0.0372278C6.1302 0.980548 7.41253 3.02932 7.75154 4.66539C8.25267 4.19373 8.45903 3.45676 8.47377 2.80823C8.47377 2.4987 8.87173 2.33657 9.09282 2.5724C10.7731 4.38534 13.3672 9.91261 9.38761 13.0226Z"
                fill="#A4B6C0"
              />
            </svg>
            <p>{{ snackObject.calories }}g Calories</p>
          </div>
          <div class="value-spacer"></div>
          <div class="value-pair">
            <svg
              width="11"
              height="14"
              viewBox="0 0 11 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 8.66807C0 5.83383 3.33024 2.16702 5.34964 0C5.57131 0.264132 5.81789 0.550545 6.08002 0.855016C7.96848 3.04852 10.6639 6.17928 10.6639 8.66807C10.6639 10.3332 9.3294 14 5.33193 14C1.33446 14 0 10.3332 0 8.66807ZM1.59364 8.60186C1.542 8.49639 1.49094 8.39208 1.43989 8.2892C0.214175 9.74708 2.65839 13.9336 6.11922 13.2047C3.26094 12.0077 2.36399 10.1755 1.59364 8.60186Z"
                fill="#A4B6C0"
              />
            </svg>
            <p>{{ snackObject.fat }}g Fat</p>
          </div>
          <div class="value-spacer"></div>
          <div class="value-pair">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.98674 7.1517C6.51939 6.52504 7.49071 5.20907 7.49071 3.67376C7.49071 2.13846 6.51939 0.791152 5.98674 0.164497C5.79874 -0.0548323 5.48541 -0.0548323 5.29742 0.164497C4.76476 0.791152 3.79344 2.10713 3.79344 3.64243C3.79344 5.17773 4.76476 6.52504 5.29742 7.12036C5.48541 7.33969 5.79874 7.33969 5.98674 7.1517ZM4.80842 10.7982C5.09702 10.8109 5.31667 10.6131 5.29855 10.33C5.28052 9.50593 5.05931 7.8905 3.99766 6.74142C2.94145 5.6232 1.33154 5.33438 0.491175 5.25984C0.202582 5.2471 -0.0170669 5.44491 0.00104422 5.72806C0.01908 6.5521 0.240292 8.16753 1.30194 9.31661C2.36359 10.4657 3.99892 10.7182 4.80842 10.7982ZM5.95426 10.3613C6.00316 9.5427 6.19895 7.89097 7.25516 6.77275C8.31681 5.62367 9.95758 5.3403 10.7616 5.29118C11.0194 5.27299 11.2699 5.47624 11.2518 5.75939C11.2029 6.57799 11.0071 8.22972 9.95088 9.34794C8.89467 10.4662 7.2539 10.7495 6.4444 10.8295C6.18666 10.8477 5.93615 10.6445 5.95426 10.3613ZM4.80842 15.9994C5.09702 16.0122 5.31667 15.8144 5.29855 15.5312C5.28052 14.7072 5.05931 13.0917 3.99766 11.9427C2.94145 10.8244 1.33154 10.5356 0.491175 10.4611C0.202582 10.4483 -0.0170669 10.6461 0.00104422 10.9293C0.01908 11.7533 0.240292 13.3688 1.30194 14.5178C2.36359 15.6669 3.99892 15.9194 4.80842 15.9994ZM7.2553 11.9113C8.3115 10.7931 9.95228 10.5097 10.7618 10.4298C11.0504 10.417 11.2646 10.6457 11.2519 10.898C11.203 11.7166 11.0072 13.3683 9.95101 14.4865C8.89481 15.6047 7.25404 15.8881 6.44453 15.9681C6.1868 15.9863 5.93629 15.783 5.9544 15.4999C6.00329 14.6813 6.19909 13.0296 7.2553 11.9113Z"
                fill="#A4B6C0"
              />
            </svg>
            <p>{{ snackObject.carbs }}g Carbs</p>
          </div>
          <div class="value-spacer"></div>
          <div class="value-pair">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.98674 7.1517C6.51939 6.52504 7.49071 5.20907 7.49071 3.67376C7.49071 2.13846 6.51939 0.791152 5.98674 0.164497C5.79874 -0.0548323 5.48541 -0.0548323 5.29742 0.164497C4.76476 0.791152 3.79344 2.10713 3.79344 3.64243C3.79344 5.17773 4.76476 6.52504 5.29742 7.12036C5.48541 7.33969 5.79874 7.33969 5.98674 7.1517ZM4.80842 10.7982C5.09702 10.8109 5.31667 10.6131 5.29855 10.33C5.28052 9.50593 5.05931 7.8905 3.99766 6.74142C2.94145 5.6232 1.33154 5.33438 0.491175 5.25984C0.202582 5.2471 -0.0170669 5.44491 0.00104422 5.72806C0.01908 6.5521 0.240292 8.16753 1.30194 9.31661C2.36359 10.4657 3.99892 10.7182 4.80842 10.7982ZM5.95426 10.3613C6.00316 9.5427 6.19895 7.89097 7.25516 6.77275C8.31681 5.62367 9.95758 5.3403 10.7616 5.29118C11.0194 5.27299 11.2699 5.47624 11.2518 5.75939C11.2029 6.57799 11.0071 8.22972 9.95088 9.34794C8.89467 10.4662 7.2539 10.7495 6.4444 10.8295C6.18666 10.8477 5.93615 10.6445 5.95426 10.3613ZM4.80842 15.9994C5.09702 16.0122 5.31667 15.8144 5.29855 15.5312C5.28052 14.7072 5.05931 13.0917 3.99766 11.9427C2.94145 10.8244 1.33154 10.5356 0.491175 10.4611C0.202582 10.4483 -0.0170669 10.6461 0.00104422 10.9293C0.01908 11.7533 0.240292 13.3688 1.30194 14.5178C2.36359 15.6669 3.99892 15.9194 4.80842 15.9994ZM7.2553 11.9113C8.3115 10.7931 9.95228 10.5097 10.7618 10.4298C11.0504 10.417 11.2646 10.6457 11.2519 10.898C11.203 11.7166 11.0072 13.3683 9.95101 14.4865C8.89481 15.6047 7.25404 15.8881 6.44453 15.9681C6.1868 15.9863 5.93629 15.783 5.9544 15.4999C6.00329 14.6813 6.19909 13.0296 7.2553 11.9113Z"
                fill="#A4B6C0"
              />
            </svg>
            <p>{{ snackObject.protein }}g Protein</p>
          </div>
        </div>
      </div>
      <div class="stepper-price">
        <universal-stepper :defaultValue="1" :custom-id="'snack-input'" :event-name="'snack-recalc'" :max-value="10" />
        <p class="overall-price">${{totalPrice}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getWholeBreakfastProtein,
  getWholeBreakfastCarbs,
  getWholeBreakfastFat,
  getWholeBreakfastCalories,
  getWholeSnackValues
} from './../../mealFunctions.js'

import universalStepper from './../components/universalStepper.vue'

export default {
  data() {
    return {
      store: this.$store,
      show: false,
      snackObject: null,
      totalPrice: 0
    }
  },
  components: {
    universalStepper,
  },
  mounted() {
    this.snackObject = getWholeSnackValues(this.$store)
    
    if (this.$store.state.cart.selectedSnacks.length == 2)
      this.show = true
  },
  created() {
    let self = this

    this.$nuxt.$on('snack-recalc', (stepperValue) => {
      self.getTotalPrice(stepperValue)
    })
  },
  methods: {
    getWholeBreakfastProtein(store, index) {
      return getWholeBreakfastProtein(store, index)
    },
    getWholeBreakfastCarbs(store, index) {
      return getWholeBreakfastCarbs(store, index)
    },
    getWholeBreakfastFat(store, index) {
      return getWholeBreakfastFat(store, index)
    },
    getWholeBreakfastCalories(store, index) {
      return getWholeBreakfastCalories(store, index)
    },
    getTotalPrice(customMultiplication = null) {
      // get the amount of meals
      let mealPrice = this.$store.state.snackPrice

      // check the multiplications
      let multiplicationInput = document.getElementById('snack-input')
      console.log(multiplicationInput.value)

      if (customMultiplication == null) {
        if (multiplicationInput != null)
          this.totalPrice = mealPrice * multiplicationInput.value
        else this.totalPrice = mealPrice
      }else {
        this.totalPrice = mealPrice * customMultiplication
      }
    },
  },
}
</script>

<style scoped>
/* start of duplicit meal classes */
.meal-wrapper {
  background: #ffffff;
  box-shadow: 0px 4px 8px #f0f1f5;
  border-radius: 8px;
  width: calc(100% - 48px);
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 32px;
  padding-right: 32px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.meal-item-icon-wrapper {
  background: #e0e9ef;
  border-radius: 20px;
  width: 80px;
  height: 80px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
}

.meal-item-icon-wrapper svg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.meal-item-name {
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 0px;
}

.meal-item {
  margin-top: 16px;
  position: relative;
}

.meal-item:first-child {
  margin-top: 8px;
}

.meal-values {
  margin-top: 6px;
}

.value-pair {
  display: inline-block;
  vertical-align: middle;
}

.value-pair p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.192941px;
  color: #3c3c3c;
  margin-bottom: 0px;
  display: inline-block;
}

.value-pair svg {
  display: inline-block;
  transform: translateY(1px);
}

.value-spacer {
  display: inline-block;
  margin-left: 6px;
  margin-right: 6px;
  width: 2px;
  opacity: 0.1;
  background-color: #293f94;
  height: 18px;
  vertical-align: bottom;
}

.meal-item-icon-wrapper {
  background: #e0e9ef;
  border-radius: 20px;
  width: 80px;
  height: 80px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
}

.meal-item-icon-wrapper svg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.meal-info-sort {
  width: calc(100% - 48px);
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
}

.meal-info-sort .left-info {
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 0px;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
  width: max-content;
  display: inline-block;
}

.meal-info-wrapper {
  display: inline-block;
  margin-left: 16px;
  vertical-align: middle;
}

/* end of duplicit meal classes */

.w-meals-view-card:hover {
  box-shadow: none !important;
}

.thin-text {
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.192941px;
  color: #3c3c3c;
}

.stepper-price {
  display: inline-block;
  vertical-align: middle;
  height: max-content;
  width: max-content;
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
}

.overall-price {
  font-family: Nunito;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  text-transform: uppercase;
  color: #3c3c3c;
  display: inline-block;
  margin-left: 32px;
  margin-bottom: 0px;
  vertical-align: middle;
}

@media only screen and (max-width: 1282px) {
  .nav-item {
    width: 90px;
    font-size: 14px;
    line-height: 19px;
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
    top: calc(100% - 112px);
    left: 0px;
    width: 100%;
    height: 56px;
    background: #ffffff;
    box-shadow: 0px -6px 8px rgba(164, 182, 192, 0.15);
  }

  .finalize-order button {
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    border-radius: 8px !important;
    width: 100% !important;
    height: 40px !important;
    padding-top: 8px;
    background: #34bc89;
    color: white;
  }

  .add-btn {
    margin-top: 6px;
  }

  .stepper-price {
    display: block;
    position: static;
    transform: none;
    margin-top: 16px;
  }
}
</style>