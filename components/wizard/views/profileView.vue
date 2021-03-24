<template>
  <div class="mid-view">
    <div class="meal-nav">
      <p class="meal-nav-header center-abs">Profile settings</p>
    </div>

    <div class="new-profile-wrapper">
      <h2>Personal details</h2>

      <div class="multiple-input-wrapper">
        <div class="new-input-wrapper ext-input-wrp">
          <p>First name</p>
          <input v-model="firstName" type="text" />
        </div>

        <div class="new-input-wrapper ext-input-wrp">
          <p>Last name</p>
          <input v-model="lastName" type="text" />
        </div>
      </div>

      <div class="multiple-input-wrapper">
        <div class="new-input-wrapper ext-input-wrp">
          <p>Display name</p>
          <input v-model="displayName" type="text" />
        </div>
      </div>

      <button
        class="save-changes-btn"
        :disabled="(lastName === originalLastName && firstName === originalFirstName && displayName === originalDisplayName)"
        @click="saveProfileInfo()"
      >
        Save changes
      </button>

      <div class="horizontal-spacer"></div>

      <div class="multiple-input-wrapper">
        <div
          style="margin-left: 0px !important;"
          class="new-input-wrapper ext-input-wrp"
        >
          <h2>Personal details</h2>
          <input class="empty-input" :value="email" type="text" readonly />
          <button
            class="save-changes-btn save-changes-outline"
            @click="openChangeEmail()"
          >
            Change email
          </button>
        </div>

        <div class="new-input-wrapper ext-input-wrp">
          <h2>Password</h2>
          <input value="xxxxxxxxx" type="password" readonly />
          <button
            class="save-changes-btn save-changes-outline"
            @click="openPasswordChange()"
          >
            Change password
          </button>
        </div>
      </div>

      <div v-show="editSecondaryData" class="multiple-input-wrapper">
        <div
          style="margin-left: 0px !important;"
          class="new-input-wrapper ext-input-wrp"
        >
          <h2>Delivery address</h2>
          <input
            v-show="
              addDeliverStreet == '' || typeof addDeliverStreet == 'undefined'
            "
            class="empty-input"
            type="text"
            value="You have not set up this type of address yet."
            readonly
          />
          <span
            v-show="
              addDeliverStreet != '' && typeof addDeliverStreet != 'undefined'
            "
          >
            <p>
              {{ addDeliverZip }}, United States (US),<br />
              {{ addDeliverState }}, {{ addDeliverTown }}<br />
              {{ addDeliverStreet }}
            </p>
          </span>
          <button
            v-if="
              addDeliverZip == '' &&
              addDeliverState == '' &&
              addDeliverTown == ''
            "
            class="save-changes-btn"
            @click="addDeliveryAddress()"
          >
            Add address
          </button>
          <button v-else class="save-changes-btn" @click="addDeliveryAddress()">
            Edit address
          </button>
        </div>

        <div class="new-input-wrapper ext-input-wrp">
          <h2>Billing address</h2>
          <input
            v-show="billingStreet == '' || typeof billingStreet == 'undefined'"
            class="empty-input"
            type="text"
            value="You have not set up this type of address yet."
            readonly
          />
          <span
            v-show="billingStreet != '' && typeof billingStreet != 'undefined'"
          >
            <p>
              {{ billingZip }}, United States (US),<br />
              {{ billingState }}, {{ billingTown }}<br />
              {{ billingStreet }}
            </p>
          </span>
          <button
            v-if="billingZip == '' && billingState == '' && billingTown == ''"
            class="save-changes-btn save-changes-outline"
            @click="addBillingAddress()"
          >
            Add address
          </button>
          <button
            v-else
            class="save-changes-btn save-changes-outline"
            @click="addBillingAddress()"
          >
            Edit address
          </button>
        </div>
      </div>

      <!-- edit form section -->
      <div v-show="addDeliver" class="add-delivery-address">
        <h2>Delivery address</h2>
        <div class="multiple-input-wrapper">
          <div
            style="margin-left: 0px !important;"
            class="new-input-wrapper ext-input-wrp"
          >
            <p>Country / Region</p>
            <input type="text" value="United States (US)" readonly />
          </div>

          <div class="new-input-wrapper ext-input-wrp">
            <p>State</p>
            <input v-model="addDeliverState" type="text" />
          </div>
        </div>

        <div class="multiple-input-wrapper">
          <div
            style="margin-left: 0px !important;"
            class="new-input-wrapper ext-input-wrp"
          >
            <p>Town / City *</p>
            <input v-model="addDeliverTown" type="text" value="" />
          </div>

          <div class="new-input-wrapper ext-input-wrp">
            <p>Street address</p>
            <input v-model="addDeliverStreet" type="text" />
          </div>
        </div>

        <div class="multiple-input-wrapper">
          <div
            style="margin-left: 0px !important;"
            class="new-input-wrapper ext-input-wrp"
          >
            <p>ZIP *</p>
            <input v-model="addDeliverZip" type="text" value="" />
          </div>

          <div class="new-input-wrapper ext-input-wrp">
            <p>Company (optional)</p>
            <input v-model="addDeliverCompany" type="text" />
          </div>

          <div v-show="!addDeliverSameName" class="multiple-input-wrapper">
            <div
              style="margin-left: 0px !important;"
              class="new-input-wrapper ext-input-wrp"
            >
              <p>First name</p>
              <input v-model="addDeliverFirstName" type="text" value="" />
            </div>

            <div class="new-input-wrapper ext-input-wrp">
              <p>Last name</p>
              <input v-model="addDeliverLastName" type="text" />
            </div>
          </div>

          <label style="margin-top: 8px;" class="container-checkbox">
            <input
              v-model="addDeliverSameName"
              type="checkbox"
              checked="checked"
            />
            <span class="checkmark-custom"></span>
            Use the same name as account name
          </label>

          <label style="margin-top: 8px;" class="container-checkbox">
            <input
              v-model="addDeliverAddressAsBilling"
              type="checkbox"
              checked="checked"
            />
            <span class="checkmark-custom"></span>
            Use this address as my billing address
          </label>

          <button
            class="save-changes-btn"
            :disabled="(addDeliverState == '' || addDeliverTown == '' || addDeliverStreet == '' || addDeliverZip == '')"
            @click="saveDeliveryAddress()"
          >
            Save
          </button>
        </div>
      </div>
      <!-- end of edit form section -->

      <!-- edit form section -->
      <div v-show="addBilling" class="add-delivery-address">
        <h2>Delivery address</h2>
        <label style="margin-top: 8px;" class="container-checkbox">
          <input
            v-model="billingUseSameNamesAsAccount"
            type="checkbox"
            checked="checked"
          />
          <span class="checkmark-custom"></span>
          Use the same name as account name
        </label>

        <label style="margin-top: 8px;" class="container-checkbox">
          <input
            v-model="billingUseSameAddressAsDelivery"
            type="checkbox"
            checked="checked"
          />
          <span class="checkmark-custom"></span>
          Use this address as my billing address
        </label>
        <div
          v-show="billingUseSameNamesAsAccount == false"
          class="multiple-input-wrapper"
        >
          <div
            style="margin-left: 0px !important;"
            class="new-input-wrapper ext-input-wrp"
          >
            <p>First name</p>
            <input v-model="billingFirstName" type="text" />
          </div>

          <div class="new-input-wrapper ext-input-wrp">
            <p>Last name</p>
            <input v-model="billingLastName" type="text" />
          </div>
        </div>

        <div class="multiple-input-wrapper">
          <div
            style="margin-left: 0px !important;"
            class="new-input-wrapper ext-input-wrp"
          >
            <p>Country / region</p>
            <input type="text" value="United States (US)" readonly />
          </div>

          <div class="new-input-wrapper ext-input-wrp">
            <p>State</p>
            <input v-model="billingState" type="text" />
          </div>
        </div>

        <div class="multiple-input-wrapper">
          <div
            style="margin-left: 0px !important;"
            class="new-input-wrapper ext-input-wrp"
          >
            <p>Town / City</p>
            <input v-model="billingTown" type="text" value="" />
          </div>

          <div class="new-input-wrapper ext-input-wrp">
            <p>Street address</p>
            <input v-model="billingStreet" type="text" />
          </div>
        </div>

        <div class="multiple-input-wrapper">
          <div
            style="margin-left: 0px !important;"
            class="new-input-wrapper ext-input-wrp"
          >
            <p>ZIP *</p>
            <input v-model="billingZip" type="text" value="" />
          </div>

          <div class="new-input-wrapper ext-input-wrp">
            <p>Company (optional)</p>
            <input v-model="billingCompany" type="text" />
          </div>

          <div class="multiple-input-wrapper">
            <div
              style="margin-left: 0px !important;"
              class="new-input-wrapper ext-input-wrp"
            >
              <p>Phone number</p>
              <input v-model="billingPhone" type="text" value="" />
            </div>

            <div class="new-input-wrapper ext-input-wrp">
              <p>Email address</p>
              <input v-model="billingEmail" type="text" />
            </div>
          </div>

          <button
            class="save-changes-btn"
            :disabled="(billingState == '' || billingTown == '' || billingStreet == '' || billingZip == '')"
            @click="saveBillingAddress()"
          >
            Save
          </button>
        </div>
      </div>
      <!-- end of edit form section -->

      <div class="horizontal-spacer"></div>

      <div class="multiple-input-wrapper">
        <div
          style="margin-left: 0px !important;"
          class="new-input-wrapper ext-input-wrp"
        >
          <h2>Payment information</h2>
          <input
            v-if="creditCards.length === 0"
            class="empty-input"
            type="text"
            value="You haven't setup any payment methods yet"
            readonly
          />
          <button
            v-if="creditCards.length === 0"
            class="save-changes-btn"
            @click="openAddPayment()"
          >
            Add payment
          </button>

          <span v-for="(card, index) in creditCards" :key="card.id">
            <p v-if="index == 0">Primary credit card</p>
            <p v-else>Credit card</p>
            <input
              style="background-color: white !important;"
              type="text"
              :value="'•••• •••• •••• ' + card.four_digits"
              readonly
            />
            <button
              style="margin-top: 0; margin-bottom: 24px;"
              class="save-changes-btn save-changes-outline"
              @click="openDeleteCard(card.id)"
            >
              DELETE CARD
            </button>
          </span>

          <span v-if="creditCards.length > 0">
            <p style="margin-top: 24px;">Other payment method</p>
            <button
              style="margin-top: 16px; margin-bottom: 24px;"
              class="save-changes-btn save-changes-outline"
              @click="openAddPayment()"
            >
              ADD ANOTHER
            </button>
          </span>
        </div>
      </div>
    </div>

    <sign-in-component />
  </div>
