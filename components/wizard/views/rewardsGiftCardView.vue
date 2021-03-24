<template>
  <span>
    <div class="gift-card-wrapper center-hor-margin">
      <span class="gift-card-image-wrapper-header">
        <img
          src="../../../assets/gift_card.png"
          alt="Atlanta meal prep gift card"
        />
        <h3>AtlantaMealPrep<br/><span class="gift-card-small">Gift Card</span></h3>
      </span>
      <div class="btn-wrapper center-hor-margin">
        <button class="ms-filled-button" @click="buyGiftCard()">Purchase a Gift Card</button>
        <button @click="redeemCard()" class="ms-outlined-button b-t">Redeem a Gift Card</button>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  methods: {
    redeemCard() {
      $nuxt.$emit('open-redeem-card')
    },
    buyGiftCard() {
      $nuxt.$emit('open-gift-card')
    },
  },
}
</script>

<style scoped>
.gift-card-wrapper {
  margin-top: 80px;
  max-width: 410px;
}

.b-t {
  color: #3c3c3c !important;
}

.btn-wrapper {
  width: 316px;
  margin-top: 60px;
}

.btn-wrapper button:last-child {
  margin-top: 12px;
}

.btn-wrapper button {
  width: 100% !important;
  text-align: center !important;
}

.gift-card-image-wrapper-header {
  position: relative;
}

.gift-card-image-wrapper-header h3 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, calc(-50% + 20%));
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 44px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.9856px;
  color: #3c3c3c;
  margin-top: 0px;
  margin-bottom: 0px;
  text-transform: none;
}

.gift-card-small {
  font-size: 32px;
  line-height: 33px;
}
</style>
