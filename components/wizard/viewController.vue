<template>
  <div class="mid-view">
    <selectMealsView v-show="wizardState === 1" />
    <preselected-menu-view v-if="wizardState === 7" />
    <review-order v-if="wizardState === 2" />
    <add-breakfast-view v-if="wizardState === 3" />
    <cart-view v-if="wizardState === 4" />
    <add-snack-view v-if="wizardState === 5" />
    <vegan-bowl-view v-if="wizardState === 6" />
  </div>
</template>

<script>
import selectMealsView from './views/selectMealsView.vue'
import reviewOrder from './views/reviewOrderView.vue'
import addBreakfastView from './views/addBreakfastView.vue'
import cartView from './views/cartView.vue'
import addSnackView from './views/addSnackView.vue'
import veganBowlView from './views/veganBowlView.vue'
import preselectedMenuView from '@/components/wizard/views/preselectedMenuView'

export default {
  data() {
    return {
      // 1 => meal selection
      // 2 => review order
      // 3 => add breakfast view
      // 4 => cart
      // 5 => add snacks view
      // 6 => vegan bowl
      wizardState: 1,
      latestState: null,
    }
  },
  components: {
    selectMealsView,
    reviewOrder,
    addBreakfastView,
    cartView,
    addSnackView,
    veganBowlView,
    preselectedMenuView,
  },
  // defines methods
  methods: {
    toggleView(id) {
      if (id === this.wizardState) this.wizardState = 1
      else this.wizardState = id
      this.latestState = id

      switch (id) {
        case 3:
          $nuxt.$emit('show-addon-order-panel', 'breakfast')
          break
        case 5:
          $nuxt.$emit('show-addon-order-panel', 'snack')
          break
        case 6:
          $nuxt.$emit('show-addon-order-panel', 'vegan-bowl')
          break
      }
    },
  },
  created() {
    // toggle wizard view
    var self = this
    this.$nuxt.$on('toggle-view', function (id) {
      // toggle review order
      self.toggleView(id)
    })
  },
}
</script>

<style scoped>
.mid-view {
  width: calc(100% - 480px);
  height: 100%;
  background-color: #f6f9fc;
  position: absolute;
  left: 240px;
  top: 0;
  z-index: 31;
}

@media only screen and (max-width: 1282px) {
  .mid-view {
    width: 100%;
    left: 0;
    top: 56px;
  }
}
</style>
