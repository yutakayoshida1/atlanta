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

        <h2 v-if="state === 0" class="delete-header">Change password</h2>
        <span v-if="state === 1">
          <img
            class="preview-img"
            src="../../assets/Cards/Popup/Illustrations/Success.png"
            alt=""
          />

          <h2 class="delete-header">Success!</h2>
          <p class="bold-p info-p">
            Your password was updated! Don't forget to use it next time you login.
          </p>
        </span>

        <span v-if="state === 2">
          <img
            class="preview-img"
            src="../../assets/Cards/Popup/Illustrations/error_wrong_password.png"
            alt=""
          />

          <h2 class="delete-header">Oops!</h2>
          <p class="bold-p info-p">
            Seems like you've entered an incorrect current password. Try again!
          </p>
        </span>

        <div v-if="state === 0" class="inside-content-wrapper">
          <p style="margin-bottom: 16px;text-align: left;" class="bold-p">Current password</p>
          <span>
            <div class="ext-input-wrp duplicate-input">
              <input
                id="popup-password-change-psw"
                v-model="actualPassword"
                type="password"
              />
              <svg
                class="input-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="togglePasswordType('popup-password-change-psw')"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0001 5.25C6.97699 5.25 2.75161 8.11169 1.5 12C2.75161 15.8886 6.97722 18.75 11.9999 18.75C17.023 18.75 21.2484 15.8883 22.5 12C21.2484 8.11144 17.023 5.25 12.0001 5.25ZM12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                  fill="#A4B6C0"
                />
              </svg>
            </div>

            <div class="horizontal-spacer"></div>

            <p class="bold-p" style="margin-top: 24px; margin-bottom: 16px;text-align: left;">
              Enter new password
            </p>
            <div class="ext-input-wrp duplicate-input">
              <input
                v-model="newPassword"
                type="password"
                @input="checkPasswordStrength()"
              />
              <svg
                v-show="!newPasswordOk"
                class="input-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1.875C6.40812 1.875 1.875 6.40812 1.875 12C1.875 17.5919 6.40812 22.125 12 22.125C17.5919 22.125 22.125 17.5919 22.125 12C22.125 6.40812 17.5919 1.875 12 1.875Z"
                  fill="#34BC89"
                />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                >
                  <path
                    d="M12 1.875C6.40812 1.875 1.875 6.40812 1.875 12C1.875 17.5919 6.40812 22.125 12 22.125C17.5919 22.125 22.125 17.5919 22.125 12C22.125 6.40812 17.5919 1.875 12 1.875Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <rect y="-0.375" width="24" height="24.75" fill="#34BC89" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.92385 16.4266L6.37389 13.8768C5.87537 13.3783 5.87537 12.5726 6.37389 12.0741C6.87241 11.5756 7.67819 11.5756 8.17671 12.0741L9.62764 13.525L15.6644 7.76826C16.0545 7.1818 16.845 7.02371 17.4328 7.41511C18.018 7.80651 18.1761 8.59695 17.786 9.18341L10.886 16.2329C10.6744 16.5503 10.3302 16.7568 9.95148 16.7938C9.90813 16.7976 9.86733 16.8002 9.82526 16.8002C9.48867 16.8002 9.16355 16.6676 8.92385 16.4266Z"
                    fill="white"
                  />
                  <mask
                    id="mask1"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="6"
                    y="7"
                    width="12"
                    height="10"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.92385 16.4266L6.37389 13.8768C5.87537 13.3783 5.87537 12.5726 6.37389 12.0741C6.87241 11.5756 7.67819 11.5756 8.17671 12.0741L9.62764 13.525L15.6644 7.76826C16.0545 7.1818 16.845 7.02371 17.4328 7.41511C18.018 7.80651 18.1761 8.59695 17.786 9.18341L10.886 16.2329C10.6744 16.5503 10.3302 16.7568 9.95148 16.7938C9.90813 16.7976 9.86733 16.8002 9.82526 16.8002C9.48867 16.8002 9.16355 16.6676 8.92385 16.4266Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1)">
                    <rect
                      x="2.25"
                      y="2.25"
                      width="19.5"
                      height="19.5"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <p
              style="margin-bottom: 0px;"
              class="input-info"
              :class="{ 'color-red': newPasswordOk }"
            >
              Must include upper and lower case letters, numbers, and symbols
              like ! ? $ % & (minimum length is 6 characters)
            </p>

            <p class="bold-p" style="margin-top: 24px; margin-bottom: 16px;text-align: left;">
              Confirm new password
            </p>
            <div class="ext-input-wrp duplicate-input">
              <input
                v-model="confirmPassword"
                :class="{
                  'input-custom-error':
                    newPassword != confirmPassword && !newPasswordOk,
                }"
                type="password"
              />
              <svg
                v-show="(confirmPassword != '')"
                class="input-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="confirmPassword = ''"
              >
                <path
                  d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1Z"
                  fill="#A4B6C0"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0559 12.0002L6.90319 8.8474C6.3656 8.30979 6.3656 7.44081 6.90319 6.90321C7.44078 6.3656 8.30973 6.3656 8.84732 6.90321L12 10.056L15.1527 6.90321C15.6903 6.3656 16.5592 6.3656 17.0968 6.90321C17.6344 7.44081 17.6344 8.30979 17.0968 8.8474L13.9441 12.0002L17.0968 15.1529C17.6344 15.6906 17.6344 16.5595 17.0968 17.0971C16.8287 17.3653 16.4767 17.5 16.1247 17.5C15.7728 17.5 15.4208 17.3653 15.1527 17.0971L12 13.9444L8.84732 17.0971C8.57921 17.3653 8.22724 17.5 7.87526 17.5C7.52328 17.5 7.1713 17.3653 6.90319 17.0971C6.3656 16.5595 6.3656 15.6906 6.90319 15.1529L10.0559 12.0002Z"
                  fill="white"
                />
              </svg>
              <p
                v-show="(newPassword != confirmPassword && !newPasswordOk)"
                class="input-p-error-message"
              >
                Passwords don't match
              </p>
            </div>
          </span>
        </div>

        <div class="button-row">
          <button
            class="ms-button-wide ms-outlined-button meal-button txt-center"
            @click="close()"
            v-if="state === 0"
          >
            Cancel
          </button>
          <button
            v-if="state === 0"
            class="ms-button-wide ms-filled-button meal-button"
            :disabled="
              !(
                confirmPassword == newPassword &&
                actualPassword != '' &&
                !newPasswordOk
              )
            "
            @click="submit()"
          >
            Submit
          </button>
          <button
            v-if="state === 1"
            @click="close()"
            class="ms-button-wide ms-filled-button meal-button full-width-button"
          >
            TAKE ME BACK
          </button>

          <button
            class="ms-button-wide ms-outlined-button meal-button txt-center"
            @click="close()"
            v-if="state === 2"
          >
            CANCEL
          </button>
          <button
            v-if="state === 2"
            @click="state = 0"
            class="ms-button-wide ms-filled-button meal-button"
          >
            TRY AGAIN
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
      actualPassword: '',
      newPassword: '',
      confirmPassword: '',
      // state 1 = success
      // state 2 = error
      state: 0,
      newPasswordOk: true,
      confirmPasswordBoolean: false,
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
      $nuxt.$emit('close-change-password')
    },
    togglePasswordType(inputId) {
      const inputElm = document.getElementById(inputId)
      if (inputElm.type === 'password') inputElm.type = 'text'
      else inputElm.type = 'password'
    },
    checkPasswordStrength() {
      if (this.password !== '') {
        let length, symbols, upper, lower, digits
        // check the structure of the new password
        if (this.newPassword.length < 6) {
          // if the password is longer than 6 characters
          length = false
        } else length = true

        // reGexes
        const symbolsRegex = RegExp(
          '[ `!@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|,.<>\\/?~]'
        )
        const lowerRegex = RegExp('(.*[a-z].*)')
        const upperRegex = RegExp('(.*[A-Z].*)')
        const digitRegex = RegExp('(.*\\d.*)')

        const newPassword = this.newPassword.toString()

        if (lowerRegex.test(newPassword)) lower = true
        else lower = false

        if (digitRegex.test(newPassword)) digits = true
        else digits = false

        if (upperRegex.test(newPassword)) upper = true
        else upper = false

        if (symbolsRegex.test(newPassword)) symbols = true
        else symbols = false

        if (
          length == true &&
          symbols == true &&
          upper == true &&
          lower == true &&
          digits == true
        ) {
          this.newPasswordOk = false
        } else {
          this.newPasswordOk = true
        }
      }
    },
    async submit() {
      if (this.newPassword === this.confirmPassword) {
        const result = await callUrlWithJwt(
          this.$axios,
          this.$store,
          this.$store.state.apiConfiguration.baseUrl +
            this.$store.state.apiConfiguration.urlChangePassword,
          'POST',
          {
            password: this.actualPassword,
            new_password: this.newPassword,
          }
        )

        if (result.status == 'success') this.state = 1
        else this.state = 2
      }
    },
    checkConfirmedPassword() {
      if (this.newPassword == this.confirmPassword) {
        this.confirmPasswordBoolean = true
      } else {
        this.confirmPasswordBoolean = false
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

.full-width-button {
  width: 100% !important;
}

.preview-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 200px;
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
  text-align: center;
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

.color-red {
  color: #fc7f7f;
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
  text-align: center;
  letter-spacing: -0.9856px;
  color: #3c3c3c;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.delete-header::before {
  content: none;
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
}
</style>
