<template>
  <article
    id="post-64855"
    class="post-64855 page type-page status-publish hentry"
  >
    <header class="entry-header">
      <div class="container">
        <h1 class="entry-title">Referrals</h1>
      </div>
    </header>
    <!-- .entry-header -->

    <div class="entry-content">
      <div>
        <div class="container narrow">
          <p>
            <img
              class="aligncenter size-full wp-image-64867"
              src="https://atlantamealprep.com/wp-content/uploads/2019/12/food-party.png"
              alt=""
              width="560"
              height="133"
              srcset="
                https://atlantamealprep.com/wp-content/uploads/2019/12/food-party.png        560w,
                https://atlantamealprep.com/wp-content/uploads/2019/12/food-party-300x71.png 300w
              "
              sizes="(max-width: 560px) 100vw, 560px"
            />
          </p>
          <h2 style="text-align: center;">Give $15, Get $15</h2>
          <p style="text-align: center;">
            Invite a friend via Facebook, Twitter or email and they’ll get a $15
            welcome credit, plus you’ll get $15 in your own account with their
            first order, as our little thank you.
          </p>
          <p>&nbsp;</p>
        </div>
      </div>
      <div v-if="!this.$store.state.logedIn" class="bg-pattern">
        <div class="container">
          <div class="woocommerce">
            <div class="aw-referrals-share-container aw-referrals-share-page">
              <div class="aw-referrals-well">
                <h4>Please Login</h4>
                <p>You must have an account to refer a friend.</p>
                <p>
                  <nuxt-link to="/register" class="woocommerce-Button button"
                    >Login or register</nuxt-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container"></div>
    </div>
    <!-- .entry-content -->
  </article>
</template>

<script>
export default {}
</script>

<style scoped></style>
