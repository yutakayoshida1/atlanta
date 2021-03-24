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
          @click="close()"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5046 8.19899L16.3769 3.49921C17.2077 2.69781 17.2077 1.40245 16.3769 0.601051C15.5461 -0.20035 14.2031 -0.20035 13.3723 0.601051L8.5 5.30083L3.62768 0.601051C2.79686 -0.20035 1.45394 -0.20035 0.623117 0.601051C-0.207706 1.40245 -0.207706 2.69781 0.623117 3.49921L5.49544 8.19899L0.623117 12.8988C-0.207706 13.7002 -0.207706 14.9955 0.623117 15.7969C1.03747 16.1966 1.58143 16.3975 2.1254 16.3975C2.66936 16.3975 3.21333 16.1966 3.62768 15.7969L8.5 11.0972L13.3723 15.7969C13.7867 16.1966 14.3306 16.3975 14.8746 16.3975C15.4186 16.3975 15.9625 16.1966 16.3769 15.7969C17.2077 14.9955 17.2077 13.7002 16.3769 12.8988L11.5046 8.19899Z"
            fill="#3C3C3C"
          />
        </svg>

        <h2 class="delete-header">Change email address</h2>

        <div class="inside-content-wrapper">
          <p style="margin-bottom: 16px;" class="bold-p">
            Card Number
          </p>
          <div class="ext-input-wrp duplicate-input">
            <input
              v-model="cardNumber"
              placeholder="•••• •••• •••• ••••"
              type="tel"
            />
          </div>

          <span class="small-inputs-wrapper">
            <span class="half-input">
              <p class="bold-p" style="margin-top: 24px; margin-bottom: 16px;">
                Expiration
              </p>
              <div class="ext-input-wrp duplicate-input">
                <input v-model="expiration" placeholder="MM/YY" type="text" />
              </div>
            </span>

            <span class="half-input">
              <p class="bold-p" style="margin-top: 24px; margin-bottom: 16px;">
                Card Security Code
              </p>
              <div class="ext-input-wrp duplicate-input">
                <input v-model="cvc" type="text" placeholder="CSC" />
              </div>
            </span>
          </span>
        </div>

        <div class="button-row">
          <button
            class="ms-button-wide ms-outlined-button meal-button txt-center"
            @click="close()"
          >
            Cancel
          </button>
          <button
            class="ms-button-wide ms-filled-button meal-button"
            @click="submit()"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { callUrlWithJwt } from './../apiFunctions.js'

export default {
  data() {
    return {
      cardNumber: null,
      expiration: '',
      cvc: '',
    }
  },
  mounted() {
    $nuxt.$emit('nav-bar-toggle', false)
  },
  beforeDestroy() {
    $nuxt.$emit('nav-bar-toggle', true)
  },
  methods: {
    close() {
      $nuxt.$emit('close-add-card')
    },
    formatCardNumber() {
      if (this.cardNumber != null) {
        const value = this.cardNumber
        const v = value
          .toString()
          .replace(/\s+/g, '')
          .replace(/[^0-9]/gi, '')
        const matches = v.match(/\d{4,16}/g)
        const match = (matches && matches[0]) || ''
        const parts = []

        for (let i = 0, len = match.length; i < len; i += 4) {
          parts.push(match.substring(i, i + 4))
        }

        if (parts.length) {
          this.cardNumber = parts.join(' ')
        } else {
          this.cardNumber = value
        }
      }
    },
    async submit() {
      if (this.cardNumber != '' && this.expiration != '' && this.cvc != '') {
        const result = await callUrlWithJwt(
          this.$axios,
          this.$store,
          this.$store.state.apiConfiguration.baseUrl +
            this.$store.state.apiConfiguration.urlAddCard,
          'POST',
          {
            card_number: Number(this.cardNumber),
            expiration: this.expiration,
            cvc: Number(this.cvc),
          }
        )
        // check the result
        if (typeof result.status === 'undefined') this.close()
        // fire event that reloads the information about
        $nuxt.$emit('reload-profile-cards')
      }
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

.error-class {
  color: #fc7f7f !important;
}

.input-icon {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(calc(-50% - 5px));
  cursor: pointer;
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
  margin-bottom: 20px;
}

.horizontal-spacer {
  width: 100%;
  height: 2px;
  background-color: #e0e9ef;
  margin-top: 32px;
  border-radius: 1px;
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

.meal-name {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.9856px;
  color: #3c3c3c;
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
    margin-top: 8px;
  }
  .half-input {
    width: 100%;
    display: block;
  }
  .small-inputs-wrapper {
    display: block;
  }
}
</style>
