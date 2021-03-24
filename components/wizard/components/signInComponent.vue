<template>
  <div
    :style="{ backgroundImage: `url(${imgBackground})` }"
    class="sign-up-div"
  >
    <div class="sign-up-input">
      <h2>Sign Up For Updates, Events, & Recipes!</h2>
      <input class="sign-up-input-inline" type="text" name="" />
      <button
        style="
          margin-top: 0px !important;
          padding-top: 12px;
          padding-bottom: 12px;
          margin-left: 12px;
        "
        class="save-changes-btn"
      >
        SIGN ME UP
      </button>
    </div>
  </div>
</template>

<script>
import backgroundImage from './../../../assets/sign_up_background.jpg'

export default {
  data() {
    return {
      imgBackground: backgroundImage,
    }
  },
}
</script>

<style scoped>
.sign-up-div {
  height: 300px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: 40px;
}

.sign-up-input-inline {
  background: #ffffff;
  border: 2px solid #e0e9ef;
  box-sizing: border-box;
  border-radius: 8px;
  transition: 200ms ease;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.4032px;
  color: #3c3c3c;
  height: 48px;
  caret-color: #34bc89;
  width: 400px;
}

.sign-up-input-inline:placeholder-shown {
  font-family: Nunito, Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.4032px;
  color: #a4b6c0;
}

.sign-up-input-inline:focus {
  border: 2px solid #a4B6c0;
}

.sign-up-input {
  position: absolute;
  left: 65px;
  top: 50%;
  transform: translateY(-50%);
}

.new-profile-wrapper h2:before {
  content: none;
}

.sign-up-input h2 {
  font-family: Nunito;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.9856px;
  color: #ffffff;
  margin-top: 0px;
}

.sign-up-input h2:before {
  content: none;
}
.new-profile-wrapper h2:before {
  content: none;
}

.sign-up-input h2 {
  font-family: Nunito;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.9856px;
  color: #ffffff;
  margin-top: 0px;
}

.sign-up-input h2:before {
  content: none;
}
</style>
