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

        <span v-if="state === 2">
          <img
            class="preview-img"
            src="../../assets/Cards/Popup/Illustrations/Success.png"
            alt=""
          />

          <h2 class="delete-header">Success!</h2>
          <p class="bold-p info-p">
            Your email address was successfully changed. Next time you login, don't forget to use a new email.
          </p>
        </span>

        <div v-if="state === 0" class="inside-content-wrapper">
          <p style="margin-bottom: 16px; text-align: left;" class="bold-p">
            Current email address
          </p>
          <div class="ext-input-wrp duplicate-input">
            <input
              :value="this.$store.state.wizard.userEmail"
              type="email"
              readonly
            />
          </div>

          <p
            class="bold-p"
            style="margin-top: 24px; margin-bottom: 16px; text-align: left;"
          >
            New email address
          </p>
          <div class="ext-input-wrp duplicate-input">
            <input v-model="newEmail" type="text" />
          </div>

          <div class="horizontal-spacer"></div>

          <p
            class="bold-p"
            style="margin-top: 24px; margin-bottom: 16px; text-align: left;"
          >
            Enter your password
          </p>
          <div class="ext-input-wrp duplicate-input">
            <input
              v-model="password"
              :class="{ 'input-custom-error': errorMessageShow }"
              type="password"
            />
          </div>
          <p
            v-if="errorMessageShow"
            style="margin-bottom: 0px;"
            class="error-label"
          >
            Incorrect password. Try again
          </p>
        </div>

        <div v-if="state === 1" class="inside-content-wrapper">
          <p
            class="bold-p"
            style="margin-top: 0px; margin-bottom: 8px; text-align: left;"
          >
            Enter the code
          </p>
          <p style="margin-bottom: 16px; margin-top: 0px;" class="input-info" :class="{'input-p-error-message': errorMessageShow}">
            Go to your previous email address to find a verification code
          </p>
          <div class="ext-input-wrp duplicate-input">
            <input v-model="confirmationCode" type="text" />
          </div>
        </div>

        <div class="button-row">
          <button
            v-if="state === 0"
            class="ms-button-wide ms-outlined-button meal-button txt-center"
            @click="close()"
          >
            Cancel
          </button>
          <button
            v-if="state === 1"
            class="ms-button-wide ms-outlined-button meal-button txt-center"
            @click="state = 0"
          >
            Cancel
          </button>
          <button
            v-if="state === 0"
            class="ms-button-wide ms-filled-button meal-button"
            :disabled="!(newEmail != '' && password != '')"
            @click="submit()"
          >
            Submit
          </button>
          <button
            v-if="state === 1"
            class="ms-button-wide ms-filled-button meal-button"
            @click="verify()"
            :disabled="!(confirmationCode != '' && confirmationCode.length > 4)"
          >
            Verify
          </button>
          <button
            v-if="state === 2"
            class="ms-button-wide ms-filled-button meal-button full-width-button"
            @click="close()"
          >
            TAKE ME BACK
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
      newEmail: '',
      password: '',
      state: 0,
      confirmationCode: '',
      errorMessageShow: false,
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
      $nuxt.$emit('close-change-email')
    },
    async submit() {
      const result = await callUrlWithJwt(
        this.$axios,
        this.$store,
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlChangeEmail,
        'POST',
        {
          password: this.password,
          new_email: this.newEmail,
        }
      )

      if (result.status == 'error') {
        this.errorMessageShow = true
      } else if (result.status == 'success') {
        this.errorMessageShow = false
        this.state = 1
      }
    },
    async verify() {
      const result = await callUrlWithJwt(
        this.$axios,
        this.$store,
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlChangeEmailConfirmation,
        'POST',
        {
          code: this.confirmationCode,
        }
      )

      if (result.status == 'error') {
        this.errorMessageShow = true
      } else if (result.status == 'success') {
        this.state = 2
        $nuxt.$emit('reload-profile-info')
      }
    },
  },
}
</script>

<style scoped>
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

.error-label {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.2px;
  color: #fc7c7c;
}

.preview-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 200px;
}

.duplicate-input {
  width: 100%;
}

.duplicate-input input {
  width: 100%;
}

.full-width-button {
  width: 100% !important;
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

@media only screen and (max-width: 1282px) {
  .value-pair p {
    font-size: 12px;
    line-height: 16px;
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
