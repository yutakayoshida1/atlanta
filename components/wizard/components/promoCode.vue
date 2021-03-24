<template>
  <div class="order-info-wrapper padding-top-16">
    <strong>Promo code</strong>
    <div class="ext-input-wrp">
      <input
        class="promo-input"
        placeholder="Coupon code"
        type="text"
        name=""
        id=""
        v-model="promoCode"
      />
    </div>
    <button class="ms-filled-button coupon-btn" :disabled="disabledBtn">APPLY CODE</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promoCode: '',
      disabledBtn: true,
    }
  },
  watch: {
    promoCode() {
      if (this.promoCode !== '') {
        this.disabledBtn = false
      } else {
        this.disabledBtn = true
      }
    },
  },
}
</script>

<style scoped>
.promo-input {
  width: 100%;
  margin-top: 8px;
}

.coupon-btn {
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
}

.coupon-btn:disabled {
  background: #E0E9EF;
  border-radius: 8px;
  color: #A4B6C0;
  border-color: #E0E9EF;
}

.order-info-wrapper {
  padding-bottom: 16px !important;
  padding-top: 16px !important;
}

.promo-input::-webkit-input-placeholder {
  font-family: Nunito, Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.4032px;
  color: #A4B6C0;
}

.promo-input:-ms-input-placeholder {
  font-family: Nunito, Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.4032px;
  color: #A4B6C0;
}

.promo-input::placeholder {
  font-family: Nunito, Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.4032px;
  color: #A4B6C0;
}
</style>
