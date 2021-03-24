<template>
  <div class="choose-homepage">
    <h2>
      Fresh, local, & healthy meals delivered to your door.
    </h2>
    <div>
      <p class="mobile-hidden">Select how you want to order.</p>
      <div class="long-btn-wide" @click="nextStep(3)">
        <div class="fruit-icon fruit-icon-img select-meal-img">
          <img src="./../../assets/select_meals.png" alt="" />
        </div>
        <div class="text-wrapper">
          <b>Select Meals</b>
          <p>Select your own list of meals</p>
        </div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="right-arrow"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.58579 24.5858C8.80474 25.3668 8.80474 26.6332 9.58579 27.4142C10.3668 28.1953 11.6332 28.1953 12.4142 27.4142L22.4142 17.4142C23.1953 16.6332 23.1953 15.3668 22.4142 14.5858L12.4142 4.58579C11.6332 3.80474 10.3668 3.80474 9.58579 4.58579C8.80474 5.36684 8.80474 6.63317 9.58579 7.41421L18.1716 16L9.58579 24.5858Z"
            fill="#1A1A1A"
          />
          <mask
            id="mask1"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="9"
            y="4"
            width="14"
            height="24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.58579 24.5858C8.80474 25.3668 8.80474 26.6332 9.58579 27.4142C10.3668 28.1953 11.6332 28.1953 12.4142 27.4142L22.4142 17.4142C23.1953 16.6332 23.1953 15.3668 22.4142 14.5858L12.4142 4.58579C11.6332 3.80474 10.3668 3.80474 9.58579 4.58579C8.80474 5.36684 8.80474 6.63317 9.58579 7.41421L18.1716 16L9.58579 24.5858Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1)">
            <rect
              width="32"
              height="32"
              transform="matrix(0 1 1 0 0 0)"
              fill="#3C3C3C"
            />
          </g>
        </svg>
      </div>
      <div class="long-btn-wide" @click="nextStep(2)">
        <div class="fruit-icon fruit-icon-img select-menu-img">
          <img src="./../../assets/select_menu.png" alt="" />
        </div>
        <div class="text-wrapper">
          <b>Select Menu</b>
          <p>Predefined list of meals</p>
        </div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="right-arrow"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.58579 24.5858C8.80474 25.3668 8.80474 26.6332 9.58579 27.4142C10.3668 28.1953 11.6332 28.1953 12.4142 27.4142L22.4142 17.4142C23.1953 16.6332 23.1953 15.3668 22.4142 14.5858L12.4142 4.58579C11.6332 3.80474 10.3668 3.80474 9.58579 4.58579C8.80474 5.36684 8.80474 6.63317 9.58579 7.41421L18.1716 16L9.58579 24.5858Z"
            fill="#1A1A1A"
          />
          <mask
            id="mask2"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="9"
            y="4"
            width="14"
            height="24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.58579 24.5858C8.80474 25.3668 8.80474 26.6332 9.58579 27.4142C10.3668 28.1953 11.6332 28.1953 12.4142 27.4142L22.4142 17.4142C23.1953 16.6332 23.1953 15.3668 22.4142 14.5858L12.4142 4.58579C11.6332 3.80474 10.3668 3.80474 9.58579 4.58579C8.80474 5.36684 8.80474 6.63317 9.58579 7.41421L18.1716 16L9.58579 24.5858Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask2)">
            <rect
              width="32"
              height="32"
              transform="matrix(0 1 1 0 0 0)"
              fill="#3C3C3C"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextStep(step) {
      this.$store.commit('wizard/setStep', step)
      $nuxt.$emit('base-back-nav-toggle', true)
    },
  },
}
</script>

<style scoped>
.long-btn-wide {
  width: 484px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 22px;
  padding-bottom: 22px;
  background: #e0e9ef;
  border-radius: 8px;
  vertical-align: top;
  cursor: pointer;
  position: relative;
  transition: 250ms ease;
}

.select-meal-img img {
  width: 45px !important;
  height: 45px !important;
  max-width: max-content !important;
}

.select-menu-img img {
  width: 24px !important;
  height: 37px !important;
  max-width: max-content !important;
}

.long-btn-wide:hover {
  background-color: #c1d4e0;
}

.long-btn-wide:last-child {
  margin-top: 16px;
}

.long-btn-wide:hover .right-arrow {
  right: 0px;
}

.right-arrow {
  position: absolute;
  top: 50%;
  right: -8px;
  transform: translate(-50%, -50%);
  transition: 250ms ease;
}

.long-btn-wide .text-wrapper {
  display: inline-block;
}

.text-wrapper {
  margin-left: 16px;
  vertical-align: top;
}

.text-wrapper p {
  margin-bottom: 0px;
  margin-top: -4px;
}

.fruit-icon-img {
  width: 58px !important;
  height: 58px !important;
  padding: 0px;
  position: relative;
}

.fruit-icon-img img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.fruit-icon {
  padding: 18px;
  background: #ffffff;
  border-radius: 16px;
  width: max-content;
  height: 58px;
  display: inline-block;
}

.fruit-icon svg {
  transform: translateY(-2px);
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
  color: #3c3c3c;
}

@media only screen and (max-width: 1282px) {
  .choose-homepage h2 {
    font-size: 24px;
    line-height: 32px;
    margin-top: 0px;
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
    margin-top: 35vh;
    z-index: 20;
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
}
</style>
