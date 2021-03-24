<template>
  <div class="popup-bg">
    <div class="popup-wizard">
      <div class="popup-wizard-content">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="close-button"
          @click="close(true)"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5046 8.19899L16.3769 3.49921C17.2077 2.69781 17.2077 1.40245 16.3769 0.601051C15.5461 -0.20035 14.2031 -0.20035 13.3723 0.601051L8.5 5.30083L3.62768 0.601051C2.79686 -0.20035 1.45394 -0.20035 0.623117 0.601051C-0.207706 1.40245 -0.207706 2.69781 0.623117 3.49921L5.49544 8.19899L0.623117 12.8988C-0.207706 13.7002 -0.207706 14.9955 0.623117 15.7969C1.03747 16.1966 1.58143 16.3975 2.1254 16.3975C2.66936 16.3975 3.21333 16.1966 3.62768 15.7969L8.5 11.0972L13.3723 15.7969C13.7867 16.1966 14.3306 16.3975 14.8746 16.3975C15.4186 16.3975 15.9625 16.1966 16.3769 15.7969C17.2077 14.9955 17.2077 13.7002 16.3769 12.8988L11.5046 8.19899Z"
            fill="#3C3C3C"
          />
        </svg>

        <h2 class="delete-header">Specify the details about your gift card</h2>

        <div class="inside-content-wrapper">
          <span v-show="popupState === 1">
            <p class="bold-p">Enter the gift amount</p>
            <div class="ext-input-wrp duplicate-input">
              <input v-model="giftAmount" type="number" value="" />
            </div>

            <div class="price-options-wrapper">
              <div
                class="price-option"
                :class="{ 'price-option-active': giftAmount == 25 }"
                @click="giftAmount = 25"
              >
                $25
              </div>
              <div
                class="price-option"
                :class="{ 'price-option-active': giftAmount == 50 }"
                @click="giftAmount = 50"
              >
                $50
              </div>
              <div
                class="price-option"
                :class="{ 'price-option-active': giftAmount == 100 }"
                @click="giftAmount = 100"
              >
                $100
              </div>
              <div
                class="price-option"
                :class="{ 'price-option-active': giftAmount == 150 }"
                @click="giftAmount = 150"
              >
                $150
              </div>
            </div>

            <p class="bold-p" style="margin-top: 40px;">
              Select the delivery type
            </p>
            <div class="type-wrapper">
              <div
                class="type-option"
                :class="{ 'type-option-active': giftType == 1 }"
                @click="giftType = 1"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.1462 6H5.85384C3.72542 6 2 7.72542 2 9.85384C2 10.8305 2.49321 11.7411 3.3112 12.2747L15.0828 19.9536C15.379 20.1469 15.6837 20.3209 15.9954 20.4759L18.3301 22.0412C19.3408 22.7188 20.6606 22.7188 21.6713 22.0412L24.01 20.4732C24.3198 20.3189 24.6227 20.1458 24.9172 19.9536L36.6888 12.2747C37.5068 11.7411 38 10.8305 38 9.85384C38 7.72542 36.2746 6 34.1462 6ZM2.04283 30.0002V19.6861C2.04283 18.0864 3.8278 17.1341 5.15656 18.0249L16.1026 25.3636C18.4609 26.9446 21.5405 26.9446 23.8988 25.3636L34.8549 18.0181C36.1837 17.1273 37.9687 18.0796 37.9687 19.6794V30.0002C37.9687 32.2093 36.1778 34.0002 33.9687 34.0002H6.04283C3.83369 34.0002 2.04283 32.2093 2.04283 30.0002Z"
                    fill="#293F94"
                  />
                </svg>
                <p>
                  Email
                </p>
              </div>

              <div
                class="type-option"
                :class="{ 'type-option-active': giftType == 2 }"
                @click="giftType = 2"
              >
                <svg
                  width="14"
                  height="23"
                  viewBox="0 0 14 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.73 0H2.07C0.927187 0 0 0.927187 0 2.07V20.01C0 21.1528 0.927187 22.08 2.07 22.08H11.73C12.8728 22.08 13.8 21.1528 13.8 20.01V2.07C13.8 0.927187 12.8728 0 11.73 0ZM6.9 20.7C6.13669 20.7 5.52 20.0833 5.52 19.32C5.52 18.5567 6.13669 17.94 6.9 17.94C7.66331 17.94 8.28 18.5567 8.28 19.32C8.28 20.0833 7.66331 20.7 6.9 20.7ZM11.73 16.0425C11.73 16.3271 11.4971 16.56 11.2125 16.56H2.5875C2.30287 16.56 2.07 16.3271 2.07 16.0425V2.5875C2.07 2.30287 2.30287 2.07 2.5875 2.07H11.2125C11.4971 2.07 11.73 2.30287 11.73 2.5875V16.0425Z"
                    fill="white"
                  />
                </svg>

                <p>
                  SMS
                </p>
              </div>
            </div>
          </span>
          <span v-show="popupState === 2">
            <p class="input-label">To:</p>
            <div class="ext-input-wrp duplicate-input">
              <input type="email" placeholder="email@gmail.com" />
            </div>

            <p style="margin-top: 24px;" class="input-label">From:</p>
            <div class="ext-input-wrp duplicate-input">
              <input type="text" placeholder="Your Name" />
            </div>

            <span v-if="giftType == 1">
              <p style="margin-top: 24px;" class="input-label">
                Delivery date:
              </p>
              <div class="ext-input-wrp duplicate-input">
                <input type="date" placeholder="Subject" />
              </div>
            </span>

            <p style="margin-top: 24px;" class="input-label">Message:</p>
            <div class="ext-input-wrp duplicate-input">
              <textarea type="text" placeholder="Message"></textarea>
            </div>
          </span>
        </div>

        <div class="button-row">
          <button
            class="ms-button-wide ms-outlined-button meal-button txt-center"
            @click="close()"
          >
            {{ backButtonTitle }}
          </button>
          <button
            class="ms-button-wide ms-filled-button meal-button"
            @click="submit()"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      giftAmount: 0,
      giftType: 1,
      popupState: 1,
      backButtonTitle: 'Close',
    }
  },
  mounted() {
    $nuxt.$emit('nav-bar-toggle', false)
  },
  beforeDestroy() {
    $nuxt.$emit('nav-bar-toggle', true)
  },
  methods: {
    close(force = false) {
      if (force) $nuxt.$emit('close-gift-card')
      if (this.popupState === 2) this.goBack()
      else $nuxt.$emit('close-gift-card')
    },
    submit() {
      // make an API call to the backend
      if (this.giftAmount != 0 && this.giftType != 0) {
        this.popupState = 2
        this.backButtonTitle = 'Back to amount'
      }
    },
    goBack() {
      this.popupState = 1
      this.backButtonTitle = 'Close'
    },
  },
}
</script>

