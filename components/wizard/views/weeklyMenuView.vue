<template>
  <div class="mid-view">
    <div class="meal-nav">
      <p class="meal-nav-header center-abs">
        Our menu <span class="thin-text">({{ weekName }})</span>
      </p>
    </div>

    <div class="new-profile-wrapper">
      <h2 style="margin-bottom: 4px;">Entrees</h2>
      <p>Calories based on 5 oz portion</p>

      <div v-for="meal in this.$store.state.wizard.products" :key="meal.id">
        <div class="w-meals-view-card meal-item">
          <div class="meal-item-icon-wrapper">
            <img
              :src="imgBaseUrl + meal.image"
              alt=""
            />
          </div>
          <div class="meal-info-wrapper">
            <p class="meal-item-name">{{ meal.name }}</p>
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
                <p>{{ meal.calories }}g Calories</p>
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
                <p>{{ meal.fat }}g Fat</p>
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
                <p>{{ meal.carbs }}g Carbs</p>
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
                <p>{{ meal.protein }}g Protein</p>
              </div>
            </div>
            <p style="margin-bottom: 0px;"><strong>Contains: </strong>{{ meal.contains }}</p>
            <p><strong>Compliant diets:</strong></p>
          </div>
        </div>
      </div>
      <div class="horizontal-spacer"></div>
      <h2 style="margin-bottom: 4px;">Sides</h2>
      <p>Calories based on 4.5 oz single portion.</p>

      <div v-for="meal in this.$store.state.wizard.sideDishes" :key="meal.id">
        <div class="w-meals-view-card meal-item">
          <div class="meal-item-icon-wrapper">
            <img :src="imgBaseUrl + meal.image" alt="" />
          </div>
          <div class="meal-info-wrapper">
            <p class="meal-item-name">{{ meal.name }}</p>
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
                <p>{{ meal.calories }}g Calories</p>
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
                <p>{{ meal.fat }}g Fat</p>
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
                <p>{{ meal.carbs }}g Carbs</p>
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
                <p>{{ meal.protein }}g Protein</p>
              </div>
            </div>
            <p style="margin-bottom: 0px;"><strong>Contains: </strong>{{ meal.contains }}</p>
            <p><strong>Compliant diets:</strong></p>
          </div>
        </div>
      </div>
    </div>
    <sign-in-component />
  </div>
</template>

<script>
import { callUrlWithJwt } from './../../apiFunctions.js'
import signInComponent from '@/components/wizard/components/signInComponent'

export default {
  components: {
    signInComponent
  },
  data() {
    return {
      weekName: '',
      imgBaseUrl: this.$store.state.apiConfiguration.baseImgUrl,
    }
  },
  mounted() {
    this.loadMenuName()
  },
  methods: {
    async loadMenuName() {
      let self = this
      await fetch(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlGetMealPlansName,
      )
        .then((res) => res.json())
        .then((res) => self.weekName = res.result)
    },
  },
}
</script>

<style scoped>
.mid-view {
  width: calc(100% - 240px);
  height: 100%;
  background-color: #f6f9fc;
  position: absolute;
  left: 240px;
  top: 0;
  z-index: 31;
  overflow: auto;
}

.meal-item-name {
  font-family: Nunito, Arial;
  font-style: normal !important;
  font-weight: 800 !important;
  font-size: 20px !important;
  line-height: 27px !important;
  color: #3c3c3c !important;
}

.horizontal-spacer {
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  height: 2px;
  background-color: #e0e9ef;
}

.meal-item-icon-wrapper {
  background: #e0e9ef;
  border-radius: 20px;
  width: 128px;
  height: 128px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
}

.value-pair p {
  margin-bottom: 0px !important;
}

.meal-item-icon-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 38px;
  object-fit: cover;
}

.meal-item-icon-wrapper svg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.new-profile-wrapper {
  margin: 16px 65px;
  width: calc(100% - 130px);
}

.new-profile-wrapper input {
  width: 100%;
}

.w-meals-view-card {
  margin-left: 0px !important;
  margin-top: 16px;
}

.thin-text {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
}

.meal-info-wrapper {
  display: inline-block;
  margin-left: 16px;
  vertical-align: middle;
}

.meal-values {
  margin-top: 6px;
}

.value-pair {
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 8px;
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

.meal-info {
  display: inline-block;
}

.orders-placed-time-items strong {
  font-family: Nunito, Arial;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
}

.orders-placed-time-items p {
  font-family: Nunito, Arial;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
  margin-top: 12px;
}

.new-profile-wrapper p {
  /* Web / 18 / Subtitles */
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
  margin-bottom: 8px;
}

.new-profile-wrapper h2 {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
  height: max-content;
}

.orders-placed-time {
  border: 2px solid #e0e9ef;
  border-radius: 8px;
  padding: 32px;
  background: #ffffff;
}

.new-profile-wrapper h2:before {
  content: none;
}

.sign-up-input h2 {
  font-family: Nunito;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.9856px;
  color: #ffffff;
  margin-top: 0px;
}

.sign-up-input h2:before {
  content: none;
}

.multiple-input-wrapper .new-input-wrapper {
  display: inline-block;
}

.new-profile-wrapper input {
  width: 100%;
}

.new-profile-wrapper p {
  /* Web / 18 / Subtitles */
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
  margin-bottom: 8px;
}

.new-profile-wrapper h2 {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
  height: max-content;
}

.new-profile-wrapper h2:before {
  content: none;
}

/* END OF GLOBAL STYLE TODO MOVE IT TO THE GLOBALS */

.meal-nav {
  height: 65px;
  background-color: #ffffff;
  width: calc(100%);
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
}

.meal-nav-header {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
  position: absolute;
  left: 65px !important;
  transform: translateY(-50%) !important;
}

#add_payment_method #payment ul.payment_methods,
.woocommerce-cart #payment ul.payment_methods,
.woocommerce-checkout #payment ul.payment_methods {
  text-align: left;
  padding: 1em;
  border-bottom: 1px solid #d3ced2;
  margin: 0;
  list-style: none outside;
}

#add_payment_method #payment ul.payment_methods li,
.woocommerce-cart #payment ul.payment_methods li,
.woocommerce-checkout #payment ul.payment_methods li {
  line-height: 2;
  text-align: left;
  margin: 0;
  font-weight: 400;
}

@media only screen and (max-width: 1282px) {
  .mid-view {
    width: 100%;
    left: 0;
    top: 56px;
  }
  .multiple-input-wrapper .new-input-wrapper {
    width: 100%;
    margin-left: 0px;
  }
  .new-profile-wrapper {
    width: calc(100% - 32px);
    margin: 16px;
  }
  .multiple-input-wrapper .new-input-wrapper input {
    margin-left: 0px !important;
  }
  .buttons-wrapper button:first-child {
    margin-right: 4px;
  }
  .select-meals-dishes p {
    font-size: 14px;
    line-height: 19px;
  }
  .select-meals-dishes .arrow-dp-box {
    height: 16px;
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
  .meal-nav {
    width: 100%;
  }
}
</style>
