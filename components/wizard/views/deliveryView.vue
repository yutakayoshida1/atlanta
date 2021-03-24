<template>
  <div class="mid-view">
    <div class="meal-nav">
      <p class="meal-nav-header center-abs">Delivery & Pickup</p>
    </div>

    <div class="new-profile-wrapper">
      <h2>Delivery & Pickup timing</h2>
      <div class="orders-placed-time">
        <div
          v-for="item in pickupInfo"
          :key="item.id"
          class="orders-placed-time-items"
        >
          <strong>
            {{ item.name }}
          </strong>
          <p v-html="item.value"></p>
        </div>
      </div>

      <h2 style="margin-bottom: 0px;">Delivery fees</h2>
      <p style="margin-top: 0px; margin-bottom: 0px;">
        Enter your delivery location ZIP code to learn the price
      </p>
      <div class="new-input-wrapper ext-input-wrp">
        <input
          v-model="zip"
          :class="{ 'input-custom-error': postCodeError }"
          style="width: 40%;"
          type="text"
        />
        <button
          class="save-changes-btn"
          style="padding-top: 11px; padding-bottom: 11px; margin-left: 8px;"
          :disabled="!(zip != '')"
          @click="checkDeliveryPostCode()"
        >
          SEARCH
        </button>
      </div>
      <p v-if="postCodeError" class="error-label-ajax">
        There is either a mistake or we don't deliver to this area
      </p>

      <p class="post-code-result" v-if="postCodeResult != ''">
        <strong>FEE: </strong>
        <span style="display: inline-block;" v-html="postCodeResult"></span>
      </p>

      <h2 style="margin-bottom: 0px;">Pickup locations</h2>
      <p style="margin-top: 0px;">
        Select between the options to see the address
      </p>

      <div class="switcher-location">
        <div
          class="switcher-location-item"
          :class="{ 'switcher-location-item-active': selected == 0 }"
          @click="setStoreMapView(0)"
        >
          {{ this.$store.state.generalInformation.firstStoreName }}
        </div>
        <div
          class="switcher-location-item"
          :class="{ 'switcher-location-item-active': selected == 1 }"
          @click="setStoreMapView(1)"
        >
          {{ this.$store.state.generalInformation.secondStoreName }}
        </div>
      </div>
      <GMap
        ref="gMap"
        language="en"
        :center="{ lat: locations[selected].lat, lng: locations[selected].lng }"
        :options="{ fullscreenControl: false }"
        :zoom="18"
        class="google-map"
      >
        <GMapMarker
          v-for="location in locations"
          :key="location.id"
          :position="{ lat: location.lat, lng: location.lng }"
          :options="{
            icon:
              location === currentLocation ? pins.selected : pins.notSelected,
          }"
          @click="currentLocation = location"
        >
          <GMapInfoWindow :options="{ maxWidth: 250 }">
            <code v-if="selected == 0">{{ firstName }}</code>
            <code v-if="selected == 1">{{ secondName }}</code>
          </GMapInfoWindow>
        </GMapMarker>
      </GMap>
      <h2 style="margin-top: 56px;">Contacts</h2>
      <div class="orders-placed-time contact-wrapper">
        <div class="contact-box-column">
          <strong>Address</strong>
          <p>
            {{ this.$store.state.generalInformation.companyAddress }}
          </p>
        </div>
        <div class="contact-box-column">
          <strong>Number</strong>
          <p>
            {{ this.$store.state.generalInformation.companyNumber }}
          </p>
        </div>
        <div class="contact-box-column">
          <strong>Email</strong>
          <p>
            {{ this.$store.state.generalInformation.companyEmail }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { callUrlWithJwt } from './../../apiFunctions.js'

export default {
  data() {
    return {
      zip: '',
      selected: 0,
      firstStore: {},
      secondStore: {},
      currentLocation: this.$store.state.generalInformation.firstStore,
      locations: [
        this.$store.state.generalInformation.firstStore,
        this.$store.state.generalInformation.secondStore,
      ],
      pins: {
        selected:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=',
        notSelected:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII=',
      },
      pickupInfo: [],
      postalCodes: [],
      firstName: this.$store.state.generalInformation.firstStoreName,
      secondName: this.$store.state.generalInformation.secondStoreName,
      postCodeError: false,
      postCodeResult: '',
    }
  },
  mounted() {
    this.loadDeliveryInformation()
  },
  methods: {
    setStoreMapView(store) {
      this.selected = store
      if (store === 0)
        this.currentLocation = this.$store.state.generalInformation.firstStore
      else if (store === 1)
        this.currentLocation = this.$store.state.generalInformation.secondStore
      this.setMapCenter()
    },
    setMapCenter() {
      this.$refs.gMap.map.setCenter(this.currentLocation)
    },
    async loadDeliveryInformation() {
      const deliveryInfo = await this.$axios.$get(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlDeliveryAndPickupDays
      )
      const postalCodes = await this.$axios.$get(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlDeliveryAndPickupPostalNumbers
      )
      this.postalCodes = postalCodes.data
      this.pickupInfo = deliveryInfo.data
    },
    async checkDeliveryPostCode() {
      const checkPostCode = await this.$axios.$post(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlCheckDeliveryPostCode,
        {
          post_code: this.zip,
        }
      )
      if (checkPostCode.status == 'success') {
        this.postCodeError = false
        this.postCodeResult = checkPostCode.value
      } else {
        this.postCodeError = true
        this.postCodeResult = ''
      }
    },
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
}

.contact-wrapper {
  padding-top: 24px;
  padding-bottom: 24px;
}

.contact-box-column {
  width: 30%;
  display: inline-block;
}

.post-code-result {

}

.google-map {
  border-radius: 8px;
}

.new-profile-wrapper {
  margin: 16px 65px;
  width: 75%;
}

.new-profile-wrapper input {
  width: 100%;
}

.orders-placed-time-items {
  margin-top: 32px;
}

.orders-placed-time-items:first-child {
  margin-top: 0px;
}

.switcher-location {
  background: #e0e9ef;
  border-radius: 8px;
  padding: 8px;
  width: max-content;
}

.switcher-location-item {
  width: 180px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 4px 8px #f0f1f5;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  font-family: Nunito, Arial;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 1.4185px;
  text-transform: uppercase;
  color: #3c3c3c;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 250ms ease;
}

.switcher-location-item:hover {
  background: #f5f5f5;
}

.switcher-location-item-active {
  background: #34bc89;
  color: #ffffff;
}

.switcher-location-item-active:hover {
  background: #34bc89;
  color: #ffffff;
}

.switcher-location-item:last-child {
  margin-left: 8px;
}

.orders-placed-time-items strong {
  font-family: Nunito, Arial;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
}

.orders-placed-time-items p {
  font-family: Nunito, Arial;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
  margin-top: 12px;
}

.new-profile-wrapper p {
  /* Web / 18 / Subtitles */
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
  margin-bottom: 8px;
}

.new-profile-wrapper h2 {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
  height: max-content;
}

.orders-placed-time {
  border: 2px solid #e0e9ef;
  border-radius: 8px;
  padding: 32px;
  background: #ffffff;
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

.multiple-input-wrapper .new-input-wrapper {
  display: inline-block;
}

.new-profile-wrapper input {
  width: 100%;
}

.new-profile-wrapper p {
  /* Web / 18 / Subtitles */
  font-family: Nunito, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
  margin-bottom: 8px;
}

.new-profile-wrapper h2 {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
  height: max-content;
}

.new-profile-wrapper h2:before {
  content: none;
}

/* END OF GLOBAL STYLE TODO MOVE IT TO THE GLOBALS */

.meal-nav {
  height: 65px;
  background-color: #ffffff;
  width: calc(100%);
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
}

.meal-nav-header {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
  position: absolute;
  left: 65px !important;
  transform: translateY(-50%) !important;
}

#add_payment_method #payment ul.payment_methods,
.woocommerce-cart #payment ul.payment_methods,
.woocommerce-checkout #payment ul.payment_methods {
  text-align: left;
  padding: 1em;
  border-bottom: 1px solid #d3ced2;
  margin: 0;
  list-style: none outside;
}

#add_payment_method #payment ul.payment_methods li,
.woocommerce-cart #payment ul.payment_methods li,
.woocommerce-checkout #payment ul.payment_methods li {
  line-height: 2;
  text-align: left;
  margin: 0;
  font-weight: 400;
}

@media only screen and (max-width: 1282px) {
  .mid-view {
    width: 100%;
    left: 0;
    top: 56px;
  }
  .multiple-input-wrapper .new-input-wrapper {
    width: 100%;
    margin-left: 0px;
  }
  .new-profile-wrapper {
    width: calc(100% - 32px);
    margin: 16px;
  }
  .multiple-input-wrapper .new-input-wrapper input {
    margin-left: 0px !important;
  }
  .buttons-wrapper button:first-child {
    margin-right: 4px;
  }
  .select-meals-dishes p {
    font-size: 14px;
    line-height: 19px;
  }
  .select-meals-dishes .arrow-dp-box {
    height: 16px;
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
  .meal-nav {
    width: 100%;
  }
}
</style>
