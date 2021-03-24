<template>
  <div class="wrapper">
    <div class="img-wrapp">
      <img
        src="https://atlantamealprep.com/wp-content/uploads/2020/02/AMP-2019-066.jpg"
        class="half-divs hl-img desktop-hidden"
      />
      <div class="whiter"></div>
    </div>
    <div class="half-divs">
      <double-choice v-if="this.$store.state.wizard.step === 1" />
      <preselected-menus v-if="this.$store.state.wizard.step === 2" />
      <select-meal v-else-if="this.$store.state.wizard.step === 3" />
    </div>
    <img
      src="https://atlantamealprep.com/wp-content/uploads/2020/02/AMP-2019-066.jpg"
      class="half-divs hl-img mobile-hidden"
    />
  </div>
</template>

<script>
import doubleChoice from './doubleChoice.vue'
import selectMeal from './selectMeal.vue'
import preselectedMenus from './preselectedMenus.vue'

export default {
  components: {
    doubleChoice,
    selectMeal,
    preselectedMenus,
  },
  created() {
    const self = this
    this.$nuxt.$on('mobile-back-to-homepage', () => {
      self.$store.commit('wizard/setStep', 1)
      $nuxt.$emit('base-back-nav-toggle', false)
    })
  },
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 75vh;
  margin-bottom: 40px;
}

.half-divs {
  display: inline-block;
  vertical-align: top;
  height: 100%;
  width: 50%;
  margin-left: -4px;
}

.hl-img {
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  object-fit: cover;
  object-position: left;
}
.desktop-hidden {
  display: none;
}

@media only screen and (max-height: 800px) {
  .wrapper {
    height: 90vh;
  }
}

@media only screen and (max-width: 1282px) {
  .half-divs {
    display: block;
    width: 100%;
    margin-left: 0px;
  }
  .mobile-hidden {
    display: none !important;
  }
  .hl-img {
    border-radius: 0px;
    height: 100%;
  }
  .img-wrapp {
    position: absolute;
    top: 0;
  }
  .whiter {
    width: 100%;
    height: 130px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.0001) 0%,
      rgba(255, 255, 255, 0.0156863) 0.86%,
      rgba(255, 255, 255, 0.054902) 3.34%,
      rgba(255, 255, 255, 0.117647) 7.26%,
      rgba(255, 255, 255, 0.2) 12.48%,
      rgba(255, 255, 255, 0.290196) 18.82%,
      rgba(255, 255, 255, 0.392157) 26.13%,
      rgba(255, 255, 255, 0.501961) 34.25%,
      rgba(255, 255, 255, 0.607843) 43.01%,
      rgba(255, 255, 255, 0.709804) 52.25%,
      rgba(255, 255, 255, 0.8) 61.81%,
      rgba(255, 255, 255, 0.882353) 71.52%,
      rgba(255, 255, 255, 0.945098) 81.24%,
      rgba(255, 255, 255, 0.984314) 90.78%,
      #ffffff 100%
    );
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
  .wrapper {
    height: max-content;
  }
}
</style>
