<template>
  <span>
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

      <h2>Give $20, Get $20</h2>
      <div v-show="pointsInfoToggle" class="hint-wrapper">
        <div class="hint-item">
          <img
            src="../../../assets/refferals_01.png"
            class="refferal-banner"
            alt=""
          />
          <p>
            Earn 10 points for every $1 spent. Points never expire. You earn
            ’em, you keep ’em.
          </p>
        </div>
      </div>
    </div>

    <div class="your-code">
      <div class="meal-item-icon-wrapper">
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9421 21.208C15.1731 21.208 13.7338 19.7687 13.7338 17.9993C13.7338 17.6589 13.7878 17.3315 13.8865 17.023C14.4084 17.2447 14.9634 17.4209 15.5516 17.5464C15.6164 17.5605 15.6808 17.5669 15.7441 17.5669C16.1673 17.5669 16.5476 17.2722 16.6396 16.842C16.7458 16.347 16.4303 15.8597 15.9352 15.7536C15.5955 15.6809 15.2726 15.5886 14.9641 15.4783C15.5098 15.0492 16.1956 14.7911 16.9421 14.7911C18.711 14.7911 20.1507 16.2304 20.1507 17.9993C20.1507 19.7687 18.711 21.208 16.9421 21.208ZM18.749 10.2057C18.1366 9.87274 17.4933 9.59188 16.8604 9.31586C14.6896 8.36862 12.626 7.46868 11.5942 4.64966C15.2688 5.0363 17.9522 7.1502 18.749 10.2057ZM8.0015 16.3091C8.45296 17.0373 8.59377 17.8982 8.39821 18.7326C8.20228 19.5669 7.69345 20.275 6.96486 20.7265C6.45641 21.042 5.87309 21.2085 5.27859 21.2085C4.15776 21.2085 3.13713 20.6412 2.54748 19.6902C2.09602 18.9616 1.95522 18.1012 2.15077 17.2668C2.3467 16.4324 2.85553 15.7243 3.58412 15.2725C3.87876 15.09 4.19873 14.9588 4.531 14.8795C4.5973 15.4107 4.7232 15.9687 4.92025 16.5594C5.04802 16.9438 5.40561 17.1871 5.78965 17.1871C5.88575 17.1871 5.98334 17.1718 6.07945 17.1398C6.55959 16.9796 6.81959 16.4607 6.65942 15.9802C6.54543 15.6375 6.462 15.3108 6.40463 14.9961C7.05761 15.2404 7.62007 15.6938 8.0015 16.3091ZM16.9412 12.9578C15.4889 12.9578 14.1788 13.5758 13.2577 14.5617C12.5935 14.0533 12.0474 13.4096 11.6273 12.6307C10.8167 11.1285 10.5061 9.13007 10.6823 6.94391C12.1204 9.24629 14.288 10.1943 16.1262 10.9963C17.3327 11.5226 18.4722 12.0199 19.2611 12.8088C19.4366 12.9842 19.6709 13.0774 19.9093 13.0774H19.9182C20.4222 13.0744 20.8297 12.665 20.8297 12.1603C20.8297 12.1312 20.8282 12.1026 20.8256 12.0739C20.7824 7.05492 16.996 3.32367 11.6254 2.8141C11.7241 2.49301 11.8157 2.16224 11.8969 1.81843C11.8996 1.80874 11.8988 1.79943 11.901 1.79012C11.9078 1.75734 11.9107 1.72493 11.9137 1.69252C11.9167 1.66421 11.9197 1.6359 11.9197 1.60797C11.9197 1.57705 11.9167 1.54688 11.9133 1.51633C11.9107 1.48691 11.9081 1.45785 11.9025 1.42954C11.8966 1.40049 11.888 1.37293 11.8794 1.34499C11.8709 1.31668 11.8631 1.28837 11.8519 1.26081C11.8407 1.23361 11.8269 1.20828 11.8131 1.18221C11.7994 1.15651 11.7867 1.13081 11.7707 1.10659C11.7543 1.08164 11.7353 1.05854 11.7167 1.03545C11.6984 1.01273 11.6809 0.990004 11.6608 0.969144C11.6403 0.948285 11.6176 0.92966 11.5949 0.910291C11.5718 0.890548 11.5487 0.871179 11.5237 0.853672C11.5002 0.837655 11.4749 0.824245 11.45 0.81009C11.4216 0.794446 11.3933 0.778801 11.3632 0.765764C11.3539 0.762039 11.3464 0.756451 11.3371 0.752726C11.317 0.744904 11.2961 0.741924 11.2756 0.735592C11.2555 0.72926 11.2373 0.72032 11.2164 0.715105C11.2067 0.71287 11.1974 0.713242 11.1881 0.71138C11.1553 0.704675 11.1233 0.701695 11.0905 0.698343C11.0622 0.695735 11.0339 0.692383 11.0056 0.692383C10.975 0.692383 10.9452 0.695735 10.9147 0.698715C10.8853 0.701695 10.8558 0.704303 10.8272 0.70989C10.7985 0.715477 10.7713 0.724045 10.7437 0.732612C10.715 0.741179 10.6863 0.749374 10.6588 0.760549C10.632 0.771724 10.6066 0.785506 10.5806 0.798915C10.5549 0.812698 10.5288 0.825735 10.5042 0.841752C10.4792 0.858142 10.4565 0.876766 10.4334 0.895391C10.4107 0.913643 10.388 0.93115 10.3671 0.951637C10.3459 0.972124 10.3276 0.994846 10.3083 1.0172C10.2885 1.04066 10.2692 1.06338 10.2517 1.08871C10.2356 1.11218 10.2222 1.13714 10.2081 1.16247C10.1924 1.19078 10.1768 1.21909 10.1637 1.24926C10.16 1.25857 10.1541 1.26602 10.1507 1.27533C9.85458 2.03745 9.61097 2.79994 9.41131 3.55685C8.74939 5.15186 7.8759 6.46377 7.02177 7.74291C5.89946 9.42434 4.81848 11.0462 4.54209 13.0111C3.86304 13.1109 3.20783 13.3485 2.61743 13.7143C1.47276 14.4239 0.673021 15.5369 0.365715 16.8477C0.0580365 18.1589 0.279297 19.5114 0.988894 20.6561C1.91491 22.1502 3.51849 23.0419 5.27814 23.0419C6.21421 23.0419 7.13166 22.78 7.93065 22.2846C9.07532 21.5754 9.87506 20.4624 10.1827 19.1512C10.4904 17.84 10.2688 16.4875 9.55919 15.3432C8.83395 14.1729 7.69226 13.3746 6.38667 13.0826C6.64258 11.6138 7.50378 10.3235 8.54676 8.76093C8.62945 8.63652 8.71326 8.51136 8.79744 8.38471C8.83432 10.3038 9.23624 12.0601 10.0136 13.5013C10.5821 14.5547 11.3423 15.43 12.2683 16.1094C12.031 16.6935 11.8996 17.3312 11.8996 17.9995C11.8996 20.7798 14.161 23.0415 16.9412 23.0415C19.7215 23.0415 21.9833 20.7798 21.9833 17.9995C21.9833 15.2196 19.7215 12.9578 16.9412 12.9578Z"
            fill="#293F94"
          ></path>
        </svg>
      </div>
      <p class="meal-item-name">
        Your referral code is:
        <span class="ref-code">{{
          this.$store.state.wizard.refferalCode
        }}</span>
      </p>
      <div class="stepper-price">
        <button class="b-t ms-outlined-button" @click="openRefferalPopup()">
          EDIT
        </button>
        <button class="meal-button select-btn" @click="copyLink()">
          {{ copyTitle }}
        </button>
      </div>
    </div>

    <div class="share-options">
      <div class="share-item" @click="openShareWithEmail()">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.1462 6H5.85384C3.72542 6 2 7.72542 2 9.85384C2 10.8305 2.49321 11.7411 3.3112 12.2747L15.0828 19.9536C15.379 20.1469 15.6837 20.3209 15.9954 20.4759L18.3301 22.0412C19.3408 22.7188 20.6606 22.7188 21.6713 22.0412L24.01 20.4732C24.3198 20.3189 24.6227 20.1458 24.9172 19.9536L36.6888 12.2747C37.5068 11.7411 38 10.8305 38 9.85384C38 7.72542 36.2746 6 34.1462 6ZM2.04283 30.0002V19.6861C2.04283 18.0864 3.8278 17.1341 5.15656 18.0249L16.1026 25.3636C18.4609 26.9446 21.5405 26.9446 23.8988 25.3636L34.8549 18.0181C36.1837 17.1273 37.9687 18.0796 37.9687 19.6794V30.0002C37.9687 32.2093 36.1778 34.0002 33.9687 34.0002H6.04283C3.83369 34.0002 2.04283 32.2093 2.04283 30.0002Z"
            fill="#293F94"
          />
        </svg>

        <p>
          Share via Email
        </p>
      </div>

      <div class="share-item" @click="openShareWithLink()">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.4041 38.3332H5.59459C3.42569 38.3332 1.66602 36.5735 1.66602 34.4046V5.59508C1.66602 3.42618 3.42569 1.6665 5.59459 1.6665H34.4041C36.573 1.6665 38.3327 3.42618 38.3327 5.59508V34.4046C38.3327 36.5735 36.573 38.3332 34.4041 38.3332ZM20.9138 20.0819C19.3023 18.4704 16.3583 18.4704 14.7468 20.0819L12.3544 22.4743C10.7428 24.0859 10.7428 26.6987 12.3544 28.3102C13.9659 29.9217 16.5787 29.9217 18.1903 28.3102L18.2037 28.2969L18.2234 28.2779L18.6592 27.7645C19.3778 27.0821 20.5135 27.1114 21.1959 27.8299C21.8783 28.5484 21.8491 29.6841 21.1305 30.3666L20.7103 30.8651C17.696 33.8607 12.824 33.8549 9.81686 30.8477C6.80389 27.8348 6.80389 22.9498 9.81686 19.9368L12.2093 17.5444C15.2222 14.5314 20.4384 14.5314 23.4514 17.5444C23.8936 17.9866 23.9865 18.15 24.1701 18.4729C24.205 18.5344 24.2433 18.6017 24.2879 18.6778C24.7889 19.5328 24.5019 20.632 23.6469 21.133C22.7919 21.634 21.6926 21.347 21.1916 20.492C21.1066 20.3469 21.0763 20.2831 21.0596 20.248C21.0517 20.2314 21.0468 20.2212 21.0407 20.2118C21.031 20.197 21.018 20.1843 20.9844 20.1515C20.9671 20.1346 20.9444 20.1125 20.9138 20.0819ZM21.4943 14.3553L22.674 13.1163C24.2866 11.5189 26.8888 11.5236 28.4956 13.1304C30.1072 14.742 30.1072 17.3548 28.4956 18.9663L26.1032 21.3587C25.235 22.2269 24.0477 22.785 22.8926 22.9063C21.8275 23.018 20.8873 22.757 20.1953 22.1473C20.1839 22.1202 20.1722 22.0939 20.1604 22.0684C20.1139 21.9677 20.0622 21.8717 20.0087 21.7805C19.5078 20.9255 18.4085 20.6385 17.5535 21.1395C16.7418 21.615 16.442 22.6298 16.8424 23.4629L17.5189 24.5544C19.1287 26.1643 21.2692 26.6849 23.2671 26.4753C25.248 26.2674 27.1967 25.3403 28.6408 23.8962L31.0332 21.5038C34.0461 18.4909 34.0461 13.6059 31.0332 10.5929C28.0202 7.57993 23.1352 7.57992 20.1222 10.5929C20.1119 10.6033 20.1016 10.6137 20.0915 10.6244L18.8953 11.8807C18.212 12.5984 18.2398 13.7341 18.9575 14.4174C19.6752 15.1008 20.8109 15.0729 21.4943 14.3553Z"
            fill="#293F94"
          />
        </svg>

        <p>
          Share via Link
        </p>
      </div>

      <div class="share-item" @click="shareOnFacebook()">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.3327 5.59508V34.4046C38.3327 36.5735 36.573 38.3332 34.4041 38.3332H27.4227V23.8302H32.3825L33.0946 18.2975H27.4227V14.7617C27.4227 13.1576 27.8647 12.069 30.1645 12.069H33.0946V7.12558C32.5871 7.0601 30.852 6.9046 28.8223 6.9046C24.599 6.9046 21.7017 9.48272 21.7017 14.2216V18.3056H16.7255V23.8384H21.7099V38.3332H5.59459C3.42569 38.3332 1.66602 36.5735 1.66602 34.4046V5.59508C1.66602 3.42618 3.42569 1.6665 5.59459 1.6665H34.4041C36.573 1.6665 38.3327 3.42618 38.3327 5.59508Z"
            fill="#293F94"
          />
        </svg>

        <p>
          Share via Facebook
        </p>
      </div>
    </div>
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
    <input
      id="input-to-copy"
      type="text"
      style="opacity: 0; width: 1px; height: 1px; display: inline-block;"
      v-model="inviteUrl"
    />
  </span>