<style scoped>
.product-img {
  max-height: 280px;
  width: 535px;
  object-fit: cover;
}

.ms-outlined-button {
  padding-left: 4px;
  padding-right: 4px;
}

.bold-p {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  text-align: left;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
  margin-bottom: 8px;
}

.type-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.price-options-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.type-option {
  padding: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(164, 182, 192, 0.18);
  border-radius: 4px;
  width: calc(50% - 4px);
  cursor: pointer;
  transition: 250ms ease;
}

.type-option:hover {
  box-shadow: 0px 4px 8px rgba(164, 182, 192, 0.3);
}

.type-option svg {
  display: inline-block;
  width: 22px;
  vertical-align: middle;
}

.type-option svg path {
  fill: #293f94;
  transition: 250ms ease;
}

.type-option p {
  display: inline-block;
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: #3c3c3c;
  margin-bottom: 0px;
  vertical-align: middle;
}

.type-option-active {
  background: #34bc89 !important;
  box-shadow: 0px 4px 8px rgba(164, 182, 192, 0.18);
}

.type-option-active p {
  color: #ffffff !important;
}

.type-option-active svg path {
  fill: #ffffff;
}

.price-option {
  width: calc(25% - 8px);
  text-align: center;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #3c3c3c;
  padding-top: 18px;
  padding-bottom: 18px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(164, 182, 192, 0.18);
  border-radius: 4px;
  cursor: pointer;
  transition: 250ms ease;
}

.price-option:hover {
  box-shadow: 0px 4px 8px rgba(164, 182, 192, 0.3);
}

.price-option-active {
  background: #34bc89 !important;
  box-shadow: 0px 4px 8px rgba(164, 182, 192, 0.18) !important;
  color: #ffffff !important;
}

.option-wrapper {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(164, 182, 192, 0.18);
  border-radius: 4px;
  padding: 16px;
  margin-top: 6px;
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.144706px;
  cursor: pointer;
  color: #3c3c3c;
  transition: 250ms ease;
}

.option-wrapper:hover {
  box-shadow: 0px 4px 8px rgba(164, 182, 192, 0.25);
}

.option-wrapper-active {
  color: #ffffff !important;
  background: #34bc89;
  box-shadow: 0px 4px 8px rgba(164, 182, 192, 0.18);
}

.duplicate-input {
  width: 100%;
}

.duplicate-input input {
  width: 100%;
}

.inside-content-wrapper {
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;
  background: #f6f9fc;
  border-radius: 8px;
}

.meal-button {
  width: 225px;
  margin-top: 24px;
  text-align: center;
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

.little-header strong {
  text-align: center;
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

.small-desc {
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.2px;
  color: #3c3c3c;
  margin-bottom: 8px;
}

.delete-header {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  /* or 119% */
  text-align: left;
  letter-spacing: -0.9856px;
  color: #3c3c3c;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 1282px) {
  .meal-name {
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
  }
  .value-pair p {
    font-size: 12px;
    line-height: 16px;
  }
  .meal-values {
    width: auto;
  }
  .meal-button {
    width: 48%;
    padding-left: 0px;
    padding-right: 0px;
  }
  .meal-button:last-child {
    margin-left: 2%;
    font-size: 15px;
    line-height: 20px;
  }
  .popup-wizard-content {
    max-width: 100%;
    height: 100%;
  }
  .mobile-popup-btns {
    position: absolute;
    bottom: 16px;
    width: calc(100% - 44px);
  }
  .button-row {
    position: absolute;
    bottom: 16px;
    left: 16px;
    width: calc(100% - 32px);
  }
  .delete-header {
    margin-top: 56px;
  }
}
</style>
