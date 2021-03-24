<template>
  <div>
    <div id="main" class="site-main">
      <div id="primary" class="content-area">
        <div id="content" class="site-content" role="main">
          <article
            id="post-17"
            class="post-17 page type-page status-publish hentry"
          >
            <header class="entry-header">
              <div class="container">
                <h1 class="entry-title">My Account</h1>
              </div>
            </header>

            <div class="entry-content">
              <div class="container">
                <div class="woocommerce">
                  <div class="woocommerce-notices-wrapper"></div>

                  <div v-if="error" class="woocommerce-notices-wrapper">
                    <ul class="woocommerce-error" role="alert">
                      <li><strong>Error:</strong> {{ errorMessage }}</li>
                    </ul>
                  </div>

                  <div class="u-columns col2-set" id="customer_login">
                    <div class="u-column1 col-1">
                      <h2>Login</h2>

                      <div
                        class="woocommerce-form woocommerce-form-login login custom-form"
                        method="post"
                      >
                        <p
                          class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                        >
                          <label for="username">Email address</label>
                          <input
                            type="text"
                            class="woocommerce-Input woocommerce-Input--text input-text"
                            name="username"
                            id="username"
                            autocomplete="username"
                            value=""
                          />
                        </p>
                        <p
                          class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                        >
                          <label for="password">Password</label>
                          <span class="password-input"
                            ><input
                              class="woocommerce-Input woocommerce-Input--text input-text"
                              type="password"
                              name="password"
                              id="password"
                              autocomplete="current-password" /><span
                              class="show-password-input"
                            ></span
                          ></span>
                        </p>

                        <p class="form-row">
                          <label
                            class="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme"
                          >
                            <input
                              class="woocommerce-form__input woocommerce-form__input-checkbox"
                              name="rememberme"
                              type="checkbox"
                              id="rememberme"
                              value="forever"
                              style="width: max-content !important;"
                            />
                            <span>Remember me</span>
                          </label>
                          <input
                            type="hidden"
                            id="woocommerce-login-nonce"
                            name="woocommerce-login-nonce"
                            value="b0439e0209"
                          /><input
                            type="hidden"
                            name="_wp_http_referer"
                            value="/my-account/"
                          />
                          <button
                            type="submit"
                            class="woocommerce-button button woocommerce-form-login__submit"
                            name="login"
                            value="Log in"
                            @click="login()"
                          >
                            Log in
                          </button>
                        </p>
                        <p class="woocommerce-LostPassword lost_password">
                          <a href="">Lost your password?</a>
                        </p>
                      </div>
                    </div>

                    <div class="u-column2 col-2">
                      <h2>Register</h2>

                      <div
                        method="post"
                        class="woocommerce-form woocommerce-form-register custom-form"
                      >
                        <p
                          class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                        >
                          <label for="reg_email">Email address</label>
                          <input
                            type="email"
                            class="woocommerce-Input woocommerce-Input--text input-text"
                            name="email"
                            id="reg_email"
                            autocomplete="email"
                            value=""
                          />
                        </p>

                        <p
                          class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                        >
                          <label for="reg_password">Password</label>
                          <span class="password-input"
                            ><input
                              type="password"
                              class="woocommerce-Input woocommerce-Input--text input-text"
                              name="password"
                              id="reg_password"
                              autocomplete="new-password" /><span
                              class="show-password-input"
                            ></span
                          ></span>
                        </p>

                        <div class="woocommerce-privacy-policy-text"></div>
                        <p class="automatewoo-optin form-row">
                          <label
                            class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox"
                          >
                            <input
                              type="checkbox"
                              class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                              name="automatewoo_optin"
                              id="automatewoo_optin"
                              style="width: max-content !important;"
                            />
                            <span class="automatewoo-optin__checkbox-text"
                              >I want to receive updates about products and
                              promotions.</span
                            >
                          </label>
                        </p>
                        <p class="woocommerce-FormRow form-row">
                          <button
                            class="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                            @click="register()"
                          >
                            Register
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginAndGetJwt } from './../components/apiFunctions.js'

export default {
  data() {
    return {
      error: false,
      errorMessage: 'No error.',
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
    enterClass: 'fade-enter',
    duration: 150,
  },
  methods: {
    async register() {
      const registerStatus = await this.$axios.$post(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlRegister,
        {
          email: document.getElementById('reg_email').value,
          password: document.getElementById('reg_password').value,
          status: 'active',
        }
      )
      // the result
      if (registerStatus.status === 1) {
        // login the user
        if (
          loginAndGetJwt(
            document.getElementById('reg_email').value,
            document.getElementById('reg_password').value,
            this.$axios,
            this.$store
          )
        ) {
          this.$router.push({
            path: '/wizard',
          })
        }
      } else {
        // show the error
        this.error = true
        this.errorMessage = 'Account with this email already exists.'
      }
    },
    login() {
      if (
        loginAndGetJwt(
          document.getElementById('username').value,
          document.getElementById('password').value,
          this.$axios,
          this.$store
        )
      ) {
        this.$router.push({
          path: '/wizard',
        })
      } else {
        this.error = true
        this.errorMessage = 'Wrong credentials'
      }
    },
  },
  mounted() {
    if (this.$store.state.logedIn) {
      this.$router.push({
        path: '/wizard',
      })
    }
  },
}
</script>

<style scoped>
.custom-form {
  border: 1px solid #d3ced2;
  padding: 20px;
  margin: 2em 0;
  text-align: left;
  border-radius: 5px;
}

.custom-form input {
  font-size: 16px;
  font-size: 1.6rem;
  font-family: inherit;
  letter-spacing: normal;
  background: #f5f5f5;
  border: 0;
  border-radius: 0;
  outline-style: none;
  margin-bottom: 10px;
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  outline: 0;
  line-height: normal;
}

.custom-form textarea {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  outline: 0;
  line-height: normal;
}

@media only screen and (max-width: 1282px) {
  .woocommerce .col2-set .col-1, .woocommerce-page .col2-set .col-1 {
    width: 100%;
    float: none;
    padding-right: 0px;
  }
  .woocommerce .col2-set .col-2, .woocommerce-page .col2-set .col-2 {
    float: none;
    width: 100%;
  }
}
</style>
