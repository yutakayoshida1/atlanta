export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://code.jquery.com/jquery-2.2.4.min.js',
        integrity: 'sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=',
        crossorigin: 'anonymous',
      },
      {
        src: '/helpingFunctions.js',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    '~/global_css/neededOldStyles.css',
    '~/global_css/bootstrap.css',
    '~/global_css/neededOldStyles02.css',
    '~/global_css/neededOldStyles03.css',
    '~/global_css/neededOldStyles04.css',
    '~/global_css/fa-awesome.min.css',
    '~/global_css/oldJetpackStyle.css',
    '~/global_css/originStyles.css',
    '~/global_css/main.css',
    '~/global_css/center.minified.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/bootstrap.min.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-gmaps',
      {
        key: 'SET-YOUR-KEY',
    }],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    BaseURL: 'http://localhost/atlantameals/backend/atlanta-meal-prep/',
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
  },
  // Inside nuxt.config.js
  generate: {
    dir: '../dist',
  },
}
