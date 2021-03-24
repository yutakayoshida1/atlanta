<template>
  <span class="main-span">
    <div class="earn-points-hints">
      <svg
        width="14"
        height="24"
        viewBox="0 0 14 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="toggle-point-hints"
        :class="{ 'toggle-point-hints-active': pointsInfoToggle }"
        @click="togglePointsInfo()"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.4142 20.5858C14.1953 21.3668 14.1953 22.6332 13.4142 23.4142C12.6332 24.1953 11.3668 24.1953 10.5858 23.4142L0.585786 13.4142C-0.195262 12.6332 -0.195262 11.3668 0.585786 10.5858L10.5858 0.585786C11.3668 -0.195262 12.6332 -0.195262 13.4142 0.585786C14.1953 1.36684 14.1953 2.63317 13.4142 3.41421L4.82843 12L13.4142 20.5858Z"
          fill="#1A1A1A"
        />
      </svg>

      <h2>Earn Points on Each Purchase Redeemable For Discounts</h2>
      <div v-show="pointsInfoToggle" class="hint-wrapper">
        <div class="hint-item">
          <img src="../../../assets/rewards_01.png" alt="" />
          <p>
            Earn 10 points for every $1 spent. Points never expire. You earn
            ’em, you keep ’em.
          </p>
        </div>

        <div class="horizontal-spacer"></div>

        <div class="hint-item">
          <img src="../../../assets/rewards_02.png" class="reward-hint-bigger" alt="" />
          <p>
            Earn 10 points for every $1 spent. Points never expire. You earn
            ’em, you keep ’em.
          </p>
        </div>

        <div class="horizontal-spacer"></div>

        <div class="hint-item">
          <img src="../../../assets/rewards_03.png" alt="" />
          <p>
            Earn 10 points for every $1 spent. Points never expire. You earn
            ’em, you keep ’em.
          </p>
        </div>
      </div>
    </div>

    <span class="inside-content">
      <h2>The Rewards</h2>
      <p class="current-ballance">
        Current Points Ballance:
        <span class="pts-green">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.6003 2.00847C9.36855 2.31941 9.17298 2.58182 8.9985 2.71582C8.82541 2.58395 8.66344 2.3389 8.47113 2.04795C7.91923 1.21296 7.1175 0 5.08617 0C3.44555 0 2.64949 1.25781 2.88248 1.89569C3.17372 2.67937 3.98919 3.09854 5.32889 3.11677C7.74617 3.13499 10.1635 3.13499 12.5807 3.11677C13.9496 3.09854 14.7942 2.67937 15.1145 1.93214C15.3766 1.27604 14.4775 0 12.521 0C11.0972 0 10.2196 1.17754 9.6003 2.00847ZM7.86345 8.45397V5.10472C7.07342 5.10472 6.30348 5.09802 5.54682 5.09144H5.54681H5.5468C4.07197 5.07861 2.64759 5.06622 1.2232 5.10472C0.116496 5.13384 0 5.94931 0 6.56092C0 8.47657 0.437515 8.47202 1.88988 8.45692C2.02731 8.45549 2.17382 8.45397 2.32991 8.45397H4.25209H7.86345ZM7.86254 10.9545V18.4431C7.3656 18.4431 6.87049 18.4468 6.37722 18.4504H6.37709H6.37705H6.37701C4.90455 18.4613 3.44842 18.4721 2.00863 18.3848C1.16404 18.3848 1.01842 17.8315 1.01842 17.249C0.999474 15.7333 1.00518 14.5488 1.01148 13.2405C1.01486 12.5377 1.01842 11.7992 1.01842 10.9545H7.86254ZM10.3645 18.5013V10.9545H17.1794V17.2781C17.1794 18.1227 16.5096 18.5013 15.7233 18.5013H10.3645ZM10.3645 8.45387V5.10462C10.9497 5.10462 11.5312 5.10278 12.11 5.10095C13.8356 5.0955 15.5366 5.09013 17.2377 5.13374C18.0609 5.18863 18.0051 6.17428 17.9959 6.33675C17.9953 6.34671 17.9949 6.35358 17.9949 6.35695C17.9949 8.50944 17.7767 8.50392 16.2119 8.46433C16.0617 8.46053 15.8992 8.45642 15.7233 8.45387H10.3645Z"
              fill="white"
            />
          </svg>
          {{ this.$store.state.wizard.rewardPoints }} pts.</span
        >
      </p>

      <div>
        <div class="points-table">
          <div class="points-table-row">
            <p>Points earned</p>
            <p>Date</p>
            <p>Order</p>
          </div>

          <div class="points-table-row">
            <p>Points earned</p>
            <p>Date</p>
            <p>Order</p>
          </div>

          <div class="points-table-row">
            <p>Points earned</p>
            <p>Date</p>
            <p>Order</p>
          </div>

          <div class="points-table-row">
            <p>Points earned</p>
            <p>Date</p>
            <p>Order</p>
          </div>
        </div>

        <div class="circular-points-wrapper">
          <div id="progress-bar-wrapper" class="progress-bar-item">
          <span class="inside-bar-content">
            <p>
              {{ this.$store.state.wizard.rewardPoints }}
            </p>
            <p>
              Points
            </p>
          </span>
          </div>
          <p class="circular-bar-hint">
            You’re
            {{ 5000 - Number(this.$store.state.wizard.rewardPoints) }} points
            away from earning $10 in credit!
          </p>
        </div>
      </div>
    </span>
  </span>
