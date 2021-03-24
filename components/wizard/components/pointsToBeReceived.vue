<template>
  <div class="order-info-wrapper">
    <strong>Points</strong>
    <p class="points-p">+{{ points }}</p>
  </div>
</template>

<script>
// get the props for the price
export default {
  props: ['totalPrice'],
  data() {
    return {
      points: 0
    }
  },
  watch: {
    totalPrice() {
      this.refreshPoints()
    }
  },
  methods: {
    refreshPoints() {
      this.points = this.totalPrice * 10
    }
  }
}
</script>

<style>
.order-info-wrapper {
  background: #f6f9fc;
  border-radius: 4px;
  width: calc(100% - 32px);
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 24px !important;
  padding-top: 16px !important;
  padding-left: 12px !important;
  padding-right: 12px !important;
  margin-top: 16px;
}

.points-p {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.192941px;
  color: #293F94;
  margin-bottom: 0px;
}
</style>