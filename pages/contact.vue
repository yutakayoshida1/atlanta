<template>
  <div>
    <div id="content" class="site-content" role="main">
      <article
        id="post-12"
        class="post-12 page type-page status-publish hentry"
      >
        <header class="entry-header">
          <div class="container">
            <h1 class="entry-title">Contact</h1>
          </div>
        </header>
        <!-- .entry-header -->
        <div class="entry-content">
          <div class="bg-white">
            <div class="container">
              <p style="text-align: center;">
                <strong>{{
                  this.$store.state.generalInformation.companyName
                }}</strong
                ><br />
                {{ this.$store.state.generalInformation.companyAddress }}<br />
                {{ this.$store.state.generalInformation.companyCity }}
              </p>
              <p style="text-align: center;">
                {{ this.$store.state.generalInformation.companyNumber }}
              </p>
              <p style="text-align: center;">
                <a
                  :href="
                    'mailto:' +
                    this.$store.state.generalInformation.companyEmail
                  "
                  >{{ this.$store.state.generalInformation.companyEmail }}</a
                >
              </p>
            </div>
          </div>
          <div class="bg-light">
            <div class="container">
              <h2 style="text-align: center;">Refund Policy</h2>
              <p style="text-align: center;">
                {{ this.$store.state.generalInformation.refundPolicy }}
              </p>
            </div>
          </div>
          <div class="container"></div>
        </div>
        <!-- .entry-content -->
      </article>
      <!-- #post -->
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'fade',
    mode: 'out-in',
    enterClass: 'fade-enter',
    duration: 150,
  },
  mounted() {
    const info = this.$store.state.generalInformation.generalInfo
  },
}
</script>

<style scoped></style>