</template>

<script>
export default {
  data() {
    return {
      pointsInfoToggle: true,
      globalBar: null
    }
  },
  methods: {
    togglePointsInfo() {
      if (this.pointsInfoToggle) this.pointsInfoToggle = false
      else this.pointsInfoToggle = true
    },
    animateBar() {
      // count the percentage
      const percentage = this.$store.state.wizard.rewardPoints / 5000
      this.globalBar.animate(percentage.toFixed(2))
    },
  },
  mounted() {
    // init the circular progress bar
    let ProgressBar = require('progressbar.js')
    let bar = new ProgressBar.Circle('#progress-bar-wrapper', {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      color: '#34BC89',
      trailColor: '#F6F9FC',
      trailWidth: 6,
      svgStyle: null,
    })
    this.globalBar = bar
    this.animateBar()
  },
}
</script>

<style scoped>
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

.reward-hint-bigger {
  transform: scale(1.5);
}

.circular-bar-hint {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
  max-width: 280px;
  margin-bottom: 0px;
  margin-top: 26px;
  display: block;
  margin-left: auto;
  margin-right: auto;
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

.progress-bar-item {
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 40px;
  position: relative;
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

.circular-points-wrapper {
  width: calc(50% - 26px);
  display: inline-block;
  background: #ffffff;
  box-shadow: 0px 4px 8px #f0f1f5;
  border-radius: 8px;
  padding: 40px;
  vertical-align: top;
  height: 100%;
  margin-left: 24px;
}

.inside-bar-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.inside-bar-content p:first-child {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 56px;
  text-align: center;
  letter-spacing: -2.80118px;
  color: #3c3c3c;
  margin-bottom: 0px;
}

.inside-bar-content p:last-child {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 38px;
  letter-spacing: -0.9856px;
  color: #3c3c3c;
  text-align: center;
}

.points-table {
  width: calc(50% - 26px);
  display: inline-block;
  vertical-align: top;
}

.points-table-row {
  padding: 15px 40px;
  filter: drop-shadow(0px 4px 8px #F0F1F5);
}

.points-table-row:nth-child(even) {
  background: #f6f9fc !important;
  color: red !important;
}

.points-table-row:nth-child(odd) {
  background: white;
}

.points-table-row:first-child {
  background: #ffffff;
  filter: drop-shadow(0px 4px 8px #f0f1f5);
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

.points-table-row:first-child p {
  font-family: Nunito, Arial !important;
  font-style: normal !important;
  font-weight: 800 !important;
  font-size: 20px !important;
  line-height: 27px !important;
  color: #3c3c3c !important;
  text-decoration: none !important;
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

.points-table-row p:first-child {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
}

.points-table-row p:nth-child(2) {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: right;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
}

.points-table-row p:nth-child(3) {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  text-align: right;
  letter-spacing: 0.2966px;
  text-decoration-line: underline;
  color: #34bc89;
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

@media only screen and (max-width: 1282px) {
  .points-table {
    width: 100%;
    display: block;
  }
  .points-table-row {
    padding: 15px 20px;
  }
  .circular-points-wrapper {
    width: 100%;
    display: block;
    margin-left: 0px;
    margin-top: 24px;
  }
  .pts-green {
    display: block !important;
    width: max-content;
  }
  .hint-item {
    display: block;
    margin-top: 16px;
  }
  .horizontal-spacer {
    display: none;
  }
  .earn-points-hints h2 {
    margin-top: 16px;
  }
}
</style>
