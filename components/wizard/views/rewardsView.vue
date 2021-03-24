<template>
  <div class="mid-view">
    <div class="meal-nav">
      <div class="order-view-selector">
        <div
          class="view-select-button"
          :class="{ 'view-select-button-active': orderViewActive == 1 }"
          @click="toggleSelection(1)"
        >
          My rewards
        </div>
        <div class="horizontal-space-mid"></div>
        <div
          @click="toggleSelection(2)"
          :class="{ 'view-select-button-active': orderViewActive == 2 }"
          class="view-select-button"
        >
          My refferals
        </div>
        <div class="horizontal-space-mid"></div>
        <div @click="toggleSelection(3)" :class="{ 'view-select-button-active': orderViewActive == 3 }"
          class="view-select-button"
        >
          Gift Certificate
        </div>
      </div>
    </div>

    <div>
      <span class="rewards" v-if="orderViewActive == 1">
        <rewards-default-view />
      </span>
      <span class="rewards" v-if="orderViewActive == 2">
        <rewards-refferals-view />
      </span>
      <span class="rewards" v-if="orderViewActive == 3">
        <rewards-gift-card-view />
      </span>
    </div>
  </div>
</template>

<script>
import { callUrlWithJwt } from './../../apiFunctions.js'
import rewardsDefaultView from '@/components/wizard/views/rewardsDefaultView'
import rewardsRefferalsView from '@/components/wizard/views/rewardsRefferalsView'
import rewardsGiftCardView from '@/components/wizard/views/rewardsGiftCardView'

export default {
  components: {
    rewardsDefaultView,
    rewardsRefferalsView,
    rewardsGiftCardView,
  },
  data() {
    return {
      // 1 -> my rewards
      // 2 -> my refferals
      // 3 -> gift certificate
      orderViewActive: 1,
      pointsInfoToggle: false,
    }
  },
  created() {
    let self = this

    this.$nuxt.$on('reload-refferal', () => {
      this.loadPointsAndRefcode()
    })
  },
  methods: {
    toggleSelection(val) {
      this.orderViewActive = val
    },
    togglePointsInfo() {
      if (this.pointsInfoToggle) this.pointsInfoToggle = false
      else this.pointsInfoToggle = true
    },
    async loadPointsAndRefcode() {
      const rewards = await callUrlWithJwt(
        this.$axios,
        this.$store,
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlRewardsInfo,
        'POST'
      )
      this.$store.commit('wizard/setRefferalCode', rewards.ref_code)
      this.$store.commit('wizard/setRewardPoints', rewards.points)
    },
  },
  mounted() {
    if (!this.$store.state.logedIn) {
      this.$router.push('/register')
    }else {
      this.loadPointsAndRefcode()
    }
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
  padding-bottom: 120px;
}

.earn-points-hints {
  padding: 25px;
  background: #ffffff;
  box-shadow: 0px 4px 8px #f0f1f5;
  border-radius: 8px;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 25px;
  position: relative;
}

.rewards h2 {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.9856px;
  color: #3c3c3c;
}

.earn-points-hints h2 {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.9856px;
  color: #3c3c3c;
  margin-top: 0px;
  margin-bottom: 0px;
}

.toggle-point-hints {
  transform: rotate(-90deg);
  position: absolute;
  top: 18px;
  right: 24px;
  cursor: pointer;
  transition: 350ms ease;
}

.toggle-point-hints-active {
  transform: rotate(90deg);
}

.toggle-point-hints path {
  fill: #1a1a1a;
}

.points-table {
  width: calc(50% - 26px);
}

.points-table-row {
  padding: 15px 40px;
}

.points-table-row:nth-child(even) {
  background: #f6f9fc !important;
}

.points-table-row:nth-child(odd) {
  background: white;
}

.points-table-row:first-child {
  background: #ffffff;
  filter: drop-shadow(0px 4px 8px #f0f1f5);
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;

  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
}

.points-table-row p {
  display: inline-block;
  margin-bottom: 0px;
}

.points-table-row p:first-child {
  width: 49%;
}

.points-table-row p:nth-child(2) {
  width: 24%;
  text-align: right;
}

.points-table-row p:nth-child(3) {
  width: 24%;
  text-align: right;
}

.earn-points-hints h2:before {
  display: none !important;
}

.inside-content {
  display: block;
  width: calc(100% - 64px);
  margin-left: auto;
  margin-right: auto;
}

.hint-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
}

.horizontal-spacer {
  width: 2px;
  height: 110px;
  background-color: #e0e9ef;
}

.hint-item img {
  height: 76px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.hint-item {
  width: 243px;
}

.hint-item p {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
  width: 100%;
  margin-top: 20px;
}

.pts-green {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  background: #34bc89;
  border-radius: 22px;
}

.earn-points-hints h2:before {
  display: none;
}

.order-view-selector {
  width: 100%;
  height: 100%;
}

.view-select-button-active {
  color: #3c3c3c !important;
}

.view-select-button-active::after {
  opacity: 1;
}

.view-select-button {
  display: inline-block;
  vertical-align: middle;
  width: calc(33% - 2px);
  margin-left: -4px;
  height: 100%;
  line-height: 65px;
  text-align: center;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.217059px;
  cursor: pointer;
  color: #a4b6c0;
  transition: 200ms ease;
  position: relative;
}

.view-select-button::after {
  content: '';
  width: 300px;
  height: 8px;
  background: #293f94;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  opacity: 0;
  transition: 200ms ease;
}

.view-select-button-active {
  color: #3c3c3c !important;
}

.view-select-button-active::after {
  opacity: 1;
}

.meal-nav {
  height: 65px;
  background-color: #ffffff;
  width: calc(100%);
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
}

.horizontal-space-mid {
  width: 2px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
  opacity: 0.1;
  background-color: #293f94;
}

@media only screen and (max-width: 1282px) {
  .mid-view {
    width: 100%;
    left: 0;
    top: 56px;
  }
  .view-select-button::after {
    width: 30%;
  }
  .nav-item {
    width: 90px;
    font-size: 14px;
    line-height: 19px;
  }
  .desktop-only-not-mobile {
    display: none;
  }
  .meal-values {
    display: none;
  }
  .buttons-wrapper {
    display: block;
    position: static;
    transform: none;
    margin-top: 4px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .buttons-wrapper button:first-child {
    margin-right: 4px;
  }
  .meal-item-icon-wrapper {
    width: 56px;
    height: 56px;
  }
  .ms-outlined-button {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .select-btn {
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .meal-info-wrapper {
    vertical-align: top;
    margin-left: 4px;
    max-width: 70%;
  }
  .select-meals-dishes p {
    font-size: 14px;
    line-height: 19px;
  }
  .select-meals-dishes .arrow-dp-box {
    height: 16px;
  }
  .w-meals-view-card {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .select-entry-meal {
    padding-top: 2px;
  }
  .finalize-order {
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    position: absolute;
    top: calc(100% - 112px);
    left: 0px;
    width: 100%;
    height: 56px;
    background: #ffffff;
    box-shadow: 0px -6px 8px rgba(164, 182, 192, 0.15);
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

  .add-btn {
    margin-top: 6px;
  }

  .stepper-price {
    display: block;
    position: static;
    transform: none;
    margin-top: 16px;
  }
  .w-meals-view-card {
    margin-top: 16px;
  }
  .meal-nav {
    width: 100%;
  }
  .profile-form-wrapper {
    width: calc(100% - 24px);
    margin: 0px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .view-select-button {
    width: calc(32% - 2px);
    font-size: 14px;
  }
}
</style>
