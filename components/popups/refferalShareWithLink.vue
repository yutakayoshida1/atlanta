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

        <h2 class="delete-header">Share via Link</h2>
        <p class="email-info">Copy this link to share your referral code with your friends, family, and neighbors through any social media or as text.</p>

        <div class="inside-content-wrapper">
          <p class="link-p">{{ inviteUrl }}</p>
        </div>

        <div class="button-row">
          <button
            class="ms-button-wide ms-outlined-button meal-button txt-center"
            @click="close()"
          >
            Cancel
          </button>
          <button @click="copyLink()" class="ms-button-wide ms-filled-button meal-button">
            {{ copyTitle }}
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
      inviteUrl: '',
      copyTitle: 'COPY LINK',
    }
  },
  mounted() {
    this.inviteUrl = window.location.host + '/register?invite=' + this.$store.state.wizard.refferalCode
    $nuxt.$emit('nav-bar-toggle', false)
  },
  beforeDestroy() {
    $nuxt.$emit('nav-bar-toggle', true)
  },
  methods: {
    close() {
      $nuxt.$emit('close-share-link')
    },
    submit() {
      // make an API call to the backend
    },
    copyLink() {
      const el = document.createElement('textarea')
      el.value = this.inviteUrl
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      this.copyTitle = 'COPPIED'
    },
  },
}
</script>

<style scoped>
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

.email-info {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
}

.duplicate-input {
  width: 100%;
}

.link-p {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.4032px;
  color: #3c3c3c;
  margin-bottom: 0px;
}

.duplicate-input input {
  width: 100%;
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
    margin-top: 56px;
  }
}
</style>