</template>

<script>
export default {
  data() {
    return {
      pointsInfoToggle: true,
      inviteUrl: '',
      copyTitle: 'COPY',
    }
  },
  mounted() {
    this.inviteUrl =
      window.location.host +
      '/register?invite=' +
      this.$store.state.wizard.refferalCode
  },
  methods: {
    togglePointsInfo() {
      if (this.pointsInfoToggle) this.pointsInfoToggle = false
      else this.pointsInfoToggle = true
    },
    openRefferalPopup() {
      $nuxt.$emit('open-edit-refferal')
    },
    openShareWithEmail() {
      $nuxt.$emit('open-share-email')
    },
    openShareWithLink() {
      $nuxt.$emit('open-share-link')
    },
    shareOnFacebook() {
      FB.ui(
        {
          method: 'share',
          href: decodeURIComponent(this.inviteUrl),
        },
        function (response) {}
      )
    },
    copyLink() {
      const el = document.createElement('textarea')
      el.value = this.inviteUrl
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      this.copyTitle = 'coppied'
    },
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

.ms-outlined-button {
  padding-top: 6px !important;
  padding-bottom: 6px !important;
}

.b-t {
  color: #3c3c3c !important;
}

.refferal-banner {
  background-color: #f6b6c7;
  border-radius: 20px;
}

.select-btn {
  background: #34bc89;
  border-radius: 8px;
  color: #ffffff !important;
  transition: 250ms ease;
  padding-top: 6px !important;
  padding-bottom: 6px !important;
}

.select-btn:hover {
  background: #32d998;
  border-color: #32d998;
}

.share-options {
  width: calc(100% - 64px);
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  margin-top: 24px;
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

.stepper-price {
  display: inline-block;
  vertical-align: bottom;
  height: max-content;
  width: max-content;
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
}

.meal-item-icon-wrapper {
  background: #e0e9ef;
  border-radius: 20px;
  width: 80px;
  height: 80px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
}

.meal-item-icon-wrapper svg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.meal-item-name {
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 0px;
  vertical-align: middle;
  margin-left: 16px;
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
}

.meal-item {
  margin-top: 16px;
  position: relative;
}

.ref-code {
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
}

.your-code {
  width: calc(100% - 64px);
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
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

.earn-points-hints h2:before {
  display: none !important;
}

.hint-item img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 133px;
  margin-top: 8px;
}

.hint-item p {
  max-width: 80%;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
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

.your-code {
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 4px 8px #f0f1f5;
  border-radius: 8px;
}

.share-item {
  padding: 14px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 8px #f0f1f5;
  border-radius: 8px;
  width: calc(33% - 6px);
  cursor: pointer;
}

.share-item svg {
  display: inline-block;
  vertical-align: middle;
}

.share-item p {
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 0px;
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
  margin-left: 16px;
}

.points-table {
  width: calc(100% - 64px);
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
}

.points-table-row {
  padding: 15px 40px;
  filter: drop-shadow(0px 4px 8px #f0f1f5);
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

@media only screen and (max-width: 1282px) {
  .meal-item-icon-wrapper {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .stepper-price {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
    right: auto;
    top: auto;
    margin-top: 8px;
  }
  .meal-item-name {
    text-align: center;
    margin-top: 16px;
    margin-bottom: 8px !important;
    margin-left: 0px;
  }
  .share-item {
    display: block;
    width: 100%;
    margin-top: 16px;
  }
  .share-options {
    display: block;
  }
  .earn-points-hints h2 {
    margin-top: 16px;
  }
  .hint-item img{
    height: auto;
  }
}
</style>