</template>

<script>
import { callUrlWithJwt } from './../../apiFunctions.js'
import backgroundImage from './../../../assets/sign_up_background.jpg'
import signInComponent from '@/components/wizard/components/signInComponent.vue'

export default {
  components: {
    signInComponent,
  },
  data() {
    return {
      imgBackground: backgroundImage,
      firstName: '',
      lastName: '',
      email: '',
      displayName: '',

      // original variables to compare it
      originalFirstName: '',
      originalLastName: '',
      originalEmail: '',
      originalDisplayName: '',
      editSecondaryData: true,
      addDeliver: false,
      addBilling: false,

      // variables for adding delivery
      addDeliverState: '',
      addDeliverTown: '',
      addDeliverStreet: '',
      addDeliverZip: '',
      addDeliverCompany: '',
      addDeliverSameName: true,
      addDeliverAddressAsBilling: true,
      addDeliverFirstName: '',
      addDeliverLastName: '',

      // variables for addding billing address
      billingFirstName: '',
      billingLastName: '',
      billingState: '',
      billingTown: '',
      billingStreet: '',
      billingZip: '',
      billingCompany: '',
      billingPhone: '',
      billingEmail: '',
      billingUseSameAddressAsDelivery: true,
      billingUseSameNamesAsAccount: true,

      // payment methods
      creditCards: [],
    }
  },
  created() {
    const self = this

    // reload card info
    this.$nuxt.$on('reload-profile-cards', () => {
      self.loadCardsInfo()
    })
    this.$nuxt.$on('reload-profile-info', () => {
      self.loadProfileInfo()
    })
  },
  mounted() {
    if (!this.$store.state.logedIn) {
      this.$router.push('/register')
    } else {
      this.loadProfileInfo()
      this.loadDeliveryAddress()
      this.loadBillingAddress()
      this.loadCardsInfo()
    }
  },
  methods: {
    openDeleteCard(id) {
      this.$store.commit('wizard/setCardId', id)
      $nuxt.$emit('open-remove-card', id)
    },
    addCard() {
      const addCart = document.getElementById('add_payment_method')
      addCart.classList.toggle('display-none')
    },
    async loadProfileInfo() {
      // if loged in
      const profileInfo = await callUrlWithJwt(
        this.$axios,
        this.$store,
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlGetProfileInfo,
        'POST'
      )

      this.firstName = profileInfo.first_name
      this.lastName = profileInfo.last_name
      this.$store.commit('wizard/setEmail', profileInfo.email)
      this.email = profileInfo.email
      this.displayName = profileInfo.display_name

      this.originalFirstName = profileInfo.first_name
      this.originalLastName = profileInfo.last_name
      this.originalDisplayName = profileInfo.display_name
    },
    async saveProfileInfo() {
      await callUrlWithJwt(
        this.$axios,
        this.$store,
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlSaveProfileInfo,
        'POST',
        {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          display_name: this.displayName,
        }
      )
      this.loadProfileInfo()
    },
    async saveDeliveryAddress() {
      await callUrlWithJwt(
        this.$axios,
        this.$store,
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlDeliveryAddress,
        'POST',
        {
          state: this.addDeliverState,
          town: this.addDeliverTown,
          street: this.addDeliverStreet,
          zip: this.addDeliverZip,
          company: this.addDeliverCompany,
          use_this_as_billing_address: Number(this.addDeliverAddressAsBilling),
          name_as_account_name: Number(this.addDeliverSameName),
          first_name: this.addDeliverFirstName,
          last_name: this.addDeliverLastName,
        }
      )
      this.addDeliver = false
      this.editSecondaryData = true
      this.loadDeliveryAddress()
    },
    async loadDeliveryAddress() {
      const result = await callUrlWithJwt(
        this.$axios,
        this.$store,
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlDeliveryAddress,
        'POST'
      )
      this.addDeliverTown = result.town
      this.addDeliverState = result.state
      this.addDeliverCompany = result.company
      this.addDeliverZip = result.zip
      this.addDeliverStreet = result.street

      if (Number(result.use_this_as_billing_address) == 1)
        this.addDeliverAddressAsBilling = true
      else this.addDeliverAddressAsBilling = false

      if (Number(result.name_as_account_name)) this.addDeliverSameName = true
      else this.addDeliverSameName = false

      this.addDeliverSameName = Number(result.name_as_account_name)
      this.addDeliverFirstName = result.first_name
      this.addDeliverLastName = result.last_name
    },
    async saveBillingAddress() {
      await callUrlWithJwt(
        this.$axios,
        this.$store,
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlBillingAddress,
        'POST',
        {
          state: this.billingState,
          town: this.billingTown,
          street: this.billingStreet,
          zip: this.billingZip,
          company: this.billingCompany,
          use_this_as_delivery_address: Number(
            this.billingUseSameAddressAsDelivery
          ),
          name_as_account_name: Number(this.billingUseSameNamesAsAccount),
          first_name: this.billingFirstName,
          last_name: this.billingLastName,
          email: this.billingEmail,
          phone_number: this.billingPhone,
        }
      )
      this.addBilling = false
      this.editSecondaryData = true
      this.loadBillingAddress()
    },
    async loadBillingAddress() {
      const result = await callUrlWithJwt(
        this.$axios,
        this.$store,
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlBillingAddress,
        'POST'
      )

      this.billingEmail = result.email
      this.billingPhone = result.phone_number
      this.billingStreet = result.street
      this.billingTown = result.town
      this.billingZip = result.zip
      this.billingState = result.state
      this.billingCompany = result.company
      this.billingFirstName = result.first_name
      this.billingLastName = result.last_name

      if (Number(result.use_this_as_delivery_address) == 1)
        this.billingUseSameAddressAsDelivery = true
      else this.billingUseSameAddressAsDelivery = false

      if (Number(result.name_as_account_name) == 1)
        this.billingUseSameNamesAsAccount = true
      else this.billingUseSameNamesAsAccount = false
    },
    openPasswordChange() {
      $nuxt.$emit('open-change-password')
    },
    openChangeEmail() {
      $nuxt.$emit('open-change-email')
    },
    openAddPayment() {
      $nuxt.$emit('open-add-card')
    },
    addDeliveryAddress() {
      this.editSecondaryData = false
      this.addDeliver = true
    },
    addBillingAddress() {
      this.editSecondaryData = false
      this.addBilling = true
    },
    async loadCardsInfo() {
      const result = await callUrlWithJwt(
        this.$axios,
        this.$store,
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlGetCards,
        'POST'
      )
      this.creditCards = result
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

.new-profile-wrapper {
  margin: 16px 65px;
  width: 75%;
}

.multiple-input-wrapper {
  width: 100%;
  margin-top: 24px;
}

.multiple-input-wrapper:first-child {
  margin-top: 0px;
}

.multiple-input-wrapper .new-input-wrapper {
  display: inline-block;
}

.new-input-wrapper {
  width: calc(50% - 20px);
}

.new-input-wrapper:nth-child(2) {
  margin-left: 35px;
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

.horizontal-spacer {
  width: 100%;
  height: 2px;
  background-color: #e0e9ef;
  margin-top: 56px;
  border-radius: 1px;
}

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

.profile-form-wrapper {
  margin: 24px;
  display: block;
  margin-left: 40px;
  width: 900px;
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
  .new-profile-wrapper {
    width: calc(100% - 32px);
    margin: 16px;
  }

  .multiple-input-wrapper .new-input-wrapper {
    width: 100%;
    margin-left: 0px;
  }

  .multiple-input-wrapper .new-input-wrapper input {
    margin-left: 0px !important;
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
}
</style>
