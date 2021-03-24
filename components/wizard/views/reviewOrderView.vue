<template>
  <div class="view">
    <div class="meal-nav">
      <div class="return-nav-arrow" @click="goBack()">
        <svg
          width="14"
          height="24"
          viewBox="0 0 14 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.4142 20.5858C14.1953 21.3668 14.1953 22.6332 13.4142 23.4142C12.6332 24.1953 11.3668 24.1953 10.5858 23.4142L0.585786 13.4142C-0.195262 12.6332 -0.195262 11.3668 0.585786 10.5858L10.5858 0.585786C11.3668 -0.195262 12.6332 -0.195262 13.4142 0.585786C14.1953 1.36684 14.1953 2.63317 13.4142 3.41421L4.82843 12L13.4142 20.5858Z"
            fill="#1A1A1A"
          />
        </svg>
      </div>
      <p class="meal-nav-header center-abs">REVIEW ORDER</p>
    </div>

    <div class="view-content center-hor-margin">
      <!-- into foreach -->
      <span v-for="n in this.$store.state.wizard.amountOfMeals" v-bind:key="n">
        <review-meal-card v-bind:meal-index="n" />
      </span>
      <breakfast-review-meal-card
        v-if="this.$store.state.cart.selectedBreakfast.length === 2"
      />
      <snack-review-meal-card
        v-if="this.$store.state.cart.selectedSnacks.length === 2"
      />
      <vegan-bowl-review-meal-card
        v-if="this.$store.state.cart.selectedVeganBowl.length === 4"
      />
    </div>
  </div>
</template>

<script>
import reviewMealCard from './../reviewMealCard.vue'
import breakfastReviewMealCard from '@/components/wizard/breakfastReviewMealCard'
import snackReviewMealCard from '@/components/wizard/snackReviewMealCard'
import veganBowlReviewMealCard from '@/components/wizard/views/veganBowlReviewMealCard'

export default {
  components: {
    reviewMealCard,
    breakfastReviewMealCard,
    snackReviewMealCard,
    veganBowlReviewMealCard,
  },
  methods: {
    goBack() {
      $nuxt.$emit('toggle-view', 2)
      $nuxt.$emit('nav-bar-toggle', true)

      if (window.innerWidth <= 1282) {
        $nuxt.$emit('order-panel-mobile', true)
        $nuxt.$emit('nav-bar-toggle', false)
      }
    },
  },
}
</script>

<style scoped>
.view {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.view-content {
  width: calc(100% - 48px);
  margin-top: 20px;
}

.meal-nbr-index {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 8px;
  margin-top: 8px;
}

.meal-nbr-index:nth-of-type(1) {
  margin-top: 0px;
}

.meal-nav {
  height: 65px;
  background-color: #ffffff;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  position: relative;
}

.return-nav-arrow {
  height: 100%;
  width: 56px;
  position: relative;
  cursor: pointer;
}

.return-nav-arrow svg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.meal-nav-header {
  font-family: Nunito;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #3c3c3c;
  position: absolute;
}

.return-nav-arrow svg path {
  transition: 250ms ease;
}

.return-nav-arrow:hover svg path {
  fill: #434343;
}

@media only screen and (max-width: 1282px) {
  .view {
    transform: translateY(-56px);
  }
}
</style>
