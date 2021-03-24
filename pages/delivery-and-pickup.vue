<template>
  <div id="main" class="site-main">
    <div id="primary" class="content-area">
      <div id="content" class="site-content" role="main">
        <article
          id="post-2528"
          class="post-2528 page type-page status-publish hentry"
        >
          <header class="entry-header">
            <div class="container">
              <h1 class="entry-title">Delivery &amp; Pickup</h1>
            </div>
          </header>
          <!-- .entry-header -->

          <div class="entry-content">
            <div class="bg-white">
              <div class="container">
                <p style="text-align: center;">
                  <em
                    >Closer Delivery time frames will be given the day before
                    delivery.</em
                  >
                </p>

                <div v-for="item in pickupInfo" :key="item.id">
                  <span>
                    <p>
                      <strong>{{ item.name }}</strong>
                    </p>
                    <ul v-html="item.value"></ul>
                  </span>
                </div>
              </div>
            </div>
            <div class="bg-white">
              <div class="container">
                <h2 style="text-align: center;">Delivery Fees</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in postalCodes" :key="item.id">
                      <td>{{ item.name }}</td>
                      <td v-html="item.value"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="container"></div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      pickupInfo: [],
      postalCodes: [],
    }
  },
  async mounted() {
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
}
</script>

<style scoped></style>
