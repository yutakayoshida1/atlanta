<template>
  <div>
    <article
      id="post-74685"
      class="post-74685 page type-page status-publish hentry"
    >
      <header class="entry-header">
        <div class="container">
          <h1 class="entry-title">Rewards</h1>
        </div>
      </header>
      <!-- .entry-header -->

      <div class="entry-content">
        <div>
          <div class="container">
            <h2 style="text-align: center;">
              Earn Points on Each Purchase Redeemable For Discounts!
            </h2>
          </div>
        </div>
        <div class="bg-white row">
          <div class="container pricing-table">
            <div class="col-md-4">
              <p>
                <img
                  class="aligncenter wp-image-74713"
                  src="https://atlantamealprep.com/wp-content/uploads/2020/02/receipt.png"
                  alt=""
                  width="88"
                  height="100"
                />
              </p>
              <p style="text-align: center;">
                Earn&nbsp;<strong>10 points</strong> for every $1 spent. Points
                never expire. You earn ’em, you keep ’em.
              </p>
            </div>
            <div class="col-md-4">
              <p>
                <img
                  class="aligncenter wp-image-74714"
                  src="https://atlantamealprep.com/wp-content/uploads/2020/02/refer-a-friend.png"
                  alt=""
                  width="100"
                  height="100"
                  srcset="
                    https://atlantamealprep.com/wp-content/uploads/2020/02/refer-a-friend.png         145w,
                    https://atlantamealprep.com/wp-content/uploads/2020/02/refer-a-friend-100x100.png 100w
                  "
                  sizes="(max-width: 100px) 100vw, 100px"
                />
              </p>
              <p style="text-align: center;">
                Earn <strong>100 points</strong> when you
                <strong
                  ><a href="https://atlantamealprep.com/referrals/"
                    >refer a friend</a
                  ></strong
                >
                to Atlanta Meal Prep and they complete their first order.
              </p>
            </div>
            <div class="col-md-4">
              <p>
                <img
                  class="aligncenter wp-image-74715"
                  src="https://atlantamealprep.com/wp-content/uploads/2020/02/rewards.png"
                  alt=""
                  width="106"
                  height="100"
                />
              </p>
              <p style="text-align: center;">
                For every <strong>5,000 points</strong> earned, we’ll
                automatically add <strong>$10</strong> in credit to your
                account. You can redeem when you checkout.
              </p>
            </div>
          </div>
        </div>
        <div class="bg-pattern">
          <div class="container">
            <h2 style="text-align: center;">Rewards FAQs</h2>
            <div
              id="accordion-rewards"
              class="panel-group"
              role="tablist"
              aria-multiselectable="true"
            >
              <div
                v-for="ques in questions"
                :key="ques.id"
                class="panel panel-default"
              >
                <div class="panel-heading" role="tab" :id="'heading' + ques.id">
                  <h4 class="panel-title">
                    <a
                      class="collapsed"
                      :href="'#collapse-rewards-' + ques.id"
                      data-toggle="collapse"
                      data-parent="#accordion-rewards"
                      role="button"
                      aria-expanded="true"
                      :aria-controls="'#collapse-rewards-' + ques.id"
                      >{{ ques.question }}</a
                    >
                  </h4>
                </div>
                <div
                  :id="'collapse-rewards-' + ques.id"
                  class="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading1"
                >
                  <div class="panel-body">
                    <p v-html="ques.answer"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
            style="
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: max-content;
            "
          >
            <nuxt-link to="/register" class="woocommerce-Button button"
              >Login or register</nuxt-link
            >
          </p>
        </div>

        <div class="container"></div>
      </div>
      <!-- .entry-content -->
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [],
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
    enterClass: 'fade-enter',
    duration: 150,
  },
  async mounted() {
    const questions = await this.$axios.$get(
      this.$store.state.apiConfiguration.baseUrl +
        this.$store.state.apiConfiguration.urlRewardsFAQ
    )
    this.questions = questions.data
  },
}
</script>

<style scoped></style>
