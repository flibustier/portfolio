export default {
  /*
   ** Headers of the page
   */
  head: {
    title: "Jon's Portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        async: true,
        defer: true,
        src: 'https://scripts.withcabin.com/hello.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#c67b47' },
  /*
   ** Global CSS
   */
  css: ['~assets/global.scss', '~assets/dark.scss', '~assets/icons.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-96167387-2'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  styleResources: {
    scss: ['./assets/vars.scss', './assets/colors.scss']
  }
}
