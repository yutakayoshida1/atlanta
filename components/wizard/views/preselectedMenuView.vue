<template>
  <div>
    <div class="navbar-scroll-wrapper">
      <div id="" v-show="scrollToLeft" class="slide-left-wrapper">
        <svg
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="scrollNavbarHorizontally('left')"
        >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0607 15.4393C10.6464 16.0251 10.6464 16.9749 10.0607 17.5607C9.47487 18.1464 8.52513 18.1464 7.93934 17.5607L0.43934 10.0607C-0.146447 9.47487 -0.146447 8.52513 0.43934 7.93934L7.93934 0.43934C8.52513 -0.146447 9.47487 -0.146447 10.0607 0.43934C10.6464 1.02513 10.6464 1.97487 10.0607 2.56066L3.62132 9L10.0607 15.4393Z" fill="#293F94"/>
        </svg>
      </div>

      <div v-show="scrollToRight" class="slide-right-wrapper">
        <svg
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="scrollNavbarHorizontally('right')"
        >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0607 15.4393C10.6464 16.0251 10.6464 16.9749 10.0607 17.5607C9.47487 18.1464 8.52513 18.1464 7.93934 17.5607L0.43934 10.0607C-0.146447 9.47487 -0.146447 8.52513 0.43934 7.93934L7.93934 0.43934C8.52513 -0.146447 9.47487 -0.146447 10.0607 0.43934C10.6464 1.02513 10.6464 1.97487 10.0607 2.56066L3.62132 9L10.0607 15.4393Z" fill="#293F94"/>
        </svg>
      </div>
      <div id="navbar-meal" class="meal-nav">
        <div
          v-if="this.$store.state.wizard.selectPreparedMenus === 0"
          class="meal-item-wrapper"
          id="meal-items-wrapper-content"
        >
          <div
            v-for="n in this.$store.state.wizard.amountOfMeals"
            :id="'n-i-' + n"
            :key="n"
            :class="{ 'nav-item n-i-w ': true, 'nav-item-available': (n === 1) }"
          >
            <p>Meal</p>
          </div>
          <button class="add-btn" @click="addMealPopup = true">+ ADD</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
