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

        <img
          class="preview-img"
          src="../../assets/Cards/Popup/Illustrations/error_wrong_password.png"
          alt=""
        />

        <h2
          class="delete-header"
        >Are you sure you want to delete the whole menu?</h2>

        <div class="button-row">
          <button
            class="ms-button-wide ms-outlined-button meal-button txt-center"
            @click="close()"
          >No, cancel</button>
          <button
            class="ms-button-wide ms-filled-button meal-button red-button"
            @click="deleteMeals();close()"
          >Yes, delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductById, deleteMealMenu } from './../mealFunctions.js'

export default {
  methods: {
    close() {
      $nuxt.$emit('close-popup-delete')
    },
    deleteMeals() {
      deleteMealMenu(this.$store)
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

.preview-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 200px;
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

.ms-button-wide {
  text-transform: uppercase;
  padding-left: 50px;
  pading-right: 50px;
}

.grey-tag-box {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #f6f9fc;
  border-radius: 2px;
  margin-top: 28px;
}

.red-button {
  background-color: #fc7f7f !important;
  border-color: #fc7f7f !important;
}

.red-button:hover {
  background-color: #f89494 !important;
  border-color: #f89494 !important;
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

.little-header {
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
  margin-bottom: 4px;
  text-align: center;
}

.little-header strong {
  text-align: center;
}

.small-header {
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.2px;
  color: #3c3c3c;
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
  max-width: 80%;
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
