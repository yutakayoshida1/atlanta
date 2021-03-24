<template>
  <div>
    <div id="top"></div>
    <div id="page" class="hfeed site">
      <!-- #masthead -->
      <div id="main" class="site-main">
        <div id="primary" class="content-area">
          <div id="content" class="site-content" role="main">
            <article id="post-2" class="post-2 page type-page status-publish">
              <div class="entry-content">
                <homepage-controller />
                <div class="bg-white alt-color row">
                  <div class="container">
                    <div class="col-md-4">
                      <p>
                        <img
                          class="aligncenter wp-image-144 landing-page-image"
                          src="./../assets/seasonal_ingredients.png"
                        />
                      </p>
                      <h3 class="features-h3" style="text-align: center;">Seasonal Ingredients</h3>
                      <p class="features-p">
                        Our menus are developed from seasonal ingredients and
                        our recipes are constantly evolving—giving you variety
                        and options in your meal plan.
                      </p>
                    </div>
                    <div class="col-md-4">
                      <p>
                        <img
                          class="aligncenter wp-image-145 landing-page-image"
                          src="https://atlantamealprep.com/wp-content/uploads/2017/07/icon-utensils.png"
                          srcset="./../assets/something_for_everyone.png"
                        />
                      </p>
                      <h3 class="features-h3" style="text-align: center;">Something for Everyone</h3>
                      <p class="features-p">
                        We offer options to fit your needs—Paleo, Gluten-Free,
                        1200 Calorie, High Protein Diet, Vegan/Vegetarian, Keto,
                        breakfast, snacks and more.
                      </p>
                    </div>
                    <div class="col-md-4">
                      <p>
                        <img
                          class="aligncenter wp-image-143 landing-page-image"
                          src="./../assets/free_delivery.png"
                        />
                      </p>
                      <h3 class="features-h3" style="text-align: center;">Free Delivery</h3>
                      <p class="features-p">
                        Each of our weekly plans come with complimentary
                        delivery or pickup inside the Atlanta Perimeter.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="bg-pattern">
                  <div>
                    <h2 style="text-align: center;">How It Works</h2>
                    <div class="process-graphic">
                      <div class="process-item number">
                        <img
                          src="./../assets/flow_01.png"
                          class="flow-img"
                          alt=""
                        />
                        <p>Choose number of people/meals</p>
                      </div>
                      <div class="process-item meals">
                        <img
                          src="./../assets/flow_02.png"
                          class="flow-img"
                          alt=""
                        />
                        <p>Select entrees &amp; side options</p>
                      </div>
                      <div class="process-item payment">
                        <img
                          src="./../assets/flow_03.png"
                          class="flow-img"
                          alt=""
                        />
                        <p>Make your secure payment</p>
                      </div>
                      <div class="process-item delivery">
                        <img src="./../assets/flow_04.png" class="flow-img-small" alt="" />
                        <p>Receive free delivery</p>
                      </div>
                      <div class="process-item enjoy">
                        <img src="./../assets/flow_05.png" class="flow-img" alt="" />
                        <p>Heat &amp; enjoy at your convenience</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-white">
                  <div class="container">
                    <h2 style="text-align: center;">Let’s Get Cooking</h2>
                  </div>
                </div>
                <div class="bg-white pricing-table row">
                  <div class="container">
                    <div class="col-md-4">
                      <h3 style="text-align: center;">10 Meals</h3>
                      <h2 style="text-align: center;">$135.00</h2>
                      <p style="text-align: center;">
                        <a
                          class="button"
                          href="http://atlantamealprep.com/product/10-meals/"
                        >Choose Your Menu</a>
                      </p>
                    </div>
                    <div class="col-md-4">
                      <h3 style="text-align: center;">12 Meals</h3>
                      <h2 style="text-align: center;">$159.00</h2>
                      <p style="text-align: center;">
                        <a
                          class="button"
                          href="http://atlantamealprep.com/product/12-meals/"
                        >Choose Your Menu</a>
                      </p>
                    </div>
                    <div class="col-md-4">
                      <h3 style="text-align: center;">14 Meals</h3>
                      <h2 style="text-align: center;">$188.00</h2>
                      <p style="text-align: center;">
                        <a
                          class="button"
                          href="http://atlantamealprep.com/product/14-meals/"
                        >Choose Your Menu</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="bg-white">
                  <div class="container">
                    <h3 style="text-align: center;">View All Meal Plan Options:</h3>
                    <p style="text-align: center;">
                      <a class="button" href="http://atlantamealprep.com/order/">Shop Meal Plans</a>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homepageController from './../components/homepage/homepageController.vue'

export default {
  components: {
    homepageController,
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
    enterClass: 'fade-enter',
    duration: 150,
  },
}
</script>

<style>
.features-h3 {
  font-family: Nunito, Arial !important;
  font-style: normal !important;
  font-weight: 800 !important;
  font-size: 18px !important;
  line-height: 25px !important;
  text-align: center !important;
  color: #3c3c3c !important;
  letter-spacing: 0.2966px !important;
}

.flow-img {
  height: 160px !important;
}

.flow-img-small {
  height: 120px !important;
}

.features-p {
  font-family: Nunito !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 18px !important;
  line-height: 25px !important;
  text-align: center !important;
  letter-spacing: -0.1368px !important;
  color: #3c3c3c !important;
}

.landing-page-image {
  max-height: 136px;
  margin: 0px;
  margin-bottom: 16px;
}

.features-h3 {
  text-align: left !important;
  margin-top: 0px;
}

.features-p {
  text-align: left !important;
}
</style>
