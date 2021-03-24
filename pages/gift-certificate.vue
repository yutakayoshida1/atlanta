<template>
  <div id="main" class="site-main" style="width: 70% !important;">
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">
        <div class="woocommerce-notices-wrapper"></div>
        <div
          id="product-585"
          class="product type-product post-585 status-publish first instock product_cat-gift-certificate virtual purchasable product-type-simple"
        >
          <div class="summary entry-summary">
            <h1 class="product_title entry-title">
              Atlanta Meal Prep Gift Certificate
            </h1>
            <p class="price"></p>

            <br /><br />
            <div id="call_for_credit" class="wc-sc-call-for-credit-container">
              <div class="wc-sc-row">
                <div class="wc-sc-label">
                  <label for="credit_called">
                    Gift Certificate Amount ($)
                  </label>
                </div>
                <div class="wc-sc-input">
                  <input
                    id="credit_called"
                    step="any"
                    type="number"
                    min="1"
                    name="credit_called"
                    value=""
                    autocomplete="off"
                    autofocus=""
                    style="width: 100% !important;"
                  />
                  <!-- This line is required in this template -->
                </div>
              </div>
              <div class="wc-sc-row">
                <p
                  id="error_message"
                  class="wc-sc-error"
                  style="color: red;"
                ></p>
              </div>
            </div>
            <br />
            <div class="woocommerce-product-details__short-description">
              <p style="text-align: center;">
                Purchase a gift certificate in any amount for any of our meal
                plans, and send via email with a custom message.<br />
                Coupon codes are not valid for gift certificates.
              </p>
            </div>

            <form
              class="cart"
              action="https://atlantamealprep.com/product/gift-certificate/"
              method="post"
              enctype="multipart/form-data"
            >
              <div class="quantity" style="width: 90px; display: inline-block;">
                <label class="screen-reader-text" for="quantity_5f1d6807dba21"
                  >Atlanta Meal Prep Gift Certificate quantity</label
                >
                <input
                  type="number"
                  id="quantity_5f1d6807dba21"
                  class="input-text qty text"
                  step="1"
                  min="1"
                  max=""
                  name="quantity"
                  value="1"
                  title="Qty"
                  size="4"
                  placeholder=""
                  inputmode="numeric"
                />
              </div>

              <button
                type="submit"
                name="add-to-cart"
                value="585"
                class="single_add_to_cart_button button alt"
                style="display: inline-block;"
              >
                Add to cart
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
